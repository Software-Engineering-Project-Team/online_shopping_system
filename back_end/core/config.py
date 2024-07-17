# config.py

from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()


class Config:
    # Database configuration
    DB_USERNAME = os.getenv("DB_USERNAME")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_HOST = os.getenv("DB_HOST")
    DB_PORT = os.getenv("DB_PORT")
    DB_NAME = os.getenv("DB_NAME")

    # Construct the database URL
    DATABASE_URL = f"mariadb+mariadbconnector://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"


# Example usage:
# from config import Config
# print(Config.DATABASE_URL)
