from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    image_url: Optional[str] = None


class CommandInfo(BaseModel):
    username: str
    useremail: str
    titleproduct: str
    typecommand: str
    priceproduct: float
    productcategory: str
    message: str
