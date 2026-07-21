from datetime import datetime
from pydantic import BaseModel


class DashboardResponse(BaseModel):
    student_name: str
    latest_score: int
    risk_level: str
    total_assessments: int
    average_score: float
    latest_assessment: datetime
    recommendations: list[str]

    class Config:
        from_attributes = True