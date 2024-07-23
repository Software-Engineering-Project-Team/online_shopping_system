from sqlmodel import SQLModel, Field, Column, String
from typing import Optional


class DiscountCode(SQLModel, table=True):
    """
    Represents a discount code in the system.

    Attributes:
        id (Optional[int]): The unique identifier for the discount code.
        code (Optional[str]): The discount code string.
        discount_percentage (Optional[float]): The percentage discount provided by the code.
        active (Optional[str]): The status of the discount code (e.g., active or inactive).
    """

    __tablename__ = "discount_codes"

    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    code: Optional[str] = Field(sa_column=Column(String(50)))
    discount_percentage: Optional[float] = Field(default=None)
    active: Optional[str] = Field(
        default="active", sa_column=Column(String(10))
    )  # Specify length for VARCHAR
