from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
import schemas
from typing import List
from database import SessionLocal
import crud, models

routerProduct=APIRouter(
    prefix="/products",
    tags=['PRODUCTS']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()
        
# Get all products
@routerProduct.get("/all")
async def get_all_products(db: Session = Depends(get_db)):
    return crud.get_all_products(db)

# Get a product by ID
@routerProduct.get("/{product_id}")
async def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    product = crud.get_product_by_id(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@routerProduct.post('/add_product')
async def create_product(product:schemas.ProductCreate, db:Session=Depends(get_db)):
    return crud.create_product(db, product)