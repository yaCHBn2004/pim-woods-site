# routes/submit_form.py
from fastapi import APIRouter, HTTPException
from pydantic import ValidationError
from utils.email_utils import send_email
from models.command_info import CommandInfo

router = APIRouter()

@router.post("/submit-form/")
async def submit_form(command_info: CommandInfo):
    try:
        send_email(command_info)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))
    return {"message": "Form submitted successfully"}
