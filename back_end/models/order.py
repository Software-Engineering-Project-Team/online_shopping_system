from sqlmodel import SQLModel, Field, Relationship, Column, String
from typing import Optional
from datetime import datetime
from .user import User as Customer  # Import User as Customer


class Order(SQLModel, table=True):
    """
    Represents an order in the system.

    Attributes:
        id (Optional[int]): The unique identifier for the order.
        customer_id (Optional[int]): The ID of the customer who placed the order.
        status (Optional[str]): The current status of the order.
        date (Optional[datetime]): The date when the order was placed.
        total_amount (Optional[float]): The total amount for the order.
        customer (Optional[Customer]): The customer who placed the order.
    """

    __tablename__ = "orders"

    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    customer_id: Optional[int] = Field(default=None, foreign_key="users.id")
    status: Optional[str] = Field(
        default=None, sa_column=Column(String(50))
    )  # Specify length for VARCHAR
    date: Optional[datetime] = Field(default=None)
    total_amount: Optional[float] = Field(default=None)

    customer: Optional[Customer] = Relationship(back_populates="orders")
