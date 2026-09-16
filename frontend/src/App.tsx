import React, { useState } from 'react';
import { ChargedParticlesBackground } from './components/ChargedParticlesBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { OurApproachJourney } from './sections/OurApproachJourney';
import { EnterpriseDashboard } from './sections/EnterpriseDashboard';
import { DualAudienceSection } from './sections/DualAudienceSection';
import { EcosystemSection } from './sections/EcosystemSection';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToApproach = () => {
    const el = document.getElementById('approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#02060D] text-slate-100 flex flex-col font-sans selection:bg-[#00A8FF] selection:text-white relative">
      
      {/* Charged Particles Ambient Canvas with Mouse Interaction */}
      <ChargedParticlesBackground />

      {/* Top Navbar */}
      <Navbar 
        onRequestDemo={() => setIsDemoModalOpen(true)} 
        onExplore={scrollToApproach} 
      />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Section 1: Editorial Hero Section */}
        <HeroSection 
          onExplore={scrollToApproach} 
          onPartner={() => setIsDemoModalOpen(true)} 
        />

        {/* Section 2: THE SIGNATURE JOURNEY - Our Approach (01 Discover → 02 Navigate → 03 Charge → 04 Pay → 05 Connect) */}
        <OurApproachJourney />

        {/* Section 3: All-Black Enterprise CPO Dashboard */}
        <EnterpriseDashboard />

        {/* Section 4: Dual Audience Architecture (For Drivers vs For CPOs) */}
        <DualAudienceSection onRequestDemo={() => setIsDemoModalOpen(true)} />

        {/* Section 5: Connected Ecosystem (T-Hub, GCP, Docker, Firebase, GitHub) */}
        <EcosystemSection />

      </main>

      {/* Footer */}
      <Footer onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* Interactive Onboarding / Demo Modal */}
      <RequestDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

    </div>
  );
};

export default App;
