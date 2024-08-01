from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, ValidationError
import models
from database import engine
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from routers.products import routerProduct
# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.submit_form import router as submit_form_router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routerProduct)
app.include_router(submit_form_router)
