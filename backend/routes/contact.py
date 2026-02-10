from fastapi import APIRouter, HTTPException, status, Depends
from models.contact import ContactFormCreate, ContactFormResponse, ContactFormUpdate
from motor.motor_asyncio import AsyncIOMotorDatabase
from datetime import datetime
import uuid

router = APIRouter(prefix="/api/contact", tags=["contact"])


def get_db():
    """Dependency to get database instance"""
    from server import db
    return db


@router.post("/", response_model=ContactFormResponse, status_code=status.HTTP_201_CREATED)
async def create_contact_form(contact_data: ContactFormCreate, db: AsyncIOMotorDatabase = Depends(get_db)):
    """
    Create a new contact form submission
    """
    try:
        contact_dict = {
            "id": str(uuid.uuid4()),
            "name": contact_data.name,
            "email": contact_data.email,
            "phone": contact_data.phone,
            "message": contact_data.message,
            "created_at": datetime.utcnow(),
            "status": "pending"
        }
        
        result = await db['contact_forms'].insert_one(contact_dict)
        
        if result.inserted_id:
            return ContactFormResponse(**contact_dict)
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create contact form"
            )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating contact form: {str(e)}"
        )


@router.get("/", response_model=list[ContactFormResponse])
async def get_all_contacts(skip: int = 0, limit: int = 100, status_filter: str = None, db: AsyncIOMotorDatabase = Depends(get_db)):
    """
    Get all contact form submissions with optional filtering
    """
    try:
        query = {}
        if status_filter:
            query["status"] = status_filter
        
        cursor = db['contact_forms'].find(query, {"_id": 0}).sort("created_at", -1).skip(skip).limit(limit)
        contacts = await cursor.to_list(length=limit)
        
        return [ContactFormResponse(**contact) for contact in contacts]
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching contacts: {str(e)}"
        )


@router.get("/{contact_id}", response_model=ContactFormResponse)
async def get_contact_by_id(contact_id: str, db: AsyncIOMotorDatabase = Depends(get_db)):
    """
    Get a specific contact form by ID
    """
    try:
        contact = await db['contact_forms'].find_one({"id": contact_id}, {"_id": 0})
        
        if not contact:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Contact with ID {contact_id} not found"
            )
        
        return ContactFormResponse(**contact)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching contact: {str(e)}"
        )


@router.patch("/{contact_id}", response_model=ContactFormResponse)
async def update_contact_status(contact_id: str, update_data: ContactFormUpdate, db: AsyncIOMotorDatabase = Depends(get_db)):
    """
    Update contact form status (pending, contacted, resolved)
    """
    try:
        contact = await db['contact_forms'].find_one({"id": contact_id}, {"_id": 0})
        
        if not contact:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Contact with ID {contact_id} not found"
            )
        
        update_fields = {}
        if update_data.status:
            if update_data.status not in ["pending", "contacted", "resolved"]:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="Status must be one of: pending, contacted, resolved"
                )
            update_fields["status"] = update_data.status
        
        if update_fields:
            await db['contact_forms'].update_one(
                {"id": contact_id},
                {"$set": update_fields}
            )
        
        updated_contact = await db['contact_forms'].find_one({"id": contact_id}, {"_id": 0})
        return ContactFormResponse(**updated_contact)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error updating contact: {str(e)}"
        )


@router.delete("/{contact_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_contact(contact_id: str, db: AsyncIOMotorDatabase = Depends(get_db)):
    """
    Delete a contact form submission
    """
    try:
        result = await db['contact_forms'].delete_one({"id": contact_id})
        
        if result.deleted_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Contact with ID {contact_id} not found"
            )
        
        return None
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error deleting contact: {str(e)}"
        )
