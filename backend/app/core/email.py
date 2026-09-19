import logging
import smtplib
from email.message import EmailMessage

from .config import settings

logger = logging.getLogger("trevia.email")


def send_notification_email(subject: str, body: str, to_email: str | None = None) -> bool:
    """
    Best-effort email notification. If SMTP credentials haven't been
    configured yet (see PLACEHOLDER values in app/core/config.py), this
    just logs the notification instead of failing the request — lead
    capture must never break because email sending isn't wired up yet.
    """
    recipient = to_email or settings.ADMIN_EMAIL

    if not settings.SMTP_HOST or not settings.SMTP_USERNAME or not settings.SMTP_PASSWORD:
        logger.info(
            "SMTP not configured (placeholder credentials) — skipping send. "
            "Would have emailed %s: %s", recipient, subject
        )
        return False

    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = settings.SMTP_FROM_EMAIL
    message["To"] = recipient
    message.set_content(body)

    try:
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.send_message(message)
        return True
    except Exception:
        logger.exception("Failed to send notification email to %s", recipient)
        return False
