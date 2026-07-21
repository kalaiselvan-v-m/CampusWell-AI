from sqlalchemy.orm import Session

from models.student import Student
from core.security import (
    verify_password,
    create_access_token
)



def login_student(
    db: Session,
    email: str,
    password: str
):

    student = db.query(Student).filter(
        Student.email == email
    ).first()


    if not student:
        return None


    if not verify_password(
        password,
        student.password_hash
    ):
        return None


    token = create_access_token(
        {
            "student_id": student.id,
            "email": student.email
        }
    )


    return token