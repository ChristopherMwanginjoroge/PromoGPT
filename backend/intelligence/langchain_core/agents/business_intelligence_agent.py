from ..base_agent import BaseAgent
from ..utils.prompt_templates import business_intelligence_prompt

class BusinessIntelligenceAgent(BaseAgent):
    def __init__(self):
        super().__init__(business_intelligence_prompt)

    def analyze_data(self, data):
        return self.run(data=data)
