from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
import schemas
from typing import List, Optional
from database import SessionLocal
import crud, models
#slm imed ni bdlt trtib kan sari confilt bin route t3 get by id w get by name chuft f stackoverflow bli populair had les problms fastapi

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


@routerProduct.get("/search_product")
async def get_product_by_search(search_term:str, db:Session=Depends(get_db)):
    return crud.search_product(db, search_term)

@routerProduct.get("/filter_product")
async def filter_product(
    price_range: Optional[str] = None,
    category_id: Optional[int] = None,
    category: Optional[str] = None,
    collection: Optional[str] = None,
    db: Session = Depends(get_db)):
    return crud.filter_products(db, price_range=price_range,
                                category=category,
                                category_id=category_id,
                                collection=collection)
@routerProduct.get("/{product_id}")
async def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    product = crud.get_product_by_id(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@routerProduct.post('/add_product')
async def create_product(product:schemas.ProductCreate, db:Session=Depends(get_db)):
    return crud.create_product(db, product)
