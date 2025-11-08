from ..base_agent import BaseAgent
from ..utils.prompt_templates import campaign_planning_prompt


class CampaignPlanningAgent(BaseAgent):
    """Designs posting schedule and channel plan."""

    def __init__(self):
        super().__init__(campaign_planning_prompt)

    def plan_campaign(self, content):
        return self.run(content=content)
