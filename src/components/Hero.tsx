
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { scrollToElement } from '../utils/transitions';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Code, ExternalLink, Sparkles, Cpu, ZapIcon } from 'lucide-react';
import { useSettingsStore } from '../store/useSettingsStore';
import { useToast } from '@/hooks/use-toast';

// Define planet types
interface Planet {
  id: number;
  size: number;
  color: string;
  initialPosition: { x: number; y: number };
  message?: string;
}

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const theme = useSettingsStore(state => state.theme);
  const { toast } = useToast();
  
  // Interactive planets
  const [planets, setPlanets] = useState<Planet[]>([
    { 
      id: 1, 
      size: 60, 
      color: 'from-purple-500 to-blue-600', 
      initialPosition: { x: -150, y: 100 },
      message: '✨ Bienvenue dans mon univers digital !'
    },
    { 
      id: 2, 
      size: 40, 
      color: 'from-pink-500 to-red-500', 
      initialPosition: { x: 200, y: -120 },
      message: '🚀 Explorez mes projets pour découvrir mes compétences !'
    },
    { 
      id: 3, 
      size: 80, 
      color: 'from-cyan-400 to-blue-500', 
      initialPosition: { x: 180, y: 150 },
      message: '💡 Essayez le code Konami: ↑↑↓↓←→←→BA'
    },
    { 
      id: 4, 
      size: 30, 
      color: 'from-yellow-400 to-orange-500', 
      initialPosition: { x: -180, y: -80 }
    },
  ]);
  
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  
  // Planet movement with mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 10 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  const showPlanetMessage = (planet: Planet) => {
    if (planet.message) {
      setActiveMessage(planet.message);
      setTimeout(() => {
        setActiveMessage(null);
      }, 3000);
      
      toast({
        title: "Message secret découvert !",
        description: planet.message,
        variant: "default",
      });
    }
  };
  
  useEffect(() => {
    // Animate the text on load
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-slide-up');
    }
    
    // Random planet movement animation
    const interval = setInterval(() => {
      const randomPlanetIndex = Math.floor(Math.random() * planets.length);
      
      setPlanets(prev => 
        prev.map((planet, idx) => 
          idx === randomPlanetIndex 
            ? {
                ...planet,
                initialPosition: {
                  x: planet.initialPosition.x + (Math.random() * 40 - 20),
                  y: planet.initialPosition.y + (Math.random() * 40 - 20)
                }
              }
            : planet
        )
      );
    }, 5000);
    
    return () => clearInterval(interval);
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
      
      {/* Interactive Planets */}
      {planets.map((planet, index) => {
        // Calculate position based on mouse and initial position
        const planetX = useTransform(
          smoothMouseX,
          [0, window.innerWidth],
          [planet.initialPosition.x - 20, planet.initialPosition.x + 20]
        );
        
        const planetY = useTransform(
          smoothMouseY,
          [0, window.innerHeight],
          [planet.initialPosition.y - 20, planet.initialPosition.y + 20]
        );
        
        return (
          <motion.div
            key={planet.id}
            className={`absolute z-20 rounded-full cursor-pointer bg-gradient-to-br ${planet.color} shadow-lg`}
            style={{ 
              width: planet.size, 
              height: planet.size,
              x: planetX,
              y: planetY,
              left: `calc(50% + ${planet.initialPosition.x}px)`,
              top: `calc(50% + ${planet.initialPosition.y}px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.2,
            }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 0 20px rgba(255,255,255,0.5)", 
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => showPlanetMessage(planet)}
            drag
            dragConstraints={{
              top: -200,
              right: 200,
              bottom: 200,
              left: -200,
            }}
          >
            <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 rounded-full border border-white/20"></div>
          </motion.div>
        );
      })}
      
      {/* Secret Message Display */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="absolute z-30 top-1/4 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-md text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-white/20"
          >
            {activeMessage}
          </motion.div>
        )}
      </AnimatePresence>
      
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
