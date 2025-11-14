"""
DB-accessible tools for LangChain chat agents.
Each function is lightweight and does DB queries inside the function to avoid import-time cycles.
We will return JSON-serializable outputs.
"""

def _safe_import_business_models():
    try:
        from business_data.models import Product, SalesData, Business
    except Exception:
        # try alternate names
        try:
            from business_data.models import Product
            SalesData = None
            Business = None
        except Exception:
            Product = None
            SalesData = None
            Business = None
    return Product, SalesData, Business

def get_all_products_for_business(slug):
    Product, SalesData, Business = _safe_import_business_models()
    if not Product or not Business:
        return []
    try:
        b = Business.objects.get(slug=slug)
    except Business.DoesNotExist:
        return []
    qs = Product.objects.filter(business=b).values("id", "name", "price", "category")
    return list(qs)

def get_sales_summary_for_business(slug, limit=1000):
    Product, SalesData, Business = _safe_import_business_models()
    if not SalesData or not Business:
        return []
    try:
        b = Business.objects.get(slug=slug)
    except Business.DoesNotExist:
        return []
    qs = SalesData.objects.filter(business=b).values("id", "product_id", "quantity", "total_revenue", "sale_date")[:limit]
    return list(qs)

def get_chat_tools_for_business(slug):
    """
    Return a list/dict of callables that the orchestrator/chat agent can use.
    For LangChain v1.0+ tool registration differs; we present the raw callables to be used
    by your custom agent implementation.
    """
    return {
        "get_all_products": lambda _: get_all_products_for_business(slug),
        "get_sales_summary": lambda _: get_sales_summary_for_business(slug),
    }
