
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
import NeonTransition from '../components/NeonTransition';
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
  
  // Curved background SVG elements
  const SynthwaveCurves = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top right curve */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
        <svg 
          className="absolute -top-20 -right-20 w-1/2 h-auto text-purple-500" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M47.9,-61.7C62.3,-53.1,74.6,-39.6,79.8,-23.8C85,-8,83,-10.7,79.1,5.6C75.2,21.9,69.4,36.3,58.6,45.4C47.8,54.5,32,58.2,15.6,65.1C-0.7,72,-17.8,82.1,-32.7,79.9C-47.6,77.7,-60.4,63.2,-66.3,47.2C-72.2,31.1,-71.1,13.4,-70.6,-4.3C-70.1,-22,-70.2,-39.7,-61.5,-50.1C-52.8,-60.5,-35.3,-63.6,-19.4,-71.5C-3.5,-79.3,10.7,-91.7,26.1,-88.9C41.5,-86,56.9,-67.8,47.9,-61.7Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      {/* Bottom left curve */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden opacity-20">
        <svg 
          className="absolute -bottom-20 -left-20 w-1/2 h-auto text-pink-500" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M41.3,-49.1C53.3,-39.8,62.8,-26.5,67.1,-10.9C71.4,4.7,70.5,22.6,62.3,36.1C54.2,49.7,38.8,58.8,22.2,64.9C5.6,71,-12.1,74.1,-27.4,69.6C-42.7,65.1,-55.6,53,-63.6,37.5C-71.6,22,-74.6,3.1,-70.7,-13.4C-66.8,-29.9,-56,-44,-42.4,-52.9C-28.9,-61.8,-12.6,-65.5,1.1,-66.8C14.8,-68.1,29.3,-58.4,41.3,-49.1Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      {/* Middle curved element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden opacity-10">
        <svg 
          className="absolute w-full h-auto text-cyan-500" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M50.8,-65.2C65.3,-51.5,76.4,-35.1,79.1,-17.8C81.8,-0.5,76.1,17.8,66.2,32.2C56.3,46.6,42.2,57.2,26.3,65.2C10.4,73.2,-7.2,78.7,-24.2,75.4C-41.2,72.1,-57.5,60,-68,43.5C-78.5,27.1,-83.2,6.3,-80.3,-13.4C-77.4,-33.1,-66.9,-51.8,-51.6,-65.5C-36.3,-79.2,-16.2,-88,-0.4,-87.5C15.4,-86.9,36.3,-78.9,50.8,-65.2Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
    </div>
  );
  
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
      <SynthwaveCurves />
      
      <ThemeLanguageSwitch />
      
      <Navbar />
      
      <main ref={sectionsRef}>
        <Hero />
        
        <NeonTransition />
        
        <div className="section-transition">
          <About />
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
          <Contact />
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
