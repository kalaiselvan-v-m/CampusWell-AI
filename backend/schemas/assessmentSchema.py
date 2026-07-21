from pydantic import BaseModel, Field
from datetime import datetime


class AssessmentCreate(BaseModel):

    academic_workload: int = Field(..., ge=1, le=5)
    exam_pressure: int = Field(..., ge=1, le=5)
    study_hours: int = Field(..., ge=0, le=16)
    sleep_hours: int = Field(..., ge=0, le=24)
    physical_activity: int = Field(..., ge=1, le=5)
    social_interaction: int = Field(..., ge=1, le=5)
    stress_level: int = Field(..., ge=1, le=5)
    anxiety_level: int = Field(..., ge=1, le=5)
    motivation_level: int = Field(..., ge=1, le=5)
    mood_level: int = Field(..., ge=1, le=5)

class AssessmentResponse(BaseModel):

    id: int
    student_id: int

    academic_workload: int
    exam_pressure: int
    study_hours: int

    sleep_hours: int
    physical_activity: int
    social_interaction: int

    stress_level: int
    anxiety_level: int
    motivation_level: int
    mood_level: int

    wellness_score: int
    risk_level: str

    created_at: datetime

    class Config:
        from_attributes = True