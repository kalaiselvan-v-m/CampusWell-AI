from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from schemas.studentSchema import StudentCreate, StudentResponse
from services.studentService import create_student, get_students

router = APIRouter(
    prefix="/students",
    tags=["Students"]
)


@router.post("/", response_model=StudentResponse)
def register_student(
    student: StudentCreate,
    db: Session = Depends(get_db)
):
    return create_student(db, student)


@router.get("/", response_model=list[StudentResponse])
def fetch_students(
    db: Session = Depends(get_db)
):
    return get_students(db)