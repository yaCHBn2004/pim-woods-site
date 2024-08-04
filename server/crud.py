from utils.parse_price_range import parse_price_range
from sqlalchemy.orm import Session
from typing import Optional
from models import Product
import schemas

def get_all_products(db: Session):
    return db.query(Product).all()

def get_product_by_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id).first()

def create_product(db:Session, product:schemas.ProductCreate):
    new_product = Product(**product.model_dump())
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return {f"a new product with id {new_product.id} has been created "}

def search_product(db: Session, search_term:str):
    return db.query(Product).filter(Product.name.like(f"%{search_term}%")).all()


def filter_products(db:Session,
    collection: Optional[str] = None,
    category_id: Optional[int] = None,
    category: Optional[str] = None,
    price_range: Optional[str] = None):
    
    query = db.query(Product)

    if collection:
        query = query.filter(Product.name.ilike(f"%{collection}%"))
    # if category is not None:
    #     query = query.filter(Product.price == category)
    # if category_id is not None:
    #     query = query.filter(Product.category_id == category_id)
    if price_range:
        min_price, max_price = parse_price_range(price_range)
        if min_price is not None and max_price is not None:
            query = query.filter(Product.price >= min_price, Product.price <= max_price)
    products = query.all()
    
    return products