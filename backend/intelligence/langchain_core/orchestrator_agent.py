from .agents.business_intelligence_agent import BusinessIntelligenceAgent
from .agents.content_generation_agent import ContentGenerationAgent
from .agents.campaign_planning_agent import CampaignPlanningAgent
from .agents.performance_analysis_agent import PerformanceAnalysisAgent


class OrchestratorAgent:
    """Coordinates all agents and merges their outputs."""

    def __init__(self):
        self.bi_agent = BusinessIntelligenceAgent()
        self.content_agent = ContentGenerationAgent()
        self.campaign_agent = CampaignPlanningAgent()
        self.performance_agent = PerformanceAnalysisAgent()

    def run_full_pipeline(self, data):
        """Sequentially execute all agents and return combined insights."""
        insights = self.bi_agent.analyze_data(data)
        content = self.content_agent.create_content(insights)
        campaign = self.campaign_agent.plan_campaign(content)
        performance = self.performance_agent.evaluate_performance(campaign)

        return {
            "insights": insights,
            "content": content,
            "campaign": campaign,
            "performance": performance,
        }
