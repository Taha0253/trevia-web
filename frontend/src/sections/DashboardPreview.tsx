import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, Truck, Radio, Zap, 
  CreditCard, Tag, Sparkles, HelpCircle, Bell, 
  ShieldAlert, MapPin, IndianRupee, Wifi
} from 'lucide-react';
import { fetchDashboardStats } from '../services/api';
import type { DashboardStats } from '../types';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '3M'>('7D');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    fetchDashboardStats().then((data) => setStats(data));
  }, []);

  const tabs = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Consumer Analytics', icon: Users },
    { name: 'Fleets', icon: Truck },
    { name: 'Stations', icon: Radio },
    { name: 'Sessions', icon: Zap },
    { name: 'Settlements', icon: CreditCard },
    { name: 'Tariffs', icon: Tag },
    { name: 'Offers & Promos', icon: Sparkles, isNew: true },
    { name: 'Support', icon: HelpCircle },
    { name: 'Alerts', icon: Bell },
    { name: 'Admin Access', icon: ShieldAlert },
  ];

  return (
    <section id="dashboard" className="py-12 bg-[#060B09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* The Outer Sand/Cream Container matching Image 2 */}
        <div className="bg-[#EFECE6] rounded-[2.5rem] p-4 sm:p-7 md:p-9 shadow-2xl border border-[#DFD9CE]">
          
          {/* Top Pill Navigation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs font-medium text-neutral-600">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0E3D32] text-ink font-semibold shadow-sm'
                      : 'hover:bg-black/5 text-neutral-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                  {tab.isNew && (
                    <span className="bg-[#00A09A] text-black text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Banner Header: Deep Green Banner Card */}
          <div className="bg-[#0D382E] text-ink rounded-2xl p-6 sm:p-7 mb-6 shadow-md relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {stats?.greeting || "Good afternoon, Admin"}
              </h2>
              <p className="text-xs sm:text-sm text-[#8FB9AC]">
                {stats?.admin_status || "Active since Friday, 1 May 2026"}
              </p>
            </div>

            <div className="flex items-center flex-wrap gap-2.5">
              <div className="bg-[#07241E]/80 border border-[#164D40] px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#00A09A]" />
                <span>{stats?.live_sessions ?? 0} Live Sessions</span>
              </div>
              <div className="bg-[#07241E]/80 border border-[#164D40] px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200 flex items-center gap-1.5">
                <span>{stats ? `${stats.available_stations} of ${stats.total_stations}` : '4 of 7'} Available</span>
              </div>
              <div className="bg-[#07241E]/80 border border-[#164D40] px-3 py-1.5 rounded-full text-xs font-semibold text-[#00A09A] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00A09A] animate-ping" />
                <span>Live</span>
              </div>
            </div>
          </div>

          {/* 4 Metric KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Total Stations */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-neutral-500 mb-1">Total Stations</div>
                <div className="text-3xl font-bold text-neutral-900">{stats?.total_stations ?? 7}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#008F8A] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            {/* Total Lifetime Revenue */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-neutral-500 mb-1">Total Lifetime Revenue</div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  {stats?.lifetime_revenue_formatted || "₹3,29,272.65"}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#008F8A] flex items-center justify-center font-bold text-base">
                <IndianRupee className="w-5 h-5" />
              </div>
            </div>

            {/* Avg Network Uptime */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex items-center justify-between">
              <div className="flex-1 pr-3">
                <div className="text-xs font-medium text-neutral-500 mb-1">Avg Network Uptime</div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-neutral-900">100%</span>
                  <div className="flex-1 max-w-[90px] h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#008F8A] rounded-full w-full" />
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#008F8A] flex items-center justify-center shrink-0">
                <Wifi className="w-5 h-5" />
              </div>
            </div>

            {/* Daily Sessions */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-neutral-500 mb-1">Daily Sessions</div>
                <div className="text-3xl font-bold text-neutral-900">{stats?.daily_sessions ?? 0}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#E6F8F3] text-[#008F8A] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
            </div>

          </div>

          {/* 2 Main Visual Chart Cards matching Image 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Revenue Overview (Left Card) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Revenue Overview</h4>
                  <p className="text-xs text-neutral-500">
                    Last 7 days • ₹{stats?.revenue_overview_7d_total ?? 1.71} total
                  </p>
                </div>
                <div className="flex items-center bg-neutral-100 p-1 rounded-lg text-xs font-semibold text-neutral-600">
                  {(['7D', '30D', '3M'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-3 py-1 rounded-md transition-all ${
                        timeRange === r
                          ? 'bg-[#0E3D32] text-ink shadow-sm'
                          : 'hover:text-neutral-900'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar Chart Container */}
              <div className="h-64 flex items-end justify-between pt-4 pb-2 px-2 border-b border-neutral-100 relative">
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-neutral-400 pointer-events-none">
                  <span>₹1.8</span>
                  <span>₹1.35</span>
                  <span>₹0.9</span>
                  <span>₹0.45</span>
                  <span>₹0</span>
                </div>

                {/* Bars */}
                <div className="w-full ml-12 h-full flex items-end justify-around gap-2">
                  {[
                    { day: 'Mon', val: 0.02 },
                    { day: 'Tue', val: 0.02 },
                    { day: 'Wed', val: 0.02 },
                    { day: 'Thu', val: 0.95, highlight: true, amount: '₹1.71' },
                    { day: 'Fri', val: 0.02 },
                    { day: 'Sat', val: 0.02 },
                    { day: 'Sun', val: 0.02 },
                  ].map((item, idx) => (
                    <div
                      key={item.day}
                      className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                      onMouseEnter={() => setHoveredBar(idx)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Tooltip */}
                      {hoveredBar === idx && (
                        <div className="absolute -top-9 bg-neutral-900 text-ink text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 pointer-events-none">
                          {item.amount || '₹0.00'}
                        </div>
                      )}

                      {/* Bar Pillar */}
                      <div
                        className={`w-full max-w-[48px] rounded-t-md transition-all duration-300 ${
                          item.highlight
                            ? 'bg-[#008F8A] hover:bg-[#008f72] shadow-sm'
                            : 'bg-neutral-100 hover:bg-neutral-200'
                        }`}
                        style={{ height: `${item.val * 100}%` }}
                      />

                      {/* Day Label */}
                      <span className="text-xs text-neutral-500 mt-3 font-medium">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Charger Network Live Status Donut (Right Card) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-neutral-900">Charger Network</h4>
                <p className="text-xs text-neutral-500">Live status</p>
              </div>

              {/* Donut Chart Visual */}
              <div className="my-6 flex items-center justify-center relative">
                <svg className="w-52 h-52 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#F3F4F6"
                    strokeWidth="15"
                    fill="transparent"
                  />
                  {/* Segment: Available (4 of 7 -> 57%) - Teal/Dark Green #008F8A */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#0E6251"
                    strokeWidth="15"
                    strokeDasharray="136 238"
                    strokeDashoffset="0"
                    fill="transparent"
                    className="transition-all duration-500 hover:stroke-[#117A65] cursor-pointer"
                  />
                  {/* Segment: Offline (2 of 7 -> 28%) - Slate Blue #85929E */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#85929E"
                    strokeWidth="15"
                    strokeDasharray="68 238"
                    strokeDashoffset="-136"
                    fill="transparent"
                    className="transition-all duration-500 cursor-pointer"
                  />
                  {/* Segment: Faulted (1 of 7 -> 14%) - Red #C0392B */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#C0392B"
                    strokeWidth="15"
                    strokeDasharray="34 238"
                    strokeDashoffset="-204"
                    fill="transparent"
                    className="transition-all duration-500 cursor-pointer"
                  />
                </svg>

                {/* Center Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-3xl font-extrabold text-neutral-900">7</span>
                  <span className="text-xs text-neutral-500 font-medium">Total</span>
                </div>
              </div>

              {/* Legend matching Image 2 */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-neutral-700 pt-2 border-t border-neutral-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0E6251]" />
                  <span>Available 4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A09A]" />
                  <span>Occupied 0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B]" />
                  <span>Faulted 1</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#85929E]" />
                  <span>Offline 2</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
