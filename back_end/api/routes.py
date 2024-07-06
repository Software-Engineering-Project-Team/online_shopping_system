from fastapi import APIRouter
from models.user import User
from models.item import Item

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Hello World"}
