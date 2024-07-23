from typing import List
from fastapi import APIRouter, HTTPException, Depends, Request
from sqlmodel import Session, select
from back_end.models import (
    UserResponse,
    UserCreate,
    UserUpdate,
    User,
    Item,
    Order,
    DiscountCode,
    SalesItem,
)
from back_end.database import engine
from back_end.core.security import get_password_hash

router = APIRouter()


# Dependency to get a session
def get_session():
    """
    Returns a session object for interacting with the database.

    Yields:
        session: A session object for database operations.
    """
    with Session(engine) as session:
        yield session


@router.get("/")
def root():
    return {"message": "Hello World"}


@router.get("/users/")
def get_users(session: Session = Depends(get_session)):
    """
    Retrieve all users from the database.

    Parameters:
    - session: The database session.

    Returns:
    - A dictionary containing the list of users.
    """
    users = session.exec(select(User)).all()
    return {"users": users}


@router.get("/items")
def get_items(session: Session = Depends(get_session)):
    """
    Retrieve all items from the database.

    Parameters:
    - session: The database session.

    Returns:
    - A dictionary containing the retrieved items.
    """
    items = session.exec(select(Item)).all()
    return {"items": items}


@router.post("/users/", response_model=UserResponse)
def create_user(
    request: Request, user_create: UserCreate, db: Session = Depends(get_session)
):
    """
    Create a new user.

    Args:
        request (Request): The request object.
        user_create (UserCreate): The user data to create.
        db (Session, optional): The database session. Defaults to Depends(get_session).

    Returns:
        User: The created user.

    Raises:
        HTTPException: If the email is already registered.
    """
    # Check if the user already exists
    existing_user = db.exec(select(User).where(User.email == user_create.email)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    # Hash the password and create a User instance
    hashed_password = get_password_hash(user_create.password)
    user = User(
        email=user_create.email,
        hashed_password=hashed_password,
        is_active=user_create.is_active,
        full_name=user_create.full_name,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.put("/users/{user_id}", response_model=UserUpdate)
def update_user(user_id: int, user: UserUpdate, db: Session = Depends(get_session)):
    """
    Update a user in the database.

    Args:
        user_id (int): The ID of the user to update.
        user (UserUpdate): The updated user data.
        db (Session, optional): The database session. Defaults to Depends(get_session).

    Returns:
        User: The updated user object.

    Raises:
        HTTPException: If the user is not found in the database.
    """
    db_user = db.exec(User).filter(User.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    user.hash_password()
    for key, value in user.model_dump(exclude_unset=True).items():
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, item: Item, db: Session = Depends(get_session)):
    """
    Update an existing item.

    Args:
        item_id (int): The ID of the item to update.
        item (Item): The item data to update.
        db (Session): The database session.

    Returns:
        Item: The updated item.

    Raises:
        HTTPException: If the item is not found.
    """
    db_item = db.exec(select(Item).where(Item.id == item_id)).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    for key, value in item.dict(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item


@router.post("/discount_codes/", response_model=DiscountCode)
def create_discount_code(
    discount_code: DiscountCode, db: Session = Depends(get_session)
):
    """
    Create a new discount code.

    Args:
        discount_code (DiscountCode): The discount code data.
        db (Session): The database session.

    Returns:
        DiscountCode: The created discount code.
    """
    db.add(discount_code)
    db.commit()
    db.refresh(discount_code)
    return discount_code


@router.post("/sales_items/", response_model=SalesItem)
def create_sales_item(sales_item: SalesItem, db: Session = Depends(get_session)):
    """
    Create a new sales item.

    Args:
        sales_item (SalesItem): The sales item data.
        db (Session): The database session.

    Returns:
        SalesItem: The created sales item.
    """
    db.add(sales_item)
    db.commit()
    db.refresh(sales_item)
    return sales_item


@router.get("/orders/current", response_model=List[Order])
def get_current_orders(db: Session = Depends(get_session)):
    """
    Get all currently placed orders.

    Args:
        db (Session): The database session.

    Returns:
        List[Order]: A list of current orders.
    """
    orders = db.exec(select(Order).where(Order.status == "current")).all()
    return orders


@router.get("/orders/history", response_model=List[Order])
def get_order_history(sort_by: str = "date", db: Session = Depends(get_session)):
    """
    Get the history of orders with sorting options.

    Args:
        sort_by (str): The sorting criteria (date, customer, amount).
        db (Session): The database session.

    Returns:
        List[Order]: A list of historical orders sorted by the specified criteria.
    """
    query = select(Order).where(Order.status == "completed")
    if sort_by == "date":
        query = query.order_by(Order.date)
    elif sort_by == "customer":
        query = query.order_by(Order.customer_id)
    elif sort_by == "amount":
        query = query.order_by(Order.total_amount)
    orders = db.exec(query).all()
    return orders


@router.post("/items/", response_model=Item)
def create_item(item: Item, db: Session = Depends(get_session)):
    """
    Create a new item for sale.

    Args:
        item (Item): The item data.
        db (Session): The database session.

    Returns:
        Item: The created item.
    """
    db.add(item)
    db.commit()
    db.refresh(item)
    return item
