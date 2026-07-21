from sqlalchemy.orm import Session
from sqlalchemy import func

from models.student import Student
from models.assessment import Assessment
from engine.recommendationEngine import generate_recommendations

def get_dashboard(db: Session, student_id: int):

    student = (
        db.query(Student)
        .filter(Student.id == student_id)
        .first()
    )

    latest = (
        db.query(Assessment)
        .filter(Assessment.student_id == student_id)
        .order_by(Assessment.created_at.desc())
        .first()
    )

    total = (
        db.query(Assessment)
        .filter(Assessment.student_id == student_id)
        .count()
    )

    average = (
        db.query(
            func.avg(Assessment.wellness_score)
        )
        .filter(Assessment.student_id == student_id)
        .scalar()
    )
    recommendations = generate_recommendations(
        latest.wellness_score,
        latest.risk_level
    )

    if average is None:
        average = 0

    return {
        "student_name": student.full_name,
        "latest_score": latest.wellness_score,
        "risk_level": latest.risk_level,
        "total_assessments": total,
        "average_score": round(float(average), 2),
        "latest_assessment": latest.created_at,
        "recommendations": recommendations
    }