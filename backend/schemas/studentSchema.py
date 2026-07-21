from pydantic import BaseModel, EmailStr

class StudentCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    department: str
    year: int
    semester: int

class StudentResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    department: str
    year: int
    semester: int
    
    class Config:
        from_attributes = True