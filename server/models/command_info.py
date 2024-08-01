from pydantic import BaseModel

class CommandInfo(BaseModel):
    username: str
    useremail: str
    titleproduct: str
    typecommand: str
    priceproduct: float
    productcategory: str
    message: str
