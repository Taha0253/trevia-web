import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ChargedParticlesBackground } from './components/ChargedParticlesBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { TreviaCmsPage } from './pages/TreviaCmsPage';
import { TreviaDrivePage } from './pages/TreviaDrivePage';
import { CposPage } from './pages/solutions/CposPage';
import { FleetsPage } from './pages/solutions/FleetsPage';
import { EnterprisesPage } from './pages/solutions/EnterprisesPage';
import { UtilitiesPage } from './pages/solutions/UtilitiesPage';
import { GovernmentPage } from './pages/solutions/GovernmentPage';
import { TechnologyPage } from './pages/technology/TechnologyPage';
import { ApisPage } from './pages/technology/ApisPage';
import { AboutPage } from './pages/company/AboutPage';
import { TractionPage } from './pages/company/TractionPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

const AppContent: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#02060D] text-slate-100 flex flex-col font-sans selection:bg-[#00A8FF] selection:text-white relative">
      
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Charged Particles ONLY on Landing/Home Page */}
      {isHomePage && <ChargedParticlesBackground />}

      {/* Global Navbar */}
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* Dynamic Route Pages */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<HomePage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/platform" element={<PlatformPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/cms" element={<TreviaCmsPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/drive" element={<TreviaDrivePage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          
          {/* Buyer-Specific Solutions */}
          <Route path="/solutions/cpos" element={<CposPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/solutions/fleets" element={<FleetsPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/solutions/enterprises" element={<EnterprisesPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/solutions/energy-utilities" element={<UtilitiesPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/solutions/government" element={<GovernmentPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          
          {/* Technology */}
          <Route path="/technology" element={<TechnologyPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/technology/apis" element={<ApisPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          
          {/* Company */}
          <Route path="/about" element={<AboutPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/traction" element={<TractionPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          
          {/* Resources & Legal */}
          <Route path="/resources" element={<ResourcesPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
        </Routes>
      </main>

      {/* Global 5-Column Sitemap Footer */}
      <Footer onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* Global Request Demo / Interactive Modal */}
      <RequestDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
