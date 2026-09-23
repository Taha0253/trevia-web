import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="module")
def app_module():
    import main  # imports settings/engine bound to the test DB via conftest env vars
    return main


@pytest.fixture()
def client(app_module):
    from app.core import rate_limit
    rate_limit._hits.clear()  # isolate the in-memory rate limiter between tests
    return TestClient(app_module.app)


def _valid_payload(**overrides):
    payload = {
        "full_name": "Test User",
        "email": "test.user@example.com",
        "phone": "+91 9876543210",
        "company": "Acme Corp",
        "chargers_count": "1 - 10 chargers",
        "message": "Interested in a demo",
    }
    payload.update(overrides)
    return payload


def test_valid_lead_submission_persists_and_sends_email(client, monkeypatch):
    sent = {}

    def fake_send(subject, fields, to_email=None):
        sent["subject"] = subject
        sent["fields"] = fields
        return True

    monkeypatch.setattr("app.api.endpoints.send_notification_email", fake_send)

    response = client.post("/api/leads", json=_valid_payload())

    assert response.status_code == 201
    body = response.json()
    assert body["full_name"] == "Test User"
    assert body["email"] == "test.user@example.com"
    # Email service was invoked with the submitted details.
    assert sent["fields"]["Name"] == "Test User"
    assert sent["fields"]["Email"] == "test.user@example.com"


def test_missing_required_field_returns_422(client):
    payload = _valid_payload()
    del payload["full_name"]
    response = client.post("/api/leads", json=payload)
    assert response.status_code == 422


def test_invalid_email_returns_422(client):
    response = client.post("/api/leads", json=_valid_payload(email="not-an-email"))
    assert response.status_code == 422


def test_blank_name_returns_422(client):
    response = client.post("/api/leads", json=_valid_payload(full_name="   "))
    assert response.status_code == 422


def test_smtp_failure_does_not_delete_saved_submission(client, monkeypatch):
    monkeypatch.setattr("app.api.endpoints.send_notification_email", lambda *a, **k: False)

    response = client.post("/api/leads", json=_valid_payload(email="failure.case@example.com"))
    assert response.status_code == 201
    lead_id = response.json()["id"]

    from app.core.database import SessionLocal
    from app.models.lead import Lead

    db = SessionLocal()
    try:
        saved = db.query(Lead).filter(Lead.id == lead_id).one()
        assert saved.email == "failure.case@example.com"  # record still exists
        assert saved.email_notified is False  # failure was tracked, not hidden
    finally:
        db.close()


def test_contact_form_submission(client, monkeypatch):
    monkeypatch.setattr("app.api.endpoints.send_notification_email", lambda *a, **k: True)
    response = client.post(
        "/api/contact",
        json={
            "full_name": "Contact Person",
            "email": "contact@example.com",
            "subject": "General Inquiry",
            "message": "Hello there",
        },
    )
    assert response.status_code == 201
    assert "message" in response.json()


def test_rate_limit_blocks_rapid_submissions(client, monkeypatch):
    monkeypatch.setattr("app.api.endpoints.send_notification_email", lambda *a, **k: True)
    from app.core.config import settings

    for _ in range(settings.RATE_LIMIT_MAX_REQUESTS):
        r = client.post("/api/leads", json=_valid_payload(email="rate@example.com"))
        assert r.status_code == 201

    blocked = client.post("/api/leads", json=_valid_payload(email="rate@example.com"))
    assert blocked.status_code == 429
