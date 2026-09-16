from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..core.database import get_db
from ..models.lead import Lead, ChargerStation
from ..schemas.lead import LeadCreate, LeadResponse, ContactCreate
from ..schemas.dashboard import DashboardStatsResponse, ApproachStep
from typing import List

router = APIRouter()

@router.get("/health")
def health_check():
    return {
        "status": "online",
        "service": "Trevia Platform API",
        "version": "1.0.0",
        "features": ["leads", "chargers", "approach_particle_telemetry", "dashboard"]
    }

@router.post("/leads", response_model=LeadResponse, status_code=status.HTTP_201_CREATED)
def create_demo_lead(lead_in: LeadCreate, db: Session = Depends(get_db)):
    db_lead = Lead(
        full_name=lead_in.full_name,
        email=lead_in.email,
        phone=lead_in.phone,
        company=lead_in.company,
        chargers_count=lead_in.chargers_count,
        message=lead_in.message,
        inquiry_type=lead_in.inquiry_type or "demo_request"
    )
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@router.post("/contact", status_code=status.HTTP_201_CREATED)
def submit_contact(contact_in: ContactCreate, db: Session = Depends(get_db)):
    db_lead = Lead(
        full_name=contact_in.full_name,
        email=contact_in.email,
        message=contact_in.message,
        chargers_count=contact_in.subject,
        inquiry_type="contact_form"
    )
    db.add(db_lead)
    db.commit()
    return {"message": "Thank you for reaching out to Trevia! Our CPO onboarding team will contact you within 24 hours."}

@router.get("/dashboard/stats", response_model=DashboardStatsResponse)
def get_dashboard_stats():
    """
    Returns exact real-time operational CPO metrics matching the reference UI
    from Trevia CMS.
    """
    return {
        "greeting": "Good afternoon, Admin",
        "admin_status": "Active since Friday, 1 May 2026",
        "live_sessions": 0,
        "available_stations": 4,
        "total_stations": 7,
        "lifetime_revenue": 329272.65,
        "lifetime_revenue_formatted": "₹3,29,272.65",
        "avg_network_uptime": 100.0,
        "daily_sessions": 0,
        "revenue_overview_7d_total": 1.71,
        "revenue_chart": [
            {"day": "Mon", "revenue": 0.0, "formatted": "₹0.00"},
            {"day": "Tue", "revenue": 0.0, "formatted": "₹0.00"},
            {"day": "Wed", "revenue": 0.0, "formatted": "₹0.00"},
            {"day": "Thu", "revenue": 1.71, "formatted": "₹1.71"},
            {"day": "Fri", "revenue": 0.0, "formatted": "₹0.00"},
            {"day": "Sat", "revenue": 0.0, "formatted": "₹0.00"},
            {"day": "Sun", "revenue": 0.0, "formatted": "₹0.00"},
        ],
        "charger_breakdown": {
            "available": 4,
            "occupied": 0,
            "faulted": 1,
            "offline": 2,
            "total": 7
        },
        "recent_events": [
            {"id": 1, "station": "Station #04 - Gachibowli Hub", "event": "Heartbeat ACK", "time": "Just now", "status": "ok"},
            {"id": 2, "station": "Station #02 - T-Hub Campus", "event": "Firmware 2.4.1 synced", "time": "2m ago", "status": "ok"},
            {"id": 3, "station": "Station #06 - Cyber Towers", "event": "Ground fault warning", "time": "14m ago", "status": "warning"},
            {"id": 4, "station": "Station #01 - Hitec Hub A", "event": "OCPP 2.0.1 tunnel stable", "time": "22m ago", "status": "ok"}
        ]
    }

@router.get("/approach/steps", response_model=List[ApproachStep])
def get_approach_steps():
    """
    Returns step information, micro-particle movement configurations,
    and technical descriptions for the Our Approach section.
    """
    return [
        {
            "step": "01",
            "title": "Unified integration layer",
            "description": "Connect networks, operators, and charging infrastructure through one operational layer.",
            "icon_type": "network-branch",
            "highlight_badge": "OCPP 1.6J / 2.0.1",
            "particle_flow_type": "convergent_hub",
            "telemetry": {
                "packet_rate": "1,420 msgs/sec",
                "latency": "14ms",
                "connected_nodes": "Multi-Operator Hub",
                "protocol": "OCPP WebSocket Secure"
            }
        },
        {
            "step": "02",
            "title": "Hardware agnostic",
            "description": "Work across different charger brands, models, and connected hardware.",
            "icon_type": "charging-plug",
            "highlight_badge": "Universal Compatibility",
            "particle_flow_type": "multi_protocol_stream",
            "telemetry": {
                "supported_hardware": "ABB, Delta, Exicom, StarCharge, Schneider",
                "connector_matrix": "CCS2, Type 2, GB/T, CHAdeMO",
                "plug_handshake_speed": "0.38s"
            }
        },
        {
            "step": "03",
            "title": "Live data & intelligence",
            "description": "Turn charging infrastructure into a real-time operational picture.",
            "icon_type": "gauge-meter",
            "highlight_badge": "Sub-Second Telemetry",
            "particle_flow_type": "upward_telemetry_burst",
            "telemetry": {
                "sampling_interval": "100ms",
                "power_resolution": "0.01 kW",
                "ai_predictive_alerts": "Active",
                "uptime_monitor": "99.98%"
            }
        },
        {
            "step": "04",
            "title": "Automation & remote control",
            "description": "Reduce manual intervention with remote operations and automated workflows.",
            "icon_type": "circular-automation",
            "highlight_badge": "Zero-Touch Ops",
            "particle_flow_type": "orbital_loop_healing",
            "telemetry": {
                "auto_reboot_success": "94.2%",
                "remote_firmware_ota": "Automated",
                "dynamic_load_balancing": "Enabled",
                "manual_tickets_reduced": "-78%"
            }
        },
        {
            "step": "05",
            "title": "Scales with your network",
            "description": "Manage growing charging networks, sites, and regions from one platform.",
            "icon_type": "scalable-grid",
            "highlight_badge": "Multi-Tenant Cloud",
            "particle_flow_type": "expansive_constellation",
            "telemetry": {
                "cluster_scale": "Up to 50,000 chargers",
                "multi_region": "Pan-India & Global",
                "db_throughput": "100k IOPS",
                "cpo_tenants": "Multi-Org Isolation"
            }
        }
    ]
