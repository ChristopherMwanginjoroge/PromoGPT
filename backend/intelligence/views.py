from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from users.models import Business
from .models import IntelligenceReport
from .serializers import IntelligenceReportSerializer
from .tasks import run_promogpt_for_business

class TriggerReportView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request, business_slug):
        try:
            business = Business.objects.get(slug=business_slug)
        except Business.DoesNotExist:
            return Response({"error": "Business not found"}, status=status.HTTP_404_NOT_FOUND)

        run_promogpt_for_business.delay(business.id)
        return Response({"message": "Report generation started"}, status=status.HTTP_202_ACCEPTED)

class LatestReportView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, business_slug):
        try:
            business = Business.objects.get(slug=business_slug)
        except Business.DoesNotExist:
            return Response({"error": "Business not found"}, status=status.HTTP_404_NOT_FOUND)

        report = IntelligenceReport.objects.filter(business=business).order_by("-created_at").first()
        if not report:
            return Response({"message": "No report yet"}, status=status.HTTP_204_NO_CONTENT)

        return Response(IntelligenceReportSerializer(report).data, status=status.HTTP_200_OK)
