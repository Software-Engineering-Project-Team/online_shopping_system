from fastapi import APIRouter
from back_end.models.user import User
from back_end.models.item import Item

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Hello World"}
