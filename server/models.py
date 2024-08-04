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
    
from sqlalchemy import Column, Integer, String, Float, ForeignKey, create_engine
from database import Base
# class User(Base):
#     __tablename__ = "users"
    
#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String, unique=True, index=True, nullable=False)
#     email = Column(String, unique=True, index=True, nullable=False)
#     password_hash = Column(String, nullable=False)
    
    # favorite_products = relationship("Product", back_populates="favorited_by")

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    
    # products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = "products"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=False, index=True, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)
    image_url = Column(String, nullable=True)
    # category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    # favorited_by_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    # category = relationship("Category", back_populates="products")
    
"""
favorite_products: Optional relationship to track products favorited by the user
products: A relationship that links this category to its products
category_id: Foreign key linking the product to a category 
favorited_by_id: Foreign key linking the product to a user who favorited it (optional).
category: A relationship that links this product to its category.
favorited_by: A relationship that links this product to a user (optional)."""


