import type { ComponentType } from 'react';
import {
  Radio,
  Activity,
  RefreshCw,
  Sliders,
  Database,
  Code2,
  MapPin,
  Navigation,
  Route as RouteIcon,
  Compass,
  Wallet,
} from 'lucide-react';

export interface FeatureCapability {
  slug: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export const CMS_CAPABILITIES: FeatureCapability[] = [
  { slug: 'ocpp-connectivity', icon: Radio, title: 'OCPP Connectivity', desc: 'Connect supported multi-vendor chargers through OCPP.' },
  { slug: 'real-time-monitoring', icon: Activity, title: 'Real-Time Monitoring', desc: 'Monitor charger status, connectivity and network activity in real time.' },
  { slug: 'remote-operations', icon: RefreshCw, title: 'Remote Operations', desc: 'Execute supported charger commands remotely and reduce unnecessary site visits.' },
  { slug: 'multi-site-management', icon: Sliders, title: 'Multi-Site Management', desc: 'Manage charging infrastructure across multiple locations from one platform.' },
  { slug: 'sessions-transactions', icon: Database, title: 'Sessions & Transactions', desc: 'Track charging sessions, energy, duration and transaction data.' },
  { slug: 'apis-integrations', icon: Code2, title: 'APIs & Integrations', desc: 'Connect charging operations with existing enterprise systems.' },
];

export const EV_CAPABILITIES: FeatureCapability[] = [
  { slug: 'charger-discovery', icon: MapPin, title: 'Charger Discovery', desc: 'Find compatible charging stations across connected networks.' },
  { slug: 'real-time-availability', icon: Activity, title: 'Real-Time Availability', desc: 'See charger availability and station status before you arrive.' },
  { slug: 'ai-trip-planner', icon: Compass, title: 'AI Trip Planner', desc: 'Plan EV journeys with charging stops based on route and charging requirements.' },
  { slug: 'smart-route-planning', icon: RouteIcon, title: 'Smart Route Planning', desc: 'Identify practical charging stops along your journey.' },
  { slug: 'reserve-navigate', icon: Navigation, title: 'Reserve & Navigate', desc: 'Reserve supported chargers and navigate directly to the station.' },
  { slug: 'unified-payments', icon: Wallet, title: 'Unified Payments', desc: 'Manage charging payments across connected networks through one experience.' },
];
