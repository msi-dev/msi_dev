import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader.tsx';
import { SiteFooter } from './components/SiteFooter.tsx';
import { MobileBottomNav } from './components/MobileBottomNav.tsx';
import { Home } from './pages/Home.tsx';
import { Projects } from './pages/Projects.tsx';
import { Skills } from './pages/Skills.tsx';
import { Education } from './pages/Education.tsx';
import { Hobbies } from './pages/Hobbies.tsx';
import { About } from './pages/About.tsx';
import { Contact } from './pages/Contact.tsx';

// Scroll to top helper on page route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)] selection:bg-[var(--md-sys-color-primary-container)] selection:text-[var(--md-sys-color-on-primary-container)]">
        {/* Top Header Bar */}
        <SiteHeader />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <SiteFooter />

        {/* Mobile Material 3 Docked Bottom Nav */}
        <MobileBottomNav />
      </div>
    </BrowserRouter>
  );
}
