import os
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = "Trevia EV Platform API"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./trevia.db")
    ALLOWED_ORIGINS: list[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "*"
    ]

    # PLACEHOLDER — replace with the real inbox that should receive lead/contact
    # notifications before going live.
    ADMIN_EMAIL: str = os.getenv("ADMIN_EMAIL", "admin@trevia.com")

    # PLACEHOLDER — replace with the real careers inbox.
    CAREERS_EMAIL: str = os.getenv("CAREERS_EMAIL", "careers@trevia.com")

    # SMTP settings for outbound notification emails. All placeholders below
    # must be replaced with real credentials (e.g. an SES/SendGrid/Gmail SMTP
    # relay) before notifications will actually send. Until then, the email
    # helper just logs the notification instead of sending it.
    SMTP_HOST: str = os.getenv("SMTP_HOST", "")  # PLACEHOLDER — e.g. smtp.sendgrid.net
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USERNAME: str = os.getenv("SMTP_USERNAME", "")  # PLACEHOLDER
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "")  # PLACEHOLDER
    SMTP_FROM_EMAIL: str = os.getenv("SMTP_FROM_EMAIL", "noreply@trevia.com")  # PLACEHOLDER

settings = Settings()
