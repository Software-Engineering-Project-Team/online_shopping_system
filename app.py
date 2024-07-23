"""Entry module for the FastAPI application."""

from fastapi import FastAPI
from back_end.api.routes import router

app = FastAPI()

app.include_router(router)
