KENYAN_HASHTAGS = ["#KenyaSME", "#BuyKenyaBuildKenya", "#NairobiDeals", "#JuaKali", "#ShopLocal"]

def tag_caption(caption: str) -> str:
    return caption + " " + " ".join(KENYAN_HASHTAGS[:3])
