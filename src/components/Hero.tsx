
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { scrollToElement } from '../utils/transitions';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import { useSettingsStore } from '../store/useSettingsStore';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const theme = useSettingsStore(state => state.theme);
  
  useEffect(() => {
    // Animate the text on load
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-slide-up');
    }
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="hero" className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 to-gray-100' : 'bg-gradient-to-b from-gray-900 to-black'}`}>
      {/* Background Scene with subtle interactions */}
      <div className="absolute inset-0 z-0 opacity-70">
        <ThreeScene />
      </div>
      
      {/* Subtle grid pattern */}
      <div className={`absolute inset-0 bg-grid-pattern opacity-5`}></div>
      
      {/* Content */}
      <motion.div 
        ref={textRef} 
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-block mb-6"
          variants={itemVariants}
        >
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            {t('hero.subtitle')}
          </p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-light mb-8 tracking-tight"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance font-light"
          variants={itemVariants}
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <motion.button 
            onClick={() => scrollToElement('projects', 80)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300 ease-apple font-medium transform hover:scale-[1.02] active:scale-[0.98] shadow-apple"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta_projects')}
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToElement('contact', 80)}
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-apple font-medium text-foreground"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta_contact')}
          </motion.button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToElement('about', 80)}
          >
            <span className="text-sm text-muted-foreground mb-2 font-light">{t('hero.scroll')}</span>
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
