from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import schemas, models, repository
from db.get_db import get_db


router = APIRouter(
    prefix='/api', tags=['Phone Book'],
    responses={404: {'description' : 'Not found'}}
)


@router.post('/createcontact/', response_model=schemas.PhoneBook)
def create_user_contact(contact: schemas.PhoneBookCreate, db: Session = Depends(get_db)):
    user_contact = repository.create_phone_contact(db=db, user=contact)
    
    return user_contact


@router.get('/getcontactlist/', response_model=list[schemas.PhoneBook])
def get_contact_list(db: Session=Depends(get_db)):
    contact_list = repository.get_phone_contacts(db=db)
    return contact_list