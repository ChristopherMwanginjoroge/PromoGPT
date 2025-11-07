from typing import Callable
from .state import AgentState
from .nodes.business_intelligence import compute_kpis
from .nodes.campaign_planning import build_plan
from .nodes.content_generation import generate_content
from .nodes.scheduling import suggest_schedule
from .nodes.performance_analysis import analyze_performance

class Orchestrator:
    """
    Minimal orchestrator that passes a shared AgentState through ordered nodes.
    """

    def __init__(self):
        self.pipeline: list[Callable[[AgentState], AgentState]] = [
            compute_kpis,
            build_plan,
            generate_content,
            suggest_schedule,
            analyze_performance,
        ]

    def __call__(self, state: AgentState) -> dict:
        for step in self.pipeline:
            state = step(state)
        # Final dict return for easy JSON serialization
        return {
            "kpis": state.kpis,
            "plan": state.plan,
            "content": state.content,
            "schedule": state.schedule,
            "performance": state.performance,
        }

    # Optional LangGraph-like API
    def invoke(self, state: AgentState) -> dict:
        return self(state)

def app() -> Orchestrator:
    return Orchestrator()
