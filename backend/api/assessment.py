from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from schemas.assessmentSchema import AssessmentCreate, AssessmentResponse
from services.assessmentService import (create_assessment, get_student_assessments)
from core.security import verify_token

router = APIRouter(
    prefix="/assessment",
    tags=["Assessment"]
)


@router.post("/", response_model=AssessmentResponse)
def submit_assessment(
    assessment: AssessmentCreate,
    db: Session = Depends(get_db),
    current_user=Depends(verify_token)
):
    student_id = current_user["student_id"]

    return create_assessment(
        db=db,
        student_id=student_id,
        assessment=assessment
    )

@router.get("/me", response_model=list[AssessmentResponse])
def my_assessments(
    db: Session = Depends(get_db),
    current_user=Depends(verify_token)
):

    return get_student_assessments(
        db,
        current_user["student_id"]
    )