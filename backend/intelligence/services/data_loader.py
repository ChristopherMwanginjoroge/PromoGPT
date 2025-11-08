import pandas as pd
from business_data.models import Product, SalesData

def load_business_data(business):
    """Combine all data for this business into a single dataset."""
    products = list(Product.objects.filter(business=business).values())
    sales = list(SalesData.objects.filter(business=business).values())

    if not products and not sales:
        return "No data available."

    df_prod = pd.DataFrame(products)
    df_sales = pd.DataFrame(sales)
    merged = pd.merge(df_sales, df_prod, on="product_id", how="left")
    return merged.to_dict(orient="records")
