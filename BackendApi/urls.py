from fastapi import APIRouter
from phone_book_app import services

router = APIRouter()

router.include_router(services.router)
