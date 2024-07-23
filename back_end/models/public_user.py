# models/public_user.py
from sqlmodel import SQLModel
from .user import UserBase


class UserPublic(UserBase):
    """Properties to return via API for public user information.

    Attributes:
        id (int): The unique identifier for the user.
    """

    id: int


class UsersPublic(SQLModel):
    """Properties to return via API for a list of public users.

    Attributes:
        users (list[UserPublic]): The list of public user information.
    """

    users: list[UserPublic]
