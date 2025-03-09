
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { scrollToElement } from '../utils/transitions';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Code, ExternalLink, Sparkles } from 'lucide-react';
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

  const floatingIcons = [
    { icon: <Code size={24} />, delay: 0, x: -120, y: -80 },
    { icon: <Sparkles size={20} />, delay: 0.2, x: 150, y: -120 },
    { icon: <ExternalLink size={18} />, delay: 0.4, x: -180, y: 60 }
  ];

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Floating interactive elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-10 text-primary/50 parallax"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0.5],
            scale: [0.8, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            delay: item.delay,
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            left: `calc(50% + ${item.x}px)`, 
            top: `calc(50% + ${item.y}px)`,
          }}
          data-speed={`0.${index + 1}`}
        >
          {item.icon}
        </motion.div>
      ))}
      
      {/* Content */}
      <motion.div 
        ref={textRef} 
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-block mb-4 px-4 py-1 rounded-full neo-morphism backdrop-blur-sm"
          variants={itemVariants}
        >
          <p className="text-sm font-mono text-primary">
            {t('hero.subtitle')}
          </p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
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
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 ease-cinematic font-medium transform hover:scale-[1.02] active:scale-[0.98]"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta_projects')}
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToElement('contact', 80)}
            className="px-8 py-3 rounded-lg border border-white/10 glass-morphism transition-all duration-300 ease-cinematic font-medium transform hover:scale-[1.02] active:scale-[0.98]"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.2)" }}
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
            <span className="text-sm text-muted-foreground mb-2">{t('hero.scroll')}</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
