import React, { useState } from 'react';
import { Zap, ShieldCheck, ArrowRight, Check, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLead } from '../services/api';

interface DemoPageProps {
  onRequestModal?: () => void;
}

export const DemoPage: React.FC<DemoPageProps> = () => {
  // Demo Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    chargers_count: '10 - 50 chargers',
    demo_focus: 'Trevia CMS Full Walkthrough',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        chargers_count: formData.chargers_count,
        message: `[Demo Focus: ${formData.demo_focus}] ${formData.message}`
      });
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00A09A', '#FFFFFF']
      });
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#02060D] text-white pt-8 pb-24 relative overflow-hidden">
      {/* Volumetric background lights */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[900px] h-[500px] bg-[#00A09A]/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#00A09A]/6 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061426] border border-[#0E2C52] text-[#00A09A] text-xs font-mono font-medium tracking-wider uppercase mb-5">
            
            <span>Interactive Enterprise Demo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-6">
            See Trevia CMS <span className="font-extrabold text-[#00A09A]">in Action.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Get a 30-minute walkthrough of how Trevia connects, monitors and operates EV charging infrastructure.
          </p>
        </div>

        {/* DEMO REQUEST FORM */}
        <div className="max-w-xl mx-auto mb-20">
          <div className="bg-[#030A16] border border-[#0E3460] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">

            {/* Edge Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-[#00A09A]" />

            {!isSuccess ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A09A]/10 border border-[#00A09A]/30 text-[#00A09A] text-xs font-mono font-semibold mb-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>SCHEDULE 1-ON-1 DEMO</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Book a CMS Demo
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-relaxed">
                    Tell us about your charging network and we'll tailor the demo accordingly.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rao"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Organization / CPO
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nexus Energy Infra"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Network Scale
                      </label>
                      <select
                        value={formData.chargers_count}
                        onChange={(e) => setFormData({ ...formData, chargers_count: e.target.value })}
                        className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00A09A] transition-colors cursor-pointer"
                      >
                        <option value="1 - 10 chargers">1 - 10 chargers</option>
                        <option value="10 - 50 chargers">10 - 50 chargers</option>
                        <option value="50 - 250 chargers">50 - 250 chargers</option>
                        <option value="250+ chargers">250+ chargers</option>
                        <option value="OEM / Roaming Partner">OEM / Roaming Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Primary Demo Focus
                    </label>
                    <select
                      value={formData.demo_focus}
                      onChange={(e) => setFormData({ ...formData, demo_focus: e.target.value })}
                      className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00A09A] transition-colors cursor-pointer"
                    >
                      <option value="Trevia CMS Full Walkthrough">Trevia CMS Full Walkthrough</option>
                      <option value="Hardware Compatibility & OCPP 2.0.1 Test">Hardware Compatibility & OCPP 2.0.1 Test</option>
                      <option value="Fleet Depot & Schedule Integration">Fleet Depot & Schedule Integration</option>
                      <option value="Multi-CPO Roaming & Wallet Gateway">Multi-CPO Roaming & Wallet Gateway</option>
                      <option value="Custom API & ERP Integration">Custom API & ERP Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      Technical Scope / Questions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your charger models, existing backend, or migration timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00A09A] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00A09A] hover:bg-[#008C86] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-70 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Booking Consultation...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Demo</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00A09A]" />
                    <span>Direct founder consultation • Strict NDA protected</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-[#00A09A]/10 border border-[#00A09A]/40 rounded-full flex items-center justify-center mx-auto text-[#00A09A]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Demo Scheduled</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto font-normal leading-relaxed">
                  Thank you, <span className="text-[#00A09A] font-semibold">{formData.full_name}</span>. Our technical architecture team has received your request for <span className="text-white font-medium">{formData.demo_focus}</span>. A calendar invitation has been prepared for <span className="text-white font-medium">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-white text-black font-bold px-6 py-2.5 rounded-full hover:bg-slate-200 transition text-xs uppercase tracking-wider"
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* 3-STEP AGENDA: What happens during the demo? */}
        <div className="bg-[#030A14] border border-[#0E2C52] rounded-3xl p-8 sm:p-10 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What to Expect in Your 30-Minute Demo
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              A high-density technical briefing tailored specifically to your charging footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#02060D] p-6 rounded-2xl border border-[#0E223D] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#00A09A]/15 text-[#00A09A] font-mono font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h4 className="text-base font-bold text-white">Architecture & Protocol Audit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review your current charger models, OCPP versions (1.6J or 2.0.1), and gateway latency requirements with zero hardware rip-and-replace.
              </p>
            </div>

            <div className="bg-[#02060D] p-6 rounded-2xl border border-[#0E223D] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#00A09A]/15 text-[#00A09A] font-mono font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h4 className="text-base font-bold text-white">Live Hardware Simulation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Watch Trevia CMS ingest live telemetry from your test station, issue remote soft/hard resets, and run automated self-healing loops.
              </p>
            </div>

            <div className="bg-[#02060D] p-6 rounded-2xl border border-[#0E223D] space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-400/15 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">
                03
              </div>
              <h4 className="text-base font-bold text-white">Tariff & Roaming Strategy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Configure dynamic time-of-use (ToU) tariffs, fleet billing settlement, and single-wallet multi-CPO roaming for your drivers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;
