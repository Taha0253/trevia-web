import logging
import re
import smtplib
from email.message import EmailMessage
from email.utils import formatdate
from html import escape
from typing import Optional

from .config import settings

logger = logging.getLogger("trevia.email")

_HEADER_UNSAFE_RE = re.compile(r"[\r\n]")


def _sanitize_header_value(value: str) -> str:
    """Strip CR/LF to prevent email header injection via user-supplied text."""
    return _HEADER_UNSAFE_RE.sub(" ", value).strip()


def send_notification_email(
    subject: str,
    fields: dict,
    to_email: Optional[str] = None,
) -> bool:
    """
    Best-effort notification email built from a set of labelled fields.
    Values are HTML-escaped before being placed in the HTML body, and the
    subject/recipient are sanitized to strip CR/LF (header injection).

    Returns True only if the message was handed off to the SMTP server
    successfully. Never raises — callers must persist the submission before
    calling this and must NOT roll back / delete the DB record just because
    this returns False.
    """
    recipient = _sanitize_header_value(to_email or settings.CONTACT_NOTIFICATION_EMAIL)
    safe_subject = _sanitize_header_value(subject)

    if not settings.SMTP_HOST or not settings.SMTP_USERNAME or not settings.SMTP_PASSWORD:
        logger.info("SMTP not configured (missing host/username/password) — skipping send")
        return False

    text_lines = [f"{label}: {value or '-'}" for label, value in fields.items()]
    plain_body = "\n".join(text_lines)

    html_rows = "".join(
        "<tr>"
        f'<td style="padding:4px 12px 4px 0;color:#555;font-weight:600;">{escape(str(label))}</td>'
        f'<td style="padding:4px 0;color:#111;">{escape(str(value)) if value else "-"}</td>'
        "</tr>"
        for label, value in fields.items()
    )
    html_body = f"""\
<html>
  <body style="font-family:Arial,Helvetica,sans-serif;background:#f4f4f5;padding:24px;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:8px;
                padding:24px;border:1px solid #e5e5e5;">
      <h2 style="margin-top:0;color:#00A09A;">New Website Form Submission</h2>
      <p style="color:#333;">New website form submission received.</p>
      <table style="border-collapse:collapse;margin-top:12px;">{html_rows}</table>
    </div>
  </body>
</html>
"""

    message = EmailMessage()
    message["Subject"] = safe_subject
    message["From"] = settings.SMTP_FROM_EMAIL
    message["To"] = recipient
    message["Date"] = formatdate(localtime=True)
    message.set_content(plain_body)
    message.add_alternative(html_body, subtype="html")

    try:
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10) as server:
            if settings.SMTP_STARTTLS:
                server.starttls()
            if settings.SMTP_AUTH:
                server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.send_message(message)
        return True
    except Exception:
        # smtplib exceptions never surface the password, but avoid logging
        # the submitter's PII (name/email/message) — just the failure itself.
        logger.exception("Failed to send notification email to configured recipient")
        return False
