
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { scrollToElement } from '../utils/transitions';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Code, Sparkles, Cpu, ZapIcon } from 'lucide-react';
import { useSettingsStore } from '../store/useSettingsStore';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const theme = useSettingsStore(state => state.theme);
  
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
    { icon: <Code size={24} className="text-purple-400" />, delay: 0, x: -120, y: -80 },
    { icon: <Sparkles size={20} className="text-pink-400" />, delay: 0.2, x: 150, y: -120 },
    { icon: <Cpu size={22} className="text-cyan-400" />, delay: 0.3, x: -180, y: 60 },
    { icon: <ZapIcon size={18} className="text-yellow-400" />, delay: 0.4, x: 190, y: 90 }
  ];
  
  // Easter egg - konami code
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Easter egg trouvé!
          document.body.classList.add('animated-gradient');
          setTimeout(() => {
            document.body.classList.remove('animated-gradient');
          }, 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="hero" className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 ${theme === 'light' ? 'bg-gradient-to-b from-gray-100 to-gray-200' : 'bg-gradient-to-b from-gray-900 to-black'}`}>
      {/* Background Scene avec interactions */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Grille synthwave */}
      <div className={`absolute inset-0 bg-grid-pattern opacity-10 ${theme === 'light' ? 'opacity-5' : 'opacity-10'}`}></div>
      
      {/* Lumières Synthwave */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
      
      {/* Floating interactive elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-10 parallax"
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
          whileHover={{ scale: 1.5, rotate: 15 }}
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
          className="inline-block mb-6 px-4 py-1 rounded-full glass-morphism backdrop-blur-sm border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          variants={itemVariants}
        >
          <p className="text-sm font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t('hero.subtitle')}
          </p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance"
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
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-cinematic font-medium transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168,85,247,0.7)" }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta_projects')}
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToElement('contact', 80)}
            className="px-8 py-3 rounded-lg border border-cyan-500/50 glass-morphism transition-all duration-300 ease-cinematic font-medium transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34,211,238,0.5)" }}
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
            <ArrowDown className="w-5 h-5 text-cyan-400" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
