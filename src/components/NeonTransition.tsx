
import React from 'react';
import { motion } from 'framer-motion';

const NeonTransition: React.FC = () => {
  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden">
      <div className="absolute w-full h-px top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80"></div>
      
      <motion.div 
        className="absolute left-0 w-[50%] h-px top-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          left: ["0%", "100%"],
          width: ["50%", "70%", "30%", "50%"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div 
        className="absolute right-0 w-[30%] h-px top-2/3 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
        animate={{
          right: ["0%", "100%"],
          width: ["30%", "50%", "20%", "30%"]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />
    </div>
  );
};

export default NeonTransition;
