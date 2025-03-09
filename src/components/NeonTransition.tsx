
import React from 'react';
import { motion } from 'framer-motion';

const NeonTransition: React.FC = () => {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      {/* Curved synthwave background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,197.3C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="url(#paint0_linear)" 
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="160" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
          <path 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="url(#paint1_linear)" 
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient id="paint1_linear" x1="720" y1="128" x2="720" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" stopOpacity="0.5" />
              <stop offset="1" stopColor="#EC4899" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Middle horizontal neon line */}
      <motion.div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[2px] bg-pink-500"
        initial={{ scaleX: 0, opacity: 0, filter: 'blur(4px)' }}
        whileInView={{ 
          scaleX: 1, 
          opacity: 1,
          filter: 'blur(2px)',
          boxShadow: [
            '0 0 5px rgba(236, 72, 153, 0.5), 0 0 10px rgba(236, 72, 153, 0.3)', 
            '0 0 10px rgba(236, 72, 153, 0.7), 0 0 20px rgba(236, 72, 153, 0.5)', 
            '0 0 5px rgba(236, 72, 153, 0.5), 0 0 10px rgba(236, 72, 153, 0.3)'
          ]
        }}
        transition={{ 
          duration: 1.5, 
          ease: "easeInOut",
          boxShadow: {
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse"
          }
        }}
        viewport={{ once: true }}
      />
      
      {/* Horizontal grid lines */}
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={i} 
          className="absolute w-full h-[1px] bg-pink-500/20"
          style={{ top: `${(i + 1) * 8}%` }}
          initial={{ scaleX: 0, x: i % 2 === 0 ? '-100%' : '100%' }}
          whileInView={{ scaleX: 1, x: 0 }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
          viewport={{ once: true }}
        />
      ))}
      
      {/* Vertical grid lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div 
          key={i} 
          className="absolute h-full w-[1px] bg-cyan-500/20"
          style={{ left: `${(i + 1) * 5}%` }}
          initial={{ scaleY: 0, y: i % 2 === 0 ? '-100%' : '100%' }}
          whileInView={{ scaleY: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.02 }}
          viewport={{ once: true }}
        />
      ))}
      
      {/* Animated glow circles */}
      <motion.div
        className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute right-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyan-600/20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Additional synthwave elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,58.7C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
            fill="url(#paint2_linear)" 
            fillOpacity="0.15"
          />
          <defs>
            <linearGradient id="paint2_linear" x1="720" y1="76" x2="720" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22D3EE" stopOpacity="0.7" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NeonTransition;
