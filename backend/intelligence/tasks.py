# from celery import shared_task
# from .models import IntelligenceReport
# from .services.orchestrator import run_promogpt_pipeline

# @shared_task
# def run_promogpt_for_business(business_id):
#     from business_data.models import Business
#     business = Business.objects.get(id=business_id)
#     output = run_promogpt_pipeline(business)

#     IntelligenceReport.objects.create(
#         business=business,
#         status="completed",
#         output_data=output
#     )
#     return "Report generated"

from celery import shared_task
from django.utils import timezone

@shared_task(bind=True)
def run_promogpt_for_business(self, business_id):
    """
    Celery entry point to run the LangChain orchestrator for a business.
    """
    try:
        # lazy imports
        from business_data.models import Business
        from .models import IntelligenceReport
        from .services.orchestrator import run_promogpt_pipeline
    except Exception as e:
        raise

    business = Business.objects.get(id=business_id)
    report = IntelligenceReport.objects.create(business_slug=business.slug, status="processing", created_at=timezone.now())

    try:
        output = run_promogpt_pipeline(business)
        report.output_data = output
        report.status = "completed"
        report.save()
    except Exception as e:
        report.status = "failed"
        report.output_data = {"error": str(e)}
        report.save()
        raise

    return {"status": "ok", "report_id": report.id}
