import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import WorkWithUs from './pages/Work-With-Us';
import Opportunities from './pages/Opp';
import NotFound from './pages/404';
import ISO from './components/about/iso';
import Misson from './components/about/misson';
import HSE from './components/about/hse';
import { ScrollToTop, ScrollToHash } from "./lib/Scrall";
import fb from './assets/fb.png';
import ig from './assets/ig.png';
import linkedin from './assets/in.png';
import x from './assets/x.png';

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(location.pathname === '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsLanding(false);
    }
  }, [location.pathname]);

  return isLanding ? (
    <Landing landing={setIsLanding} />
  ) : (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />
      <ScrollToHash />
      <SocialSidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission-and-vision" element={<Misson />} />
          <Route path="/about/hse-and-quality" element={<HSE />} />
          <Route path="/about/certification" element={<ISO />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
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


function SocialSidebar() {
  return (
    <div className="fixed left-0 top-2/5 z-50 flex flex-col space-y-2">
      <a href="https://facebook.com/people/TerraCore/61573495764602" target="_blank" rel="noopener noreferrer">
        <img src={fb} alt="Facebook" className="w-10 h-10 opacity-75" />
      </a>
      <a href="https://x.com/TerraCoreme" target="_blank" rel="noopener noreferrer">
        <img src={x} alt="Twitter" className="w-10 h-10 opacity-75" />
      </a>
      <a href="https://www.instagram.com/terracore.ae/" target="_blank" rel="noopener noreferrer">
        <img src={ig} alt="Instagram" className="w-10 h-10 opacity-75" />
      </a>
      <a href="https://linkedin.com/company/terracore-ae" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="w-10 h-10 opacity-75" />
      </a>
    </div>
  );
}

