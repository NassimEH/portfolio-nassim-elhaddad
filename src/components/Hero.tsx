
import React, { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';
import { scrollToElement } from '../utils/transitions';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate the text on load
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-slide-up');
    }
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Content */}
      <div 
        ref={textRef} 
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center transform opacity-0"
      >
        <div className="inline-block mb-4 px-4 py-1 rounded-full neo-morphism backdrop-blur-sm">
          <p className="text-sm font-mono text-primary">
            Développeur Full Stack
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Nassim El Haddad
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance">
          Je crée des applications web modernes, performantes et accessibles qui résolvent des problèmes concrets.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => scrollToElement('projects', 80)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 ease-cinematic font-medium transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Voir mes projets
          </button>
          
          <button 
            onClick={() => scrollToElement('contact', 80)}
            className="px-8 py-3 rounded-lg border border-white/10 hover:border-white/20 glass-morphism transition-all duration-300 ease-cinematic font-medium transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Me contacter
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div 
            className="flex flex-col items-center cursor-pointer animate-pulse"
            onClick={() => scrollToElement('about', 80)}
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="animate-float"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
