import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLead } from '../services/api';
import { useTheme } from '../hooks/useTheme';

interface DemoPageProps {
  onRequestModal?: () => void;
}

export const DemoPage: React.FC<DemoPageProps> = () => {
  const { theme } = useTheme();
  // Form theme is always the opposite of the website theme
  const formTheme = theme === 'dark' ? 'light' : 'dark';
  const isFormLight = formTheme === 'light';

  // Demo Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    chargers_count: '10 - 50 chargers',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (formData.phone && formData.phone.length > 0 && formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      await submitLead({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        chargers_count: formData.chargers_count,
        message: formData.message
      });
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00A09A', '#FFFFFF']
      });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base text-ink pt-8 pb-24 relative overflow-hidden transition-colors duration-300">
      {/* Volumetric background lights */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[900px] h-[500px] bg-[#00A09A]/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#00A09A]/6 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Breadcrumb & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-ink tracking-tight leading-tight mb-6">
            See Trevia <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] to-[#33C4BF]">in Action.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink2 font-normal leading-relaxed">
            Get a 30-minute walkthrough of how Trevia connects, monitors and operates EV charging infrastructure.
          </p>
        </div>

        {/* DEMO REQUEST FORM (Contrasting Opposite Theme to Website) */}
        <div className="max-w-xl mx-auto mb-20 relative">
          {/* Soft ambient contrast glow behind the opposite-themed card */}
          <div className={`absolute -inset-4 sm:-inset-6 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-300 ${
            isFormLight ? 'bg-[#00A09A]/15 opacity-70' : 'bg-[#00A09A]/10 opacity-50'
          }`} />

          <div
            data-theme={formTheme}
            className={`border rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
              isFormLight
                ? 'bg-[#F8FAFC] border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_35px_rgba(0,160,154,0.12)]'
                : 'bg-surface border-[#0E3460] shadow-2xl backdrop-blur-xl'
            }`}
          >

            {/* Edge Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A09A] to-[#33C4BF]" />

            {!isSuccess ? (
              <div>
                <div className="mb-6">

                  <h2 className="text-2xl font-bold tracking-tight text-ink">
                    Book a Demo
                  </h2>
                  <p className="text-xs text-ink3 mt-1 font-normal leading-relaxed">
                    Tell us about your charging network and we'll tailor the demo accordingly.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-ink3 mb-1">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink3 mb-1">
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
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink3 mb-1">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink3 mb-1">
                        Organization / CPO
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
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ink3 mb-1">
                        Network Scale
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
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-ink3 mb-1">
                      Tell Us More About Yourself
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your charging network, timeline, or specific requirements..."
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
                      className="w-full bg-[#00A09A] hover:bg-[#008C86] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-70 active:scale-[0.99] shadow-md shadow-[#00A09A]/20"
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

                  <div className="flex items-center justify-center gap-2 text-[11px] text-ink3 pt-1">
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
                <h3 className="text-2xl font-bold text-ink">Demo Scheduled</h3>
                <p className="text-sm text-ink2 max-w-sm mx-auto font-normal leading-relaxed">
                  Thank you, <span className="text-[#00A09A] font-semibold">{formData.full_name}</span>. Our team has received your demo request. A calendar invitation has been prepared for <span className="text-ink font-medium">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className={`font-bold px-6 py-2.5 rounded-full transition text-xs uppercase tracking-wider ${
                      isFormLight 
                        ? 'bg-slate-900 text-white hover:bg-slate-800' 
                        : 'bg-white text-black hover:bg-slate-200'
                    }`}
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;
