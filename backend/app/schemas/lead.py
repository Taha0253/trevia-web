from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class LeadCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    chargers_count: Optional[str] = None
    message: Optional[str] = None
    inquiry_type: Optional[str] = "demo_request"

class LeadResponse(BaseModel):
    id: int
    full_name: str
    email: str
    company: Optional[str] = None
    inquiry_type: str
    created_at: datetime

    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    full_name: str
    email: EmailStr
    subject: Optional[str] = "General Inquiry"
    message: str
