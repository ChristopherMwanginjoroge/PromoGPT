from ..base_agent import BaseAgent
from ..utils.prompt_templates import performance_analysis_prompt


class PerformanceAnalysisAgent(BaseAgent):
    """Evaluates campaign outcomes and predicts KPIs."""

    def __init__(self):
        super().__init__(performance_analysis_prompt)

    def evaluate_performance(self, campaign):
        return self.run(campaign=campaign)
