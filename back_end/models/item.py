# models/item.py
from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from .user import User


class ItemBase(SQLModel):
    """Shared properties of all Item schemas.

    Attributes:
        title (str): The title of the item.
        description (Optional[str]): The description of the item. Defaults to None.
    """

    title: str = Field(min_length=1, max_length=255)
    description: Optional[str] = Field(default=None, max_length=255)


class ItemCreate(ItemBase):
    """Properties to receive via API on item creation.

    Attributes:
        title (str): The title of the item.
        description (Optional[str]): The description of the item. Defaults to None.
    """

    title: str = Field(min_length=1, max_length=255)
    description: Optional[str] = Field(default=None, max_length=255)


class ItemUpdate(ItemBase):
    """Properties to receive via API on item update, all are optional.

    Attributes:
        title (Optional[str]): The title of the item. Defaults to None.
        description (Optional[str]): The description of the item. Defaults to None.
    """

    title: Optional[str] = Field(default=None, min_length=1, max_length=255)  # type: ignore
    description: Optional[str] = Field(default=None, max_length=255)


class Item(ItemBase, table=True):
    """Database model for the Item.

    Attributes:
        id (Optional[int]): The unique identifier for the item. Defaults to None.
        title (str): The title of the item.
        owner_id (Optional[int]): The unique identifier of the owner. Defaults to None.
        owner (Optional[User]): The owner of the item.
    """

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(max_length=255)
    owner_id: Optional[int] = Field(default=None, foreign_key="user.id", nullable=False)
    owner: Optional["User"] = Relationship(back_populates="items")
