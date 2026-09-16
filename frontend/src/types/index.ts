export interface LeadPayload {
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  chargers_count?: string;
  message?: string;
  inquiry_type?: string;
}

export interface RevenueBarItem {
  day: string;
  revenue: number;
  formatted: string;
}

export interface ChargerBreakdown {
  available: number;
  occupied: number;
  faulted: number;
  offline: number;
  total: number;
}

export interface DashboardStats {
  greeting: string;
  admin_status: string;
  live_sessions: number;
  available_stations: number;
  total_stations: number;
  lifetime_revenue: number;
  lifetime_revenue_formatted: string;
  avg_network_uptime: number;
  daily_sessions: number;
  revenue_overview_7d_total: number;
  revenue_chart: RevenueBarItem[];
  charger_breakdown: ChargerBreakdown;
  recent_events: Array<{
    id: number;
    station: string;
    event: string;
    time: string;
    status: string;
  }>;
}

export interface ApproachStepData {
  step: string;
  title: string;
  description: string;
  icon_type: string;
  highlight_badge: string;
  particle_flow_type: string;
  telemetry: {
    [key: string]: string;
  };
}
