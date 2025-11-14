# from .agents.business_intelligence_agent import BusinessIntelligenceAgent
# from .agents.content_generation_agent import ContentGenerationAgent
# from .agents.campaign_planning_agent import CampaignPlanningAgent
# from .agents.performance_analysis_agent import PerformanceAnalysisAgent


# class OrchestratorAgent:
#     """Coordinates all agents and merges their outputs."""

#     def __init__(self):
#         self.bi_agent = BusinessIntelligenceAgent()
#         self.content_agent = ContentGenerationAgent()
#         self.campaign_agent = CampaignPlanningAgent()
#         self.performance_agent = PerformanceAnalysisAgent()

#     def run_full_pipeline(self, data):
#         """Sequentially execute all agents and return combined insights."""
#         insights = self.bi_agent.analyze_data(data)
#         content = self.content_agent.create_content(insights)
#         campaign = self.campaign_agent.plan_campaign(content)
#         performance = self.performance_agent.evaluate_performance(campaign)

#         return {
#             "insights": insights,
#             "content": content,
#             "campaign": campaign,
#             "performance": performance,
#         }

from .agents.business_intelligence_agent import BusinessIntelligenceAgent
from .agents.content_generation_agent import ContentGenerationAgent
from .agents.campaign_planning_agent import CampaignPlanningAgent
from .agents.performance_analysis_agent import PerformanceAnalysisAgent

class OrchestratorAgent:
    def __init__(self):
        self.bi_agent = BusinessIntelligenceAgent()
        self.content_agent = ContentGenerationAgent()
        self.campaign_agent = CampaignPlanningAgent()
        self.performance_agent = PerformanceAnalysisAgent()

    def run_full_pipeline(self, data):
        # data is expected as list-of-dicts or dict with 'user_message' etc
        # Primary BI step
        try:
            insights = self.bi_agent.analyze_data(data)
        except Exception as e:
            insights = f"BI agent failed: {e}"

        try:
            content = self.content_agent.create_content(insights)
        except Exception as e:
            content = f"Content agent failed: {e}"

        try:
            campaign = self.campaign_agent.plan_campaign(content)
        except Exception as e:
            campaign = f"Campaign agent failed: {e}"

        try:
            performance = self.performance_agent.evaluate_performance(campaign)
        except Exception as e:
            performance = f"Performance agent failed: {e}"

        return {
            "insights": insights,
            "content": content,
            "campaign": campaign,
            "performance": performance,
        }

