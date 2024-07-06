from pydantic import BaseModel
from typing import Optional


class Item(BaseModel):
    """
    Represents an item in the online shopping system.

    Attributes:
      name (str): The name of the item.
      description (Optional[str]): The description of the item (optional).
      price (float): The price of the item.
      on_offer (bool): Indicates whether the item is on offer or not.
    """

    name: str
    description: Optional[str] = None
    price: float
    on_offer: bool = False
