from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from core.security import verify_token

from services.dashboardService import get_dashboard
from schemas.dashboardSchema import DashboardResponse

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/", response_model=DashboardResponse)
def dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(verify_token)
):

    return get_dashboard(
        db,
        current_user["student_id"]
    )