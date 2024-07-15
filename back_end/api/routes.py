from fastapi import APIRouter, HTTPException, Depends, Request
from sqlmodel import Session, select
from back_end.models.db_models import UserResponse, UserCreate, UserUpdate, User, Item
from back_end.database import engine
from back_end.core.security import get_password_hash

router = APIRouter()


# Dependency to get a session
def get_session():
    with Session(engine) as session:
        yield session


@router.get("/")
def root():
    return {"message": "Hello World"}


@router.get("/users/")
def get_users(session: Session = Depends(get_session)):
    users = session.exec(select(User)).all()
    return {"users": users}


@router.get("/items")
def get_items(session: Session = Depends(get_session)):
    items = session.exec(select(Item)).all()
    return {"items": items}


@router.post("/users/", response_model=UserResponse)
def create_user(
    request: Request, user_create: UserCreate, db: Session = Depends(get_session)
):
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
    db_user = db.exec(User).filter(User.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    user.hash_password()
    for key, value in user.model_dump(exclude_unset=True).items():
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    return db_user
