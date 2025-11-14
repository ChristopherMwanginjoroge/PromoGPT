# import os
# from langchain_openai import ChatOpenAI

# def get_llm(model="gpt-4o-mini", temperature=0.3):
#     """Initialize an LLM for agent reasoning."""
#     key = os.getenv("OPENAI_API_KEY")
#     if not key:
#         raise ValueError("OPENAI_API_KEY not found in environment")
#     return ChatOpenAI(api_key=key, model=model, temperature=temperature)
"""
LLM configuration factory.
Uses langchain_openai.ChatOpenAI for LangChain v1.0.5.
"""
import os
from langchain_openai import ChatOpenAI

def get_llm(model: str = "gpt-4o-mini", temperature: float = 0.2):
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY not set")
    return ChatOpenAI(api_key=api_key, model=model, temperature=temperature)
