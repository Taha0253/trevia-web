import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Zap, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLead } from '../services/api';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    chargers_count: '1 - 10 chargers',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLead(formData);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A8FF', '#00F0FF', '#FFFFFF', '#38BDF8']
      });
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      company: '',
      chargers_count: '1 - 10 chargers',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#030814] border border-[#0F2D54] rounded-3xl p-6 sm:p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#00A8FF]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono font-semibold mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>PARTNER & CPO ONBOARDING</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Connect with TreviaEV
              </h3>
              <p className="text-sm text-slate-400 mt-1 font-normal">
                Join India's unified EV charging network. Integrate your chargers or start roaming across multi-CPO networks with one wallet.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Rao"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Organization / CPO Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nexus Energy Infra"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Network / Fleet Scale
                  </label>
                  <select
                    value={formData.chargers_count}
                    onChange={(e) => setFormData({ ...formData, chargers_count: e.target.value })}
                    className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors cursor-pointer"
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
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Deployment Scope or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your chargers, OCPP version, or roaming partnership..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#02060D] border border-[#0E284A] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00A8FF] to-[#00D2C4] hover:from-[#1B84FF] hover:to-[#00F0FF] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#00A8FF]/25 hover:shadow-[0_0_30px_#00F0FF] disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Onboarding Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Enterprise grade protocol security • Rapid 24h setup</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#00A8FF]/10 border border-[#00F0FF]/40 rounded-full flex items-center justify-center mx-auto text-[#00F0FF] animate-bounce shadow-[0_0_25px_#00F0FF]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto font-normal">
              Thank you, <span className="text-[#00F0FF] font-semibold">{formData.full_name}</span>. Our technical architecture team has received your details and will get in touch with <span className="text-white font-medium">{formData.email}</span> shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-white text-black font-bold px-6 py-2.5 rounded-full hover:bg-slate-200 transition text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
