import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy-loaded Pages for instant initial load and optimal performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const PlatformPage = lazy(() => import('./pages/PlatformPage').then(m => ({ default: m.PlatformPage })));
const TreviaCmsPage = lazy(() => import('./pages/TreviaCmsPage').then(m => ({ default: m.TreviaCmsPage })));
const TreviaDrivePage = lazy(() => import('./pages/TreviaDrivePage').then(m => ({ default: m.TreviaDrivePage })));
const CposPage = lazy(() => import('./pages/solutions/CposPage').then(m => ({ default: m.CposPage })));
const FleetsPage = lazy(() => import('./pages/solutions/FleetsPage').then(m => ({ default: m.FleetsPage })));
const EnterprisesPage = lazy(() => import('./pages/solutions/EnterprisesPage').then(m => ({ default: m.EnterprisesPage })));
const UtilitiesPage = lazy(() => import('./pages/solutions/UtilitiesPage').then(m => ({ default: m.UtilitiesPage })));
const GovernmentPage = lazy(() => import('./pages/solutions/GovernmentPage').then(m => ({ default: m.GovernmentPage })));
const TechnologyPage = lazy(() => import('./pages/technology/TechnologyPage').then(m => ({ default: m.TechnologyPage })));
const ApisPage = lazy(() => import('./pages/technology/ApisPage').then(m => ({ default: m.ApisPage })));
const AboutPage = lazy(() => import('./pages/company/AboutPage').then(m => ({ default: m.AboutPage })));
const TractionPage = lazy(() => import('./pages/company/TractionPage').then(m => ({ default: m.TractionPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const SecurityPage = lazy(() => import('./pages/SecurityPage').then(m => ({ default: m.SecurityPage })));
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage').then(m => ({ default: m.IntegrationsPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const DemoPage = lazy(() => import('./pages/DemoPage').then(m => ({ default: m.DemoPage })));

// Sleek Trevia Loading Indicator
const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-[#00A09A]/20 animate-ping" />
      <div className="w-12 h-12 rounded-full border-2 border-t-[#00A09A] border-r-[#00A09A] border-b-transparent border-l-transparent animate-spin" />
    </div>
    <div className="text-xs font-mono tracking-widest text-[#00A09A] uppercase animate-pulse">
      Connecting To Trevia...
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#02060D] text-slate-100 flex flex-col font-sans selection:bg-[#00A09A] selection:text-white relative">

      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* Dynamic Route Pages with Lazy Loading */}
      <main className="flex-1 relative z-10">
        <Suspense fallback={<PageLoadingFallback />}>
          <div key={location.pathname} className="page-transition">
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
            
            {/* Demo Page */}
            <Route path="/demo" element={<DemoPage onRequestModal={() => setIsDemoModalOpen(true)} />} />
            <Route path="/request-demo" element={<DemoPage onRequestModal={() => setIsDemoModalOpen(true)} />} />
            <Route path="/book-demo" element={<DemoPage onRequestModal={() => setIsDemoModalOpen(true)} />} />

            {/* Resources & Legal */}
            <Route path="/resources" element={<ResourcesPage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage onRequestDemo={() => setIsDemoModalOpen(true)} />} />
          </Routes>
          </div>
        </Suspense>
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
