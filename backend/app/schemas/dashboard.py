from pydantic import BaseModel
from typing import List, Dict, Any

class RevenueBarItem(BaseModel):
    day: str
    revenue: float
    formatted: str

class ChargerStatusBreakdown(BaseModel):
    available: int
    occupied: int
    faulted: int
    offline: int
    total: int

class DashboardStatsResponse(BaseModel):
    greeting: str
    admin_status: str
    live_sessions: int
    available_stations: int
    total_stations: int
    lifetime_revenue: float
    lifetime_revenue_formatted: str
    avg_network_uptime: float
    daily_sessions: int
    revenue_overview_7d_total: float
    revenue_chart: List[RevenueBarItem]
    charger_breakdown: ChargerStatusBreakdown
    recent_events: List[Dict[str, Any]]

class ApproachStep(BaseModel):
    step: str
    title: str
    description: str
    icon_type: str
    highlight_badge: str
    particle_flow_type: str
    telemetry: Dict[str, Any]
