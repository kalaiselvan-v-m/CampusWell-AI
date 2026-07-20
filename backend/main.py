from fastapi import FastAPI
from database.database import Base, engine
from models import student


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="CampusWell AI"
)


@app.get("/")
def home():
    return {
        "message": "CampusWell AI Backend Running"
    }