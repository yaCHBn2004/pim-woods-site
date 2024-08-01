from sqlalchemy.orm import Session
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