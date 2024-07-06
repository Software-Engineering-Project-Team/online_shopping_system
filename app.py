"""Entry module for the FastAPI application."""

from fastapi import FastAPI
from back_end.api import router as api_router

app = FastAPI()

app.include_router(api_router)
