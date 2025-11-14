# from ..langchain_core.orchestrator_agent import OrchestratorAgent
# from .data_loader import load_business_data


# def run_promogpt_pipeline(business):
#     """Fetch data → run LangChain agents → return full report."""
#     data = load_business_data(business)
#     orchestrator = OrchestratorAgent()
#     result = orchestrator.run_full_pipeline(data)
#     return result


def run_promogpt_pipeline(business):
    """
    Load data and run the orchestrator agent; returns dict of outputs.
    """
    # lazy imports
    from .data_loader import load_business_data
    try:
        from ..langchain_core.orchestrator_agent import OrchestratorAgent
    except Exception:
        # alternate import path if necessary
        from intelligence.langchain_core.orchestrator_agent import OrchestratorAgent

    data = load_business_data(business)
    orchestrator = OrchestratorAgent()
    result = orchestrator.run_full_pipeline(data)
    return result
