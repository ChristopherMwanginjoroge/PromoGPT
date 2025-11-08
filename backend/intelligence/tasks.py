from celery import shared_task
from .models import IntelligenceReport
from .services.orchestrator import run_promogpt_pipeline

@shared_task
def run_promogpt_for_business(business_id):
    from business_data.models import Business
    business = Business.objects.get(id=business_id)
    output = run_promogpt_pipeline(business)

    IntelligenceReport.objects.create(
        business=business,
        status="completed",
        output_data=output
    )
    return "Report generated"
