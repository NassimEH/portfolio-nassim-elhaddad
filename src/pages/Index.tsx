
import React, { useEffect, useState } from 'react';
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

const Index = () => {
  useRevealOnScroll();
  useParallax();
  
  const { toast } = useToast();
  const { t } = useTranslation();
  const { theme, language, setTheme, setLanguage } = useSettingsStore();
  const [isLoading, setIsLoading] = useState(true);
  
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
      {/* Effets de fond */}
      <ParticleBackground particleCount={70} />
      
      {/* Thème et langue */}
      <ThemeLanguageSwitch />
      
      {/* Navigation fixe */}
      <Navbar />
      
      {/* Contenu principal */}
      <main>
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <About />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <ResumeSection />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Certifications />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Projects />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Testimonials />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Experience />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Services />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
