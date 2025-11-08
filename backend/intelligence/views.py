from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import IntelligenceReport
from .tasks import run_promogpt_for_business

class TriggerReportView(APIView):
    def post(self, request, slug):
        from business_data.models import Business
        business = Business.objects.get(slug=slug)
        run_promogpt_for_business.delay(business.id)
        return Response({"message": "Report generation started"}, status=status.HTTP_202_ACCEPTED)

class LatestReportView(APIView):
    def get(self, request, slug):
        from business_data.models import Business
        business = Business.objects.get(slug=slug)
        report = IntelligenceReport.objects.filter(business=business).order_by("-created_at").first()
        if not report:
            return Response({"status": "empty"}, status=status.HTTP_204_NO_CONTENT)
        return Response(report.output_data, status=status.HTTP_200_OK)
