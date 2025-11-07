import os
from ..state import AgentState

def _fallback_copy(top_names):
    top_str = ", ".join(top_names) if top_names else "your best sellers"
    return {
        "facebook_post": f"🔥 This week’s hot picks: {top_str}! Grab yours before they sell out. #ShopLocal",
        "instagram_caption": f"✨ Fresh deals on {top_str}. Tap to order! #KenyaSME #Deals",
        "whatsapp_blast": f"Hello! Special offers running on {top_str}. Reply to order or ask for details.",
    }

def generate_content(state: AgentState) -> AgentState:
    top_names = state.plan.get("focus_products", [])
    # Optional: call OpenAI if key exists; fallback to heuristics otherwise
    if os.getenv("OPENAI_API_KEY"):
        # Keep simple to avoid coupling; you can expand to full prompts
        try:
            from openai import OpenAI
            client = OpenAI()
            prompt = f"Write short social copy (FB, IG, WhatsApp) for products: {', '.join(top_names)}."
            chat = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role":"user","content": prompt}],
                max_tokens=250,
            )
            txt = chat.choices[0].message.content.strip()
            state.content = {"raw": txt}
            return state
        except Exception:
            pass

    state.content = _fallback_copy(top_names)
    return state
