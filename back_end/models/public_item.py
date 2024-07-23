from sqlmodel import SQLModel
from back_end.models.item import ItemBase


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
