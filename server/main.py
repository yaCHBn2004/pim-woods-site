from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, ValidationError
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",  # Add your frontend's origin here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CommandInfo(BaseModel):
    username: str
    useremail: str
    titleproduct: str
    typecommand: str
    priceproduct: float
    productcategory: str
    message: str

@app.post("/submit-form/")
async def submit_form(command_info: CommandInfo):
    try:
        send_email(command_info)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))
    return {"message": "Form submitted successfully"}

def send_email(command_info: CommandInfo):
    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'adjissifatimaamina@gmail.com'
    smtp_pass = 'ltds owub ybol pwne'
    sender_email = smtp_user
    receiver_email = 'adjissifatimaamina@gmail.com'

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'New Form Submission'

    email_body = f"""
    New Form Submission:
    Name: {command_info.username}
    Email: {command_info.useremail}
     
    Product Info:
    Title: {command_info.titleproduct}
    Command Type : {command_info.typecommand}
    Price: {command_info.priceproduct}
    Category: {command_info.productcategory}
    Message: {command_info.message}
    """

    message.attach(MIMEText(email_body, 'plain'))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(sender_email, receiver_email, message.as_string())
