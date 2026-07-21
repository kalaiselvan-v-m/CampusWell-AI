from sqlalchemy.orm import Session

from models.student import Student
from schemas.studentSchema import StudentCreate
from core.security import hash_password



def create_student(
    db: Session,
    student: StudentCreate
):

    hashed_password = hash_password(
        student.password
    )


    db_student = Student(

        full_name=student.full_name,

        email=student.email,

        password_hash=hashed_password,

        department=student.department,

        year=student.year,

        semester=student.semester

    )


    db.add(db_student)

    db.commit()

    db.refresh(db_student)


    return db_student



def get_students(
    db: Session
):

    return db.query(Student).all()