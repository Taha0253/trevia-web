import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { PartnerStripSection } from '../sections/PartnerStripSection';
import { OurApproachDialSection } from '../sections/OurApproachDialSection';
import { DualAudienceSection } from '../sections/DualAudienceSection';
import { DriverStoriesSection } from '../sections/DriverStoriesSection';
import { LiveDemoCtaSection } from '../sections/LiveDemoCtaSection';

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

      {/* Partner logos: T-Hub, Google for Startups, GitHub, GCP, AWS, DPIIT */}
      <PartnerStripSection />

      {/* 2. THE SIGNATURE JOURNEY - Our Approach Rotary Dial Architecture */}
      <OurApproachDialSection />

      {/* 3. Dual Audience Architecture (For Drivers vs For CPOs) */}
      <DualAudienceSection onRequestDemo={onRequestDemo} />

      {/* 4. Real Driver, Fleet & Host Stories + Environmental Impact */}
      <DriverStoriesSection />

      <LiveDemoCtaSection onCta={onRequestDemo} />

    </div>
  );
};
