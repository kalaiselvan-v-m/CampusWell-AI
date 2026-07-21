from fastapi import FastAPI
from api.auth import router as auth_router
from api.student import router as student_router
from api.assessment import router as assessment_router
from api.dashboard import router as dashboard_router
from database.database import Base, engine
from core.security import verify_token
from fastapi import Depends
from models.assessment import Assessment

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CampusWell AI",
    version="1.0.0"
)

app.include_router(student_router)
app.include_router(auth_router)
app.include_router(assessment_router)
app.include_router(dashboard_router)

@app.get("/")
def home():
    return {
        "message": "CampusWell AI Backend Running"
    }

@app.get("/me")
def get_me(current_user=Depends(verify_token)):
    return current_user