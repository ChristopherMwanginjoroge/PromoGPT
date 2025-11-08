import os
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser


class BaseAgent:
    def __init__(self, prompt_template: str, model="gpt-4o-mini", temperature=0.3):
        """Base agent class using LangChain v1.0+ style."""
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY not found in environment")

        # Create model, parser, and prompt
        self.llm = ChatOpenAI(api_key=api_key, model=model, temperature=temperature)
        self.prompt = ChatPromptTemplate.from_template(prompt_template)
        self.parser = StrOutputParser()

    def run(self, **kwargs):
        """Execute a simple chain: Prompt | LLM | Parser"""
        chain = self.prompt | self.llm | self.parser
        return chain.invoke(kwargs)
