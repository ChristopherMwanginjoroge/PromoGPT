from typing import List, Optional, Dict, Any
from .agents.graph import app
from .agents.state import AgentState

def run_promogpt(
    user_request: str,
    uploaded_files: Optional[List[str]] = None,
    context: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """
    High-level entrypoint. Builds the graph app and runs the pipeline.
    """
    graph = app()  # Orchestrator
    state = AgentState(
        user_request=user_request,
        uploaded_files=uploaded_files or [],
        context=context or {}
    )
    # Invoke can be a simple call; kept generic for portability
    if hasattr(graph, "invoke"):
        return graph.invoke(state)
    return graph(state)
