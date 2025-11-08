from ..base_agent import BaseAgent
from ..utils.prompt_templates import content_generation_prompt


class ContentGenerationAgent(BaseAgent):
    """Generates marketing content ideas based on insights."""

    def __init__(self):
        super().__init__(content_generation_prompt)

    def create_content(self, insights):
        return self.run(insights=insights)
