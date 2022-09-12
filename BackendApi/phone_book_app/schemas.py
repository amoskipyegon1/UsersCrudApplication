from pydantic import BaseModel

class PhoneBookBase(BaseModel):
    firstName: str
    lastName: str
    phone: str

class PhoneBookCreate(PhoneBookBase):
    pass

class PhoneBook(PhoneBookBase):
    id: int

    class Config:
        orm_mode = True