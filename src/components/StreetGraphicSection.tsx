
import React from 'react';
import { motion } from 'framer-motion';

const StreetGraphicSection: React.FC = () => {
  return (
    <section className="relative py-12 px-6 overflow-hidden">
      {/* White dominant background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-gray-100"></div>
      
      {/* Graffiti-style banner */}
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="w-full rounded-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572051841776-db57ef53c4ae?q=80&w=2080')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-2 text-gray-900"
                style={{ 
                  fontFamily: "'Permanent Marker', cursive",
                  textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                  letterSpacing: '1px'
                }}
              >
                <span className="text-blue-600">90'S</span> <span className="text-orange-500">RETRO</span> <span className="text-purple-600">VIBES</span>
              </h2>
              
              <div className="h-1 w-40 mx-auto md:mx-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-3"></div>
              
              <p className="text-gray-700 font-medium" style={{ fontFamily: "Arial, sans-serif", letterSpacing: '0.5px' }}>
                OLD SCHOOL AESTHETICS • STREET CULTURE • HIP HOP ELEMENTS
              </p>
            </div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['DJ', 'MC', 'GRAFFITI', 'BREAK'].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md"
                  style={{ 
                    background: `linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})`,
                    transform: `rotate(${index * 5}deg)`
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span 
                    className="text-xs md:text-sm font-bold text-white" 
                    style={{ fontFamily: "'Permanent Marker', cursive" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Decorative graffiti style elements */}
          <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 opacity-50">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="#ff00cc" strokeWidth="4" fill="none" />
              <path d="M20,50 L80,50" stroke="#00ccff" strokeWidth="4" />
              <path d="M50,20 L50,80" stroke="#ffcc00" strokeWidth="4" />
            </svg>
          </div>
          
          <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 translate-x-1/3 translate-y-1/3 opacity-40">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,50 50,90 10,50" stroke="#9933ff" strokeWidth="3" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="#ff3366" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to generate random vibrant colors for the 90s aesthetic
function getRandomColor() {
  const colors = [
    '#FF3366', '#FF6633', '#FFCC33', '#33CC99', '#3366FF', 
    '#9933FF', '#FF33CC', '#33CCFF', '#FF6699', '#66CC33'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default StreetGraphicSection;
