from typing import Dict, Any

def preprocess_for_agents(payload: Dict[str, Any]) -> Dict[str, Any]:
    """
    Optional normalization before feeding the agent system.
    """
    payload.setdefault("business", {})
    payload.setdefault("data", {})
    payload["data"].setdefault("products", [])
    payload["data"].setdefault("sales", [])
    return payload
