
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import BackgroundEffect from './components/BackgroundEffect.tsx';

// Pages
import Home from './pages/Home.tsx';
import AboutPage from './pages/AboutPage.tsx';
import SkillsPage from './pages/SkillsPage.tsx';
import ExperiencePage from './pages/ExperiencePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import EducationPage from './pages/EducationPage.tsx';
import CertificationsPage from './pages/CertificationsPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="min-h-[70vh]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <BackgroundEffect />
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-32 overflow-hidden">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
