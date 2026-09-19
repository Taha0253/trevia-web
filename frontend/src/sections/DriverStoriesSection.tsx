import React from 'react';
import { Star, CheckCircle2, ShieldCheck, Heart, MapPin } from 'lucide-react';

export const DriverStoriesSection: React.FC = () => {
  const stories = [
    {
      name: 'Rohit Mehta',
      role: 'Tata Nexon EV Max Owner',
      location: 'Bengaluru, Karnataka',
      avatarColor: 'from-[#00A09A] to-[#008F8A]',
      initials: 'RM',
      usage: '🚗 18,000+ km road-tripped',
      category: 'Highway Traveler',
      rating: 5,
      headline: '“Turned our road trip range anxiety into pure peace of mind.”',
      quote: 'Before Trevia, driving from Bengaluru to Coorg meant keeping 5 different CPO apps on my phone and praying the chargers worked. With Trevia, I reserved a 60kW DC stall with a coffee shop nearby, plugged in, and paid via UPI in 5 seconds. Zero stress.',
      verified: 'Verified EV Driver'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Fleet Operations',
      location: 'Delhi NCR',
      avatarColor: 'from-emerald-500 to-teal-600',
      initials: 'PS',
      usage: '🚚 42 Commercial EV Cabs',
      category: 'Fleet Operations',
      rating: 5,
      headline: '“Cut our fleet charging downtime by over 80%.”',
      quote: 'Managing 42 electric commercial vehicles was a nightmare when chargers glitched and drivers were stranded. Trevia CMS gave our dispatch team live stall health, remote self-healing, and one centralized monthly invoice. It saved us hundreds of wasted hours.',
      verified: 'Verified Enterprise Fleet'
    },
    {
      name: 'Vikramaditya Rao',
      role: 'Highway Plaza & Resort Owner',
      location: 'NH 44, Hyderabad',
      avatarColor: 'from-purple-500 to-indigo-600',
      initials: 'VR',
      usage: '⚡ 4 Dual-Gun Fast Chargers',
      category: 'Charging Station Host',
      rating: 5,
      headline: '“Brought high-value EV customers right to our doorstep.”',
      quote: 'We installed DC fast chargers at our highway resort to attract travelers. Trevia handles everything in the background — hardware telemetry, driver payments, and dynamic ToU tariffs. Our restaurant footfall increased by 35% within 60 days.',
      verified: 'Verified Station Host'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#02060D] relative overflow-hidden border-t border-[#0A1D36]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00A09A]/6 to-transparent rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#040E1C] border border-[#0E284A] text-[#00A09A] text-xs font-mono font-semibold uppercase tracking-[0.2em] mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>REAL STORIES • REAL IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight">
            Loved by Drivers, Fleets &amp;{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A09A] to-[#00A09A]">
              Station Hosts.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85 mt-3 max-w-2xl mx-auto font-normal">
            See how everyday EV owners and charging businesses rely on Trevia to make clean mobility seamless.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#030914] border border-[#0E2644] hover:border-[#00A09A]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,160,154,0.12)] relative group"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[11px] font-mono text-[#00A09A] bg-[#00A09A]/10 border border-[#00A09A]/20 px-2.5 py-1 rounded-full font-semibold">
                    {story.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                  {story.headline}
                </h3>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6 font-normal">
                  {story.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#0A1F38] flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${story.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0`}>
                  {story.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white truncate">{story.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00A09A] shrink-0" />
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">{story.role}</div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-[#00A09A]" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Community Impact Numbers Banner */}
        <div className="bg-[#030914] border border-[#0E2644] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#0E2644]/80">

            <div className="pt-4 lg:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                <span>170-station </span>
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">commercial pilot secured</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00A09A] tracking-tight">
                CMS
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">in final testing</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00A09A] tracking-tight">
                <div className="w-6 h-6 text-emerald-400" />
                <span>Enterprise CPO </span>
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">discussions underway</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                <span>T-Hub Incubated </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">DPIIT Recognised</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
