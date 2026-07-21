from sqlalchemy import Column, Integer, ForeignKey, DateTime, String
from sqlalchemy.sql import func
from database.database import Base


class Assessment(Base):
    __tablename__ = "assessments"

    id = Column(Integer, primary_key=True, index=True)

    student_id = Column(
        Integer,
        ForeignKey("students.id"),
        nullable=False
    )

    academic_workload = Column(Integer, nullable=False)
    exam_pressure = Column(Integer, nullable=False)
    study_hours = Column(Integer, nullable=False)

    sleep_hours = Column(Integer, nullable=False)
    physical_activity = Column(Integer, nullable=False)
    social_interaction = Column(Integer, nullable=False)

    stress_level = Column(Integer, nullable=False)
    anxiety_level = Column(Integer, nullable=False)
    motivation_level = Column(Integer, nullable=False)
    mood_level = Column(Integer, nullable=False)

    wellness_score = Column(Integer)
    risk_level = Column(String(20))

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )