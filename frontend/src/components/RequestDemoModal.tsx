import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLead } from '../services/api';
import { useTheme } from '../hooks/useTheme';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  // Form theme is always the opposite of the website theme
  const formTheme = theme === 'dark' ? 'light' : 'dark';
  const isFormLight = formTheme === 'light';

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (formData.phone && formData.phone.length > 0 && formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitLead(formData);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A09A', '#00A09A', '#FFFFFF', '#4DBDB8']
      });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage(null);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        data-theme={formTheme}
        className={`relative w-full max-w-lg border rounded-3xl p-6 sm:p-8 text-ink overflow-hidden transition-all duration-300 ${
          isFormLight
            ? 'bg-[#F8FAFC] border-slate-200/90 shadow-[0_25px_70px_rgba(0,0,0,0.5),0_0_35px_rgba(0,160,154,0.15)]'
            : 'bg-surface border-edge shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#00A09A]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Edge accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A09A] to-[#33C4BF]" />

        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full text-ink3 hover:text-ink transition-colors ${
            isFormLight ? 'hover:bg-slate-200/60' : 'hover:bg-white/10'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">

              <h3 className="text-2xl font-bold tracking-tight text-ink">
                Connect with TreviaEV
              </h3>
              <p className="text-sm text-ink3 mt-1 font-normal">
                Join India's unified EV charging network. Integrate your chargers or start roaming across multi-CPO networks with one wallet.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink3 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Rao"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full bg-base border border-edge rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink4 focus:outline-none focus:border-[#00A09A] focus:ring-1 focus:ring-[#00A09A]/30 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink3 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-base border border-edge rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink4 focus:outline-none focus:border-[#00A09A] focus:ring-1 focus:ring-[#00A09A]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink3 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      let digits = e.target.value.replace(/\D/g, '');
                      if (digits.length > 10 && digits.startsWith('91')) {
                        digits = digits.slice(2);
                      } else if (digits.length > 10 && digits.startsWith('0')) {
                        digits = digits.slice(1);
                      }
                      setFormData({ ...formData, phone: digits.slice(0, 10) });
                    }}
                    className="w-full bg-base border border-edge rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink4 focus:outline-none focus:border-[#00A09A] focus:ring-1 focus:ring-[#00A09A]/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink3 mb-1.5">
                    Organization / CPO Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nexus Energy Infra"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-base border border-edge rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink4 focus:outline-none focus:border-[#00A09A] focus:ring-1 focus:ring-[#00A09A]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink3 mb-1.5">
                    Network / Fleet Scale
                  </label>
                  <select
                    value={formData.chargers_count}
                    onChange={(e) => setFormData({ ...formData, chargers_count: e.target.value })}
                    className="w-full bg-base border border-edge rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-[#00A09A] focus:ring-1 focus:ring-[#00A09A]/30 transition-colors cursor-pointer"
                  >
                    <option value="1 - 10 chargers" className="bg-base text-ink">1 - 10 chargers</option>
                    <option value="10 - 50 chargers" className="bg-base text-ink">10 - 50 chargers</option>
                    <option value="50 - 250 chargers" className="bg-base text-ink">50 - 250 chargers</option>
                    <option value="250+ chargers" className="bg-base text-ink">250+ chargers</option>
                    <option value="OEM / Roaming Partner" className="bg-base text-ink">OEM / Roaming Partner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink3 mb-1.5">
                  Deployment Scope or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your chargers, OCPP version, or roaming partnership..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-base border border-edge rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink4 focus:outline-none focus:border-[#00A09A] focus:ring-1 focus:ring-[#00A09A]/30 transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2.5">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00A09A] to-[#33C4BF] hover:from-[#008F8A] hover:to-[#00A09A] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#00A09A]/25 hover:shadow-[0_0_30px_#00A09A] disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Book a Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-ink3 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A09A]" />
                <span>Enterprise grade protocol security • Rapid 24h setup</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#00A09A]/10 border border-[#00A09A]/40 rounded-full flex items-center justify-center mx-auto text-[#00A09A] animate-bounce shadow-[0_0_25px_#00A09A]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-ink">Inquiry Received</h3>
            <p className="text-sm text-ink2 max-w-sm mx-auto font-normal">
              Thank you, <span className="text-[#00A09A] font-semibold">{formData.full_name}</span>. Our technical architecture team has received your details and will get in touch with <span className="text-ink font-medium">{formData.email}</span> shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className={`font-bold px-6 py-2.5 rounded-full transition text-xs uppercase tracking-wider ${
                  isFormLight
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-white text-black hover:bg-slate-200'
                }`}
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
