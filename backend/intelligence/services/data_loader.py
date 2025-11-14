# import pandas as pd
# from business_data.models import Product, SalesData

# def load_business_data(business):
#     """Combine all data for this business into a single dataset."""
#     products = list(Product.objects.filter(business=business).values())
#     sales = list(SalesData.objects.filter(business=business).values())

#     if not products and not sales:
#         return "No data available."

#     df_prod = pd.DataFrame(products)
#     df_sales = pd.DataFrame(sales)
#     merged = pd.merge(df_sales, df_prod, on="product_id", how="left")
#     return merged.to_dict(orient="records")

# defensive data loader that merges product + sales
import pandas as pd

def load_business_data(business):
    """
    Return a list of records combining sales and product information for given business instance.
    """
    # lazy import models to avoid import-time circularity
    try:
        from business_data.models import Product
    except Exception:
        Product = None

    SalesModel = None
    try:
        from business_data.models import SalesData as SalesModel
    except Exception:
        try:
            from business_data.models import Sale as SalesModel
        except Exception:
            SalesModel = None

    products = list(Product.objects.filter(business=business).values()) if Product else []
    sales = list(SalesModel.objects.filter(business=business).values()) if SalesModel else []

    if not products and not sales:
        return []

    # convert to DF for merging
    df_p = pd.DataFrame(products) if products else pd.DataFrame()
    df_s = pd.DataFrame(sales) if sales else pd.DataFrame()

    if not df_p.empty and not df_s.empty:
        # attempt join
        if "product_id" in df_s.columns and "id" in df_p.columns:
            merged = pd.merge(df_s, df_p, left_on="product_id", right_on="id", how="left")
        else:
            # try product foreign key naming patterns
            left = next((c for c in df_s.columns if "product" in c and "id" in c), None)
            right = next((c for c in df_p.columns if "id" in c), None)
            if left and right:
                merged = pd.merge(df_s, df_p, left_on=left, right_on=right, how="left")
            else:
                # fallback: concat
                df_p["_type"] = "product"
                df_s["_type"] = "sale"
                merged = pd.concat([df_s, df_p], ignore_index=True, sort=False)
    elif not df_s.empty:
        merged = df_s
    else:
        merged = df_p

    merged = merged.fillna("")
    return merged.to_dict(orient="records")
