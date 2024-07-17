# models/item.py
from sqlmodel import SQLModel, Field, Relationship
from .user import User


class ItemBase(SQLModel):
    """Shared properties of all Item schemas.

    Attributes:
        title (str): The title of the item.
        description (Optional[str]): The description of the item. Defaults to None.
    """

    title: str = Field(min_length=1, max_length=255)
    description: str | None = Field(default=None, max_length=255)


class ItemCreate(ItemBase):
    """Properties to receive via API on item creation.

    Attributes:
        title (str): The title of the item.
        description (Optional[str]): The description of the item. Defaults to None.
    """

    title: str = Field(min_length=1, max_length=255)
    description: str | None = Field(default=None, max_length=255)


class ItemUpdate(ItemBase):
    """Properties to receive via API on item update, all are optional.

    Attributes:
        title (Optional[str]): The title of the item. Defaults to None.
        description (Optional[str]): The description of the item. Defaults to None.
    """

    title: str | None = Field(default=None, min_length=1, max_length=255)  # type: ignore
    description: str | None = Field(default=None, max_length=255)


class Item(ItemBase, table=True):
    """Database model for the Item.

    Attributes:
        id (Optional[int]): The unique identifier for the item. Defaults to None.
        title (str): The title of the item.
        owner_id (Optional[int]): The unique identifier of the owner. Defaults to None.
        owner (Optional[User]): The owner of the item.
    """

    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=255)
    owner_id: int | None = Field(default=None, foreign_key="user.id", nullable=False)
    owner: User | None = Relationship(back_populates="items")


class ItemPublic(ItemBase):
    """Properties to return via API for public item information.

    Attributes:
        id (int): The unique identifier for the item.
    """

    id: int


class ItemsPublic(SQLModel):
    """Properties to return via API for a list of public items.

    Attributes:
        data (list[ItemPublic]): The list of public item information.
        count (int): The total number of items.
    """

    data: list[ItemPublic]
    count: int
