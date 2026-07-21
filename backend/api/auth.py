from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session


from database.database import get_db
from schemas.auth import (
    LoginRequest,
    TokenResponse
)

from services.authService import login_student



router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)



@router.post(
    "/login",
    response_model=TokenResponse
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db)
):

    token = login_student(
        db,
        request.email,
        request.password
    )


    if not token:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )


    return {
        "access_token": token,
        "token_type": "bearer"
    }