from ..state import AgentState
from typing import Dict, Any

def compute_kpis(state: AgentState) -> AgentState:
    data = state.context.get("data", {})
    sales = data.get("sales", [])
    products = data.get("products", [])

    total_revenue = 0.0
    per_product: Dict[Any, float] = {}

    for s in sales:
        rev = float(s.get("revenue", 0) or 0)
        total_revenue += rev
        pid = s.get("product_id") or s.get("product") or s.get("product__id")
        if pid is not None:
            per_product[pid] = per_product.get(pid, 0.0) + rev

    # Get top products by revenue (map ids to names if available)
    product_name_by_id = {}
    for p in products:
        product_name_by_id[p.get("id")] = p.get("name") or f"Product {p.get('id')}"

    top = sorted(per_product.items(), key=lambda x: x[1], reverse=True)[:5]
    top_named = [{"product_id": pid, "name": product_name_by_id.get(pid, str(pid)), "revenue": val} for pid, val in top]

    state.kpis = {
        "total_revenue": total_revenue,
        "top_products": top_named,
        "products_count": len(products),
        "sales_records": len(sales),
    }
    return state
