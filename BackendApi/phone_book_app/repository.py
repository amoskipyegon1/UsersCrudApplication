from sqlalchemy.orm import Session

from . import models, schemas


# Get user contacts list
def get_phone_contacts(db: Session):
    return db.query(models.PhoneBook).all()


# Post user phone contact
def create_phone_contact(db: Session, user: schemas.PhoneBookCreate):
    user_contact = models.PhoneBook(
        firstName=user.firstName, lastName=user.lastName, phone=user.phone
    )
    db.add(user_contact)
    db.commit()
    db.refresh(user_contact)
    return user_contact