import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import SocialSidebar from './components/SocialSidebar';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WorkWithUs from './pages/Work-With-Us';
import Opportunities from './pages/Opp';
import NotFound from './pages/404';
import { ScrollToTop, ScrollToHash } from "./lib/Scrall";
import { HelmetProvider } from 'react-helmet-async';
import Subservices from './components/services/subservices';
import { piling, dewatering, shoring, ndrc, soil } from './lib/services-const';
import Logistics from './components/services/logistics';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(location.pathname === '/');
  useEffect(() => {
    if (location.pathname !== '/') setIsLanding(false);
  }, [location.pathname]);
  if (isLanding) return <Landing landing={setIsLanding} />;
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialSidebar />
      <ScrollToTop />
      <ScrollToHash />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission-and-vision" element={<Navigate to="/about#mission-and-vision" replace />} />
          <Route path="/about/hse-and-quality" element={<Navigate to="/about#hse-and-quality" replace />} />
          <Route path="/about/certification" element={<Navigate to="/about#certification" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/soil" element={<Subservices services={soil} />} />
          <Route path="/services/piling" element={<Subservices services={piling} />} />
          <Route path="/services/shoring" element={<Subservices services={shoring} />} />
          <Route path="/services/ndrc" element={<Subservices services={ndrc} />} />
          <Route path="/services/dewatering" element={<Subservices services={dewatering} />} />
          <Route path="/services/logistics" element={<Logistics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
