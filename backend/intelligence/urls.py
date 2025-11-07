from django.urls import path
from .views import TriggerReportView, LatestReportView

urlpatterns = [
    path("<slug:business_slug>/report/run/", TriggerReportView.as_view(), name="intelligence-trigger"),
    path("<slug:business_slug>/report/",     LatestReportView.as_view(),  name="intelligence-latest"),
]
