from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = FastAPI(title="Auronix Automation API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
ADMIN_MOBILE = os.getenv("ADMIN_MOBILE", "8788498955")
MSG91_AUTHKEY = os.getenv("MSG91_AUTHKEY", "")
MSG91_TEMPLATE_ID = os.getenv("MSG91_TEMPLATE_ID", "")


class Registration(BaseModel):
    name: str
    email: str
    mobile: str
    company: str


def send_admin_sms(message: str):
    if not MSG91_AUTHKEY or not MSG91_TEMPLATE_ID:
        return {
            "sent": False,
            "reason": "MSG91 credentials not configured"
        }

    url = "https://control.msg91.com/api/v5/flow"

    payload = {
        "template_id": MSG91_TEMPLATE_ID,
        "short_url": "0",
        "recipients": [
            {
                "mobiles": "91" + ADMIN_MOBILE,
                "VAR1": message
            }
        ]
    }

    headers = {
        "authkey": MSG91_AUTHKEY,
        "Content-Type": "application/json",
        "accept": "application/json"
    }

    response = requests.post(
        url,
        json=payload,
        headers=headers,
        timeout=15
    )

    return {
        "sent": response.ok,
        "provider_response": response.text
    }


@app.get("/")
def home():
    return {
        "status": "online",
        "service": "Auronix Automation API"
    }


@app.post("/notify-registration")
def notify_registration(data: Registration):

    message = (
        f"New Auronix client registered: "
        f"{data.name}, {data.company}, {data.mobile}"
    )

    sms_result = send_admin_sms(message)

    return {
        "success": True,
        "message": "Registration received",
        "notification": sms_result
    }