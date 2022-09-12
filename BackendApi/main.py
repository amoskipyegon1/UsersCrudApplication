# import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from urls import router as api_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_methods=["*"],
    allow_headers=["*"], allow_credentials=True
)

app.include_router(api_router)