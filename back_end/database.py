# database.py

from sqlmodel import SQLModel, create_engine
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get database credentials from environment variables
username = os.getenv("DB_USERNAME")
password = os.getenv("DB_PASSWORD")
host = os.getenv("DB_HOST")
port = os.getenv("DB_PORT")
database = os.getenv("DB_NAME")

# Construct the database URL
database_url = (
    f"mariadb+mariadbconnector://{username}:{password}@{host}:{port}/{database}"
)

# Create the engine
engine = create_engine(database_url)

# Create all tables
SQLModel.metadata.create_all(engine)
