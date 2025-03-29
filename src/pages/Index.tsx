import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ParticleBackground from '../components/ParticleBackground';
import ThemeLanguageSwitch from '../components/ThemeLanguageSwitch';
import { useRevealOnScroll, useParallax } from '../utils/transitions';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../store/useSettingsStore';
import '../utils/i18n';

// Lazy loading des composants non critiques
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Services = lazy(() => import('../components/Services'));
const Certifications = lazy(() => import('../components/Certifications'));

// Composant de chargement
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-10 h-10 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const Index = () => {
  const { t } = useTranslation();
  const sectionsRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const theme = useSettingsStore(state => state.theme);

  useEffect(() => {
    // Préchargement des composants critiques
    Promise.all([
      import('../components/Hero'),
      import('../components/Navbar'),
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-background">
        <div className="w-16 h-16 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ParticleBackground particleCount={35} />
      
      <ThemeLanguageSwitch />
      
      <Navbar />
      
      <main ref={sectionsRef}>
        <Hero />
        
        <Suspense fallback={<LoadingSpinner />}>
          <div className="smooth-transition">
            <Experience />
          </div>
          
          <div className="smooth-transition">
            <About />
          </div>
          
          <div className="smooth-transition">
            <Projects />
          </div>
          
          <div className="smooth-transition">
            <Certifications />
          </div>
          
          <div className="smooth-transition">
            <Testimonials />
          </div>
          
          <div className="smooth-transition">
            <Services />
          </div>
          
          <div className="smooth-transition">
            <Contact />
          </div>
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
};

export default Index;
