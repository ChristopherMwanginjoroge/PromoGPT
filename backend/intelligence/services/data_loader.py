# intelligence/services/data_loader.py

import pandas as pd
from business_data.models import Product, SalesData

def load_business_data(business):
    """
    Loads and merges cleaned product and sales data for a given business.
    Returns a Pandas DataFrame ready for analysis by the intelligence agents.
    """

    # Get all cleaned product records for this business
    products = Product.objects.filter(business=business).values()
    sales = SalesData.objects.filter(business=business).values()

    # Convert to pandas DataFrames
    products_df = pd.DataFrame(list(products))
    sales_df = pd.DataFrame(list(sales))

    if products_df.empty and sales_df.empty:
        return pd.DataFrame()  # nothing to analyze

    # Merge datasets if both exist
    if not products_df.empty and not sales_df.empty:
        merged = pd.merge(
            sales_df,
            products_df,
            on="product_id",
            how="left"
        )
    elif not sales_df.empty:
        merged = sales_df
    else:
        merged = products_df

    # Clean columns (optional)
    merged = merged.fillna(0)

    return merged
