# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import IntelligenceReport
# from .tasks import run_promogpt_for_business

# class TriggerReportView(APIView):
#     def post(self, request, slug):
#         from business_data.models import Business
#         business = Business.objects.get(slug=slug)
#         run_promogpt_for_business.delay(business.id)
#         return Response({"message": "Report generation started"}, status=status.HTTP_202_ACCEPTED)

# class LatestReportView(APIView):
#     def get(self, request, slug):
#         from business_data.models import Business
#         business = Business.objects.get(slug=slug)
#         report = IntelligenceReport.objects.filter(business=business).order_by("-created_at").first()
#         if not report:
#             return Response({"status": "empty"}, status=status.HTTP_204_NO_CONTENT)
#         return Response(report.output_data, status=status.HTTP_200_OK)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os
from django.conf import settings

class TriggerReportView(APIView):
    def post(self, request, slug):
        # lazy-imports
        try:
            from .tasks import run_promogpt_for_business
            from business_data.models import Business
        except Exception as e:
            return Response({"error": "Server import error", "detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            business = Business.objects.get(slug=slug)
        except Business.DoesNotExist:
            return Response({"detail": "Business not found"}, status=status.HTTP_404_NOT_FOUND)

        run_promogpt_for_business.delay(business.id)
        return Response({"message": "processing"}, status=status.HTTP_202_ACCEPTED)


class LatestReportView(APIView):
    def get(self, request, slug):
        from .models import IntelligenceReport
        try:
            report = IntelligenceReport.objects.filter(business_slug=slug).order_by("-created_at").first()
            if not report:
                return Response({"detail": "no report"}, status=status.HTTP_204_NO_CONTENT)
            return Response(report.output_data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ChatAgentView(APIView):
    """
    Lightweight chat endpoint that uses LangChain orchestrator or the chat agent.
    The agent is allowed to call tools that fetch DB data.
    """
    def post(self, request):
        user_message = request.data.get("message")
        business_slug = request.data.get("business_slug")
        if not user_message:
            return Response({"error": "message required"}, status=status.HTTP_400_BAD_REQUEST)

        # lazy import to avoid startup issues
        try:
            from .langchain_core.orchestrator_agent import OrchestratorAgent
            from .tools.data_tools import get_chat_tools_for_business
        except Exception as e:
            return Response({"error": "internal import error", "detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # initialize orchestrator (agents)
        try:
            orchestrator = OrchestratorAgent()
            # if you want the chat to use tools, pass business-specific tool wrappers
            tools = get_chat_tools_for_business(business_slug) if business_slug else []
            # For simplicity we will run a small chain: ask the orchestrator to answer with context
            # If you have a dedicated chat agent with tool support, call that instead.
            result = orchestrator.run_full_pipeline({"user_message": user_message, "business_slug": business_slug})
            return Response({"reply": result}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": "agent error", "detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TTSView(APIView):
    """
    Accepts JSON { text: "..." } and returns an audio file URL (requires ELEVENLABS_API_KEY).
    """
    def post(self, request):
        text = request.data.get("text")
        voice = request.data.get("voice", "alloy")
        if not text:
            return Response({"error": "text required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            from .services.tts import text_to_speech
            filepath = text_to_speech(text, voice=voice)
            # build absolute url
            from django.conf import settings
            from django.http import HttpRequest
            # If host detection is not available, return relative path
            return Response({"audio_path": filepath}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
