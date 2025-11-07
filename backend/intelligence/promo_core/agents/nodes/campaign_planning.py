from ..state import AgentState

def build_plan(state: AgentState) -> AgentState:
    kpis = state.kpis or {}
    top = kpis.get("top_products", [])
    top_names = [t.get("name", "Top Item") for t in top][:3]
    budget_hint = "Lean" if kpis.get("total_revenue", 0) < 100000 else "Standard"

    state.plan = {
        "objective": "Increase weekly revenue and engagement.",
        "audience": "Local buyers and repeat customers",
        "channels": ["Facebook", "Instagram", "WhatsApp"],
        "budget": budget_hint,
        "focus_products": top_names,
        "tactics": [
            "Run short carousel posts highlighting top products",
            "Pin a WhatsApp catalog with new arrivals",
            "Offer weekly micro-discounts on slow-movers",
        ],
    }
    return state
