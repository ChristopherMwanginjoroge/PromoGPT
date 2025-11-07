from ..state import AgentState

def analyze_performance(state: AgentState) -> AgentState:
    # Placeholder analytics based on plan; improve with real metrics later
    state.performance = {
        "kpi_map": {
            "reach": "Expected to rise with consistent posting",
            "engagement": "Use product FAQs & polls in stories",
            "conversion": "Promote WhatsApp ordering & quick replies",
        },
        "next_best_actions": [
            "A/B test captions (short vs. detailed)",
            "Bundle top product with a slow-mover",
            "Run weekend-only offer with limited stock message",
        ],
    }
    return state
