from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String, Float

Base = declarative_base()

class PredictionHistory(Base):

    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True)

    age = Column(Integer)

    premium = Column(Float)

    risk_level = Column(String)

    smoking = Column(String)

    medical_history = Column(String)

from database import engine

Base.metadata.create_all(bind=engine)