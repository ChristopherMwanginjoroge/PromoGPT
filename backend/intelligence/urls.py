from django.urls import path
from .views import TriggerReportView, LatestReportView,ChatAgentView,TTSView

urlpatterns = [
    path("<slug:slug>/report/run/", TriggerReportView.as_view(), name="run_report"),
    path("<slug:slug>/report/", LatestReportView.as_view(), name="latest_report"),
    path("chat/", ChatAgentView.as_view(), name="chat-agent"),
    path("tts/", TTSView.as_view(), name="tts"),
]
