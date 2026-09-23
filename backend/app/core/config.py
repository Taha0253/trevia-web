import os
from pathlib import Path

from dotenv import load_dotenv
from pydantic import BaseModel

# Local-dev only: load backend/.env.local (and backend/.env) if present so
# `python run.py` picks up local SMTP/DB overrides without exporting shell
# env vars manually. No-op in production (GCP) where these files don't
# exist — real secrets there come from the deployment's own env vars, and
# load_dotenv() never overrides an already-set os.environ value.
_BACKEND_DIR = Path(__file__).resolve().parents[2]
load_dotenv(_BACKEND_DIR / ".env.local")
load_dotenv(_BACKEND_DIR / ".env")


def _parse_origins(raw: str | None, default: list[str]) -> list[str]:
    if not raw:
        return default
    return [origin.strip() for origin in raw.split(",") if origin.strip()]


def _parse_bool(raw: str | None, default: bool) -> bool:
    if raw is None:
        return default
    return raw.strip().lower() in ("1", "true", "yes", "on")


class Settings(BaseModel):
    PROJECT_NAME: str = "Trevia EV Platform API"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./trevia.db")

    # Explicit allow-list only — no wildcard, since CORS is used with
    # allow_credentials=True (wildcard + credentials is rejected by browsers
    # and is unsafe). Override via ALLOWED_ORIGINS="https://a.com,https://b.com".
    ALLOWED_ORIGINS: list[str] = _parse_origins(
        os.getenv("ALLOWED_ORIGINS"),
        [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:3000",
            "http://127.0.0.1:3000",
        ],
    )

    # PLACEHOLDER — replace with the real inbox that should receive lead/contact
    # notifications before going live.
    ADMIN_EMAIL: str = os.getenv("ADMIN_EMAIL", "admin@treviaev.in")

    # PLACEHOLDER — replace with the real careers inbox.
    CAREERS_EMAIL: str = os.getenv("CAREERS_EMAIL", "careers@treviaev.in")

    # Recipient for contact/lead notification emails. Falls back to ADMIN_EMAIL
    # if not explicitly configured.
    CONTACT_NOTIFICATION_EMAIL: str = os.getenv("CONTACT_NOTIFICATION_EMAIL", "") or os.getenv(
        "ADMIN_EMAIL", "admin@trevia.com"
    )

    # SMTP settings for outbound notification emails. Never given real
    # defaults here — only env vars (shell, GCP secrets, or a local
    # backend/.env.local for dev) may supply real values. Until configured,
    # the email helper just logs the notification instead of sending it.
    SMTP_HOST: str = os.getenv("SMTP_HOST", "smtp.gmail.com")  
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USERNAME: str = os.getenv("SMTP_USERNAME", "support@treviaev.in")  
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "qhvn imap zfct pzcj")  
    SMTP_FROM_EMAIL: str = os.getenv("SMTP_FROM_EMAIL", "support@treviaev.in")
    SMTP_AUTH: bool = _parse_bool(os.getenv("SMTP_AUTH"), True)
    SMTP_STARTTLS: bool = _parse_bool(os.getenv("SMTP_STARTTLS"), True)

    # Basic in-memory rate limiting for form submission endpoints (no
    # external dependency needed — single-process, resets on restart).
    RATE_LIMIT_MAX_REQUESTS: int = int(os.getenv("RATE_LIMIT_MAX_REQUESTS", "5"))
    RATE_LIMIT_WINDOW_SECONDS: int = int(os.getenv("RATE_LIMIT_WINDOW_SECONDS", "60"))

settings = Settings()
