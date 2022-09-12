# import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from urls import router as api_router
from db.session import engine
from db.base_class import Base


Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_methods=["*"],
    allow_headers=["*"], allow_credentials=True
)

app.include_router(api_router)