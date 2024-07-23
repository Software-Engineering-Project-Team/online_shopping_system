# database.py

from sqlmodel import SQLModel, create_engine
from back_end.core.config import Config

# Create the engine
engine = create_engine(Config.DATABASE_URL)

# Create all tables
SQLModel.metadata.create_all(engine)
