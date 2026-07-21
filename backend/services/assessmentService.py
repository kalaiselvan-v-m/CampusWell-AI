from sqlalchemy.orm import Session

from models.assessment import Assessment
from schemas.assessmentSchema import AssessmentCreate

from engine.wellnessEngine import calculate_wellness_score


def create_assessment(
    db: Session,
    student_id: int,
    assessment: AssessmentCreate
):

    score, risk = calculate_wellness_score(assessment)

    db_assessment = Assessment(

        student_id=student_id,

        academic_workload=assessment.academic_workload,
        exam_pressure=assessment.exam_pressure,
        study_hours=assessment.study_hours,

        sleep_hours=assessment.sleep_hours,
        physical_activity=assessment.physical_activity,
        social_interaction=assessment.social_interaction,

        stress_level=assessment.stress_level,
        anxiety_level=assessment.anxiety_level,
        motivation_level=assessment.motivation_level,
        mood_level=assessment.mood_level,

        wellness_score=score,
        risk_level=risk
    )

    db.add(db_assessment)
    db.commit()
    db.refresh(db_assessment)

    return db_assessment

def get_student_assessments(
    db: Session,
    student_id: int
):
    return (
        db.query(Assessment)
        .filter(
            Assessment.student_id == student_id
        )
        .order_by(
            Assessment.created_at.desc()
        )
        .all()
    )