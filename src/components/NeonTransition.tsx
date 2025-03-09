
import React from 'react';
import { motion } from 'framer-motion';

const NeonTransition: React.FC = () => {
  return (
    <div className="relative h-32 overflow-hidden">
      {/* Background gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-background"></div>
      
      {/* Horizontal neon lines */}
      <motion.div 
        className="absolute w-full h-0.5 top-1/2 left-0 transform -translate-y-6"
        style={{ 
          background: 'linear-gradient(90deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 1) 20%, rgba(34, 211, 238, 1) 80%, rgba(34, 211, 238, 0))',
          boxShadow: '0 0 15px rgba(34, 211, 238, 0.7), 0 0 30px rgba(34, 211, 238, 0.5), 0 0 45px rgba(34, 211, 238, 0.3)'
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scaleX: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute w-full h-0.5 top-1/2 left-0 transform translate-y-6"
        style={{ 
          background: 'linear-gradient(90deg, rgba(236, 72, 153, 0), rgba(236, 72, 153, 1) 20%, rgba(236, 72, 153, 1) 80%, rgba(236, 72, 153, 0))',
          boxShadow: '0 0 15px rgba(236, 72, 153, 0.7), 0 0 30px rgba(236, 72, 153, 0.5), 0 0 45px rgba(236, 72, 153, 0.3)'
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scaleX: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 5,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Central cross beam */}
      <motion.div 
        className="absolute h-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ 
          width: '200px',
          background: 'linear-gradient(90deg, rgba(168, 85, 247, 0), rgba(168, 85, 247, 1) 50%, rgba(168, 85, 247, 0))',
          boxShadow: '0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(168, 85, 247, 0.5), 0 0 45px rgba(168, 85, 247, 0.3)'
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          width: ['150px', '300px', '150px']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Synthwave sun/grid reference */}
      <div className="absolute bottom-0 left-0 w-full h-5">
        <div className="w-full h-full bg-gradient-to-t from-pink-600/20 via-orange-500/10 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default NeonTransition;
