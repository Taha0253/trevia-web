from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional
from datetime import datetime


def _clean_required(value: str, field_name: str, max_length: int) -> str:
    stripped = value.strip()
    if not stripped:
        raise ValueError(f"{field_name} must not be blank")
    if len(stripped) > max_length:
        raise ValueError(f"{field_name} must be at most {max_length} characters")
    return stripped


def _clean_optional(value: Optional[str], max_length: int) -> Optional[str]:
    if value is None:
        return None
    stripped = value.strip()
    if not stripped:
        return None
    if len(stripped) > max_length:
        raise ValueError(f"value must be at most {max_length} characters")
    return stripped


class LeadCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    chargers_count: Optional[str] = None
    message: Optional[str] = None
    inquiry_type: Optional[str] = "demo_request"

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        return _clean_required(v, "full_name", 255)

    @field_validator("phone", "company", "chargers_count")
    @classmethod
    def validate_short_optional(cls, v: Optional[str]) -> Optional[str]:
        return _clean_optional(v, 255)

    @field_validator("message")
    @classmethod
    def validate_message(cls, v: Optional[str]) -> Optional[str]:
        return _clean_optional(v, 5000)

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

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        return _clean_required(v, "full_name", 255)

    @field_validator("message")
    @classmethod
    def validate_message(cls, v: str) -> str:
        return _clean_required(v, "message", 5000)

    @field_validator("subject")
    @classmethod
    def validate_subject(cls, v: Optional[str]) -> Optional[str]:
        return _clean_optional(v, 150) or "General Inquiry"

class ContactResponse(BaseModel):
    message: str
