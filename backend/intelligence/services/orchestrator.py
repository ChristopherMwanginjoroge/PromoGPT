from ..langchain_core.orchestrator_agent import OrchestratorAgent
from .data_loader import load_business_data


def run_promogpt_pipeline(business):
    """Fetch data → run LangChain agents → return full report."""
    data = load_business_data(business)
    orchestrator = OrchestratorAgent()
    result = orchestrator.run_full_pipeline(data)
    return result
