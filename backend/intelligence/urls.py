from django.urls import path
from .views import TriggerReportView, LatestReportView

urlpatterns = [
    path("<slug:slug>/report/run/", TriggerReportView.as_view(), name="run_report"),
    path("<slug:slug>/report/", LatestReportView.as_view(), name="latest_report"),
]
