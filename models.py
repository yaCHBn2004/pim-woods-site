# from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Table, Boolean
# from sqlalchemy.orm import relationship
# import datetime
# from database import Base
# # still thinking about the relationship between product and category and user and some other tables let me make them slowely 
# class Product(Base):
#     __tablename__ = "product"
    
#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String, unique=True, index=True)
#     image_url = Column(String, nullable=True)
#     price = Column(Integer)
#     description = Column(String)
#     category = relationship("Category", back_populates="products")
    

# class Category(Base):
#     __tablename__ = "category"
    
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, unique=True, index=True)
#     products = relationship("Product", back_populates="category")
    
