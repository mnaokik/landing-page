from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid


class ContactFormCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=200)
    email: EmailStr
    phone: str = Field(..., min_length=8, max_length=20)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactFormResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    message: str
    created_at: datetime
    status: str = "pending"  # pending, contacted, resolved
    
    class Config:
        from_attributes = True


class ContactFormUpdate(BaseModel):
    status: Optional[str] = None
