# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.submit_form import router as submit_form_router

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

app.include_router(submit_form_router)
