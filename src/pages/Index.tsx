
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import ThemeLanguageSwitch from '../components/ThemeLanguageSwitch';
import { useRevealOnScroll, useParallax } from '../utils/transitions';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../store/useSettingsStore';
import '../utils/i18n';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import ResumeSection from '../components/ResumeSection';
import Certifications from '../components/Certifications';
import CreativeShowcase from '../components/CreativeShowcase';

const Index = () => {
  useRevealOnScroll();
  useParallax();
  
  const { toast } = useToast();
  const { t } = useTranslation();
  const { theme, language, setTheme, setLanguage } = useSettingsStore();
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  // Initialize theme and language
  useEffect(() => {
    // Apply saved theme
    setTheme(theme);
    
    // Apply saved language
    setLanguage(language);
    
    // Simulate loading for performance optimization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Show welcome toast after loading
  useEffect(() => {
    if (!isLoading) {
      toast({
        title: t('hero.welcome'),
        description: t('hero.toast_message'),
      });
    }
  }, [isLoading, toast, t]);

  // Custom scroll behavior for fluid section transitions
  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        const sections = sectionsRef.current.querySelectorAll('section');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          
          if (isVisible) {
            section.classList.add('section-active');
          } else {
            section.classList.remove('section-active');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Background effects */}
      <ParticleBackground particleCount={70} />
      
      {/* Theme and language switch */}
      <ThemeLanguageSwitch />
      
      {/* Fixed navigation */}
      <Navbar />
      
      {/* Main content */}
      <main ref={sectionsRef}>
        <Hero />
        <div className="section-transition">
          <About />
        </div>
        <div className="section-transition">
          <CreativeShowcase />
        </div>
        <div className="section-transition">
          <Projects />
        </div>
        <div className="section-transition">
          <Certifications />
        </div>
        <div className="section-transition">
          <Experience />
        </div>
        <div className="section-transition">
          <Testimonials />
        </div>
        <div className="section-transition">
          <Services />
        </div>
        <div className="section-transition">
          <ResumeSection />
        </div>
        <div className="section-transition">
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
