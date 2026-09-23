import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime, Float, Boolean
from ..core.database import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(50), nullable=True)
    company = Column(String(255), nullable=True)
    chargers_count = Column(String(100), nullable=True)
    message = Column(Text, nullable=True)
    inquiry_type = Column(String(100), default="demo_request")  # demo_request, partner, contact
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    # Whether the internal notification email was sent successfully. Never
    # rolled back / row deleted just because this ends up False — lets the
    # submission be identified and retried later if needed.
    email_notified = Column(Boolean, default=False, nullable=False)

class ChargerStation(Base):
    __tablename__ = "charger_stations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    location = Column(String(255), nullable=False)
    status = Column(String(50), default="Available")  # Available, Occupied, Faulted, Offline
    power_kw = Column(Float, default=60.0)
    connector_type = Column(String(100), default="CCS2 Dual")
    uptime_pct = Column(Float, default=100.0)
    lifetime_revenue = Column(Float, default=47038.95)
    last_ping = Column(DateTime, default=datetime.datetime.utcnow)
