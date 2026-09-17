import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { OurApproachJourney } from '../sections/OurApproachJourney';
import { EnterpriseDashboard } from '../sections/EnterpriseDashboard';
import { DualAudienceSection } from '../sections/DualAudienceSection';
import { EcosystemSection } from '../sections/EcosystemSection';

interface HomePageProps {
  onRequestDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestDemo }) => {
  const scrollToApproach = () => {
    const el = document.getElementById('approach');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0 pb-16">
      
      {/* 1. Editorial Hero Section */}
      <HeroSection 
        onExplore={scrollToApproach} 
        onPartner={onRequestDemo} 
      />

      {/* 2. THE SIGNATURE JOURNEY - Our Approach (01 Discover → 02 Navigate → 03 Charge → 04 Pay → 05 Connect) */}
      <OurApproachJourney />

      {/* 3. All-Black Enterprise CPO Dashboard */}
      <EnterpriseDashboard />

      {/* 4. Dual Audience Architecture (For Drivers vs For CPOs) */}
      <DualAudienceSection onRequestDemo={onRequestDemo} />

      {/* 5. Connected Ecosystem (T-Hub, GCP, Docker, Firebase, GitHub, DPIIT) */}
      <EcosystemSection />

    </div>
  );
};
