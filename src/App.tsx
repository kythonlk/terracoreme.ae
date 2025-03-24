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
import { ScrollToTop, ScrollToHash } from "./lib/Scrall";

function App() {
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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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

export default App;
