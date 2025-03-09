
import React, { useEffect } from 'react';
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

const Index = () => {
  useRevealOnScroll();
  useParallax();
  
  const { toast } = useToast();
  const { t } = useTranslation();
  const { theme, language } = useSettingsStore();
  
  // Appliquer le changement de langue
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  
  // Appliquer le thème
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);
  
  useEffect(() => {
    // Afficher un toast de bienvenue
    toast({
      title: t('hero.title'),
      description: t('hero.description'),
    });
  }, [toast, t]);

  return (
    <motion.div 
      className={`min-h-screen relative ${theme === 'light' ? 'light-theme' : ''}`}
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
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
