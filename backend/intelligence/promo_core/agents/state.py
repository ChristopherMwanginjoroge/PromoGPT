from pydantic import BaseModel, Field
from typing import Any, Dict, List

class AgentState(BaseModel):
    user_request: str
    uploaded_files: List[str] = Field(default_factory=list)
    # context holds {"business": {...}, "data": {"products": [...], "sales": [...]} }
    context: Dict[str, Any] = Field(default_factory=dict)

    # shared outputs
    kpis: Dict[str, Any] = Field(default_factory=dict)
    plan: Dict[str, Any] = Field(default_factory=dict)
    content: Dict[str, Any] = Field(default_factory=dict)
    schedule: Dict[str, Any] = Field(default_factory=dict)
    performance: Dict[str, Any] = Field(default_factory=dict)
