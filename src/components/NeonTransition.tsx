
import React from 'react';
import { motion } from 'framer-motion';

const NeonTransition: React.FC = () => {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-gradient-to-b from-background via-background to-background">
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
    </div>
  );
};

export default NeonTransition;
