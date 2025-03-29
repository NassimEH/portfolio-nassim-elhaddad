
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
import Certifications from '../components/Certifications';

const Index = () => {
  useRevealOnScroll();
  useParallax();
  
  const { toast } = useToast();
  const { t } = useTranslation();
  const { theme, language, setTheme, setLanguage } = useSettingsStore();
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply theme/language on initial load
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme') as 'dark' | 'light' || theme);
    } else {
      setTheme(theme);
    }
    
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem('language') as 'fr' | 'en' || language);
    } else {
      setLanguage(language);
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isLoading) {
      toast({
        title: t('hero.welcome'),
        description: t('hero.toast_message'),
      });
    }
  }, [isLoading, toast, t]);

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
      <ParticleBackground particleCount={35} />
      
      <ThemeLanguageSwitch />
      
      <Navbar />
      
      <main ref={sectionsRef}>
        <Hero />
        
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
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
