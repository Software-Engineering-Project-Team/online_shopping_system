from pydantic import BaseModel
from typing import Optional


class User(BaseModel):
    """
    Represents a user in the online shopping system.

    Attributes:
      username (str): The username of the user.
      email (str): The email address of the user.
      full_name (Optional[str]): The full name of the user (optional).
    """

    username: str
    email: str
    full_name: Optional[str] = None
