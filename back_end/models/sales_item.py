from sqlmodel import SQLModel, Field, Column, String
from typing import Optional


class SalesItem(SQLModel, table=True):
    """
    Represents a sales item in the system.

    Attributes:
        id (Optional[int]): The unique identifier for the sales item.
        name (Optional[str]): The name of the sales item.
        description (Optional[str]): A description of the sales item.
        price (Optional[float]): The price of the sales item.
        stock (Optional[int]): The stock quantity of the sales item.
    """

    __tablename__ = "sales_items"

    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    name: Optional[str] = Field(
        default=None, sa_column=Column(String(100))
    )  # Specify length for VARCHAR
    description: Optional[str] = Field(
        default=None, sa_column=Column(String(255))
    )  # Specify length for VARCHAR
    price: Optional[float] = Field(default=None)
    stock: Optional[int] = Field(default=None)
