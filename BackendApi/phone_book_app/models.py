from sqlalchemy import Column, Integer, String
from db.base_class import Base



class PhoneBook(Base):
    __tablename__ = 'phonebook'
    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String)
    lastName = Column(String)
    phone = Column(String)