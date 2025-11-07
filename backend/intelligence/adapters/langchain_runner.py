import os
import sys
from pathlib import Path
from typing import Any, Dict

PROMO_CORE_DIR = Path(__file__).resolve().parent.parent / "promo_core"
sys.path.append(str(PROMO_CORE_DIR))

_run_promogpt = None
_build_graph_app = None
_AgentState = None

# Preferred: function entrypoint in promo_core/main.py
try:
    from promo_core.main import run_promogpt as _run_promogpt
except Exception as e:
    _run_promogpt = None
    print("⚠️ PromoGPT adapter: could not import run_promogpt:", e)

# Fallback: graph + AgentState (invoke-style)
try:
    from promo_core.agents.graph import app as _build_graph_app
    from promo_core.agents.state import AgentState as _AgentState
except Exception as e:
    _build_graph_app = None
    _AgentState = None
    print("ℹ️ PromoGPT adapter: graph/state not loaded:", e)

class LangchainAdapter:
    """
    Thin adapter that calls your PromoGPT system without modifying your code.
    """

    def __init__(self):
        self.openai_key = os.getenv("OPENAI_API_KEY", "")

    def _build_user_request(self, business: Dict[str, Any], data: Dict[str, Any]) -> str:
        biz_name = business.get("name") or f"business-{business.get('id','?')}"
        products = data.get("products", [])
        sales = data.get("sales", [])
        return (
            f"Analyze SME '{biz_name}'. Consider the following product and sales snapshots. "
            f"Products sample: {products[:5]}. Sales sample: {sales[:5]}. "
            f"Return concise BI insights, campaign plan, content ideas, scheduling, and performance analysis."
        )

    def run(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        business = payload.get("business") or {}
        data = payload.get("data") or {}

        # 1) Preferred: your function
        if _run_promogpt:
            try:
                request_text = self._build_user_request(business, data)
                result = _run_promogpt(user_request=request_text, uploaded_files=None, context={"business": business, "data": data})
                return {"result": result, "via": "run_promogpt"}
            except Exception as e:
                return {"error": f"run_promogpt failed: {e}"}

        # 2) Fallback: graph + AgentState
        if _build_graph_app and _AgentState:
            try:
                initial_state = _AgentState(
                    user_request=f"Analyze business {business.get('name','?')} with provided product & sales payload.",
                    uploaded_files=None,
                    context={"business": business, "data": data}
                )
                graph = _build_graph_app() if callable(_build_graph_app) else _build_graph_app
                if hasattr(graph, "invoke"):
                    result = graph.invoke(initial_state)
                else:
                    result = graph(initial_state)
                return {"result": result, "via": "graph.invoke"}
            except Exception as e:
                return {"error": f"graph execution failed: {e}"}

        return {"error": "No valid PromoGPT entrypoint found (run_promogpt or graph.app)."}
