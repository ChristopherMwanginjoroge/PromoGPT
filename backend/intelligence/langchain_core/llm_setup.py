import os
from langchain_openai import ChatOpenAI

def get_llm(model="gpt-4o-mini", temperature=0.3):
    """Initialize an LLM for agent reasoning."""
    key = os.getenv("OPENAI_API_KEY")
    if not key:
        raise ValueError("OPENAI_API_KEY not found in environment")
    return ChatOpenAI(api_key=key, model=model, temperature=temperature)
