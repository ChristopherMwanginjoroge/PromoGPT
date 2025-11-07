from celery import shared_task
from django.db import transaction
from users.models import Business
from .models import IntelligenceReport
from .adapters.langchain_runner import LangchainAdapter
from .services.data_loader import load_business_data
from .services.preprocessor import preprocess_for_agents
from .services.postprocessor import postprocess_agent_output

@shared_task(bind=True)
def run_promogpt_for_business(self, business_id: int):
    try:
        business = Business.objects.get(id=business_id)
    except Business.DoesNotExist:
        return {"error": f"Business {business_id} not found"}

    data = load_business_data(business)
    payload = preprocess_for_agents({
        "business": {"id": business.id, "name": business.name, "slug": business.slug},
        "data": data,
    })

    with transaction.atomic():
        report = IntelligenceReport.objects.create(
            business=business,
            input_data=payload,
            status="running",
        )

    adapter = LangchainAdapter()
    raw = adapter.run(payload)

    with transaction.atomic():
        if "error" in raw:
            report.status = "error"
            report.error_message = raw["error"]
        else:
            report.status = "success"
            report.output_data = postprocess_agent_output(raw.get("result"))
        report.save()

    return {"report_id": report.id, "status": report.status}
