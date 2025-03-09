
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    position: "Directrice Marketing",
    company: "TechVision",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Travailler avec ce développeur a été une expérience incroyable. Sa capacité à comprendre nos besoins et à livrer des solutions sur mesure a transformé notre présence en ligne. Je recommande ses services à quiconque cherche un développeur web de premier ordre."
  },
  {
    id: 2,
    name: "Thomas Dubois",
    position: "CEO",
    company: "StartupFlow",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Un talent exceptionnel. Ce développeur a créé pour nous une application web qui a dépassé toutes nos attentes. Son expertise technique et sa créativité ont fait toute la différence dans notre projet."
  },
  {
    id: 3,
    name: "Emma Chen",
    position: "Directrice Produit",
    company: "InnovateLab",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Nous avons eu la chance de travailler avec ce développeur sur plusieurs projets, et chaque fois, les résultats ont été spectaculaires. Sa compréhension des tendances actuelles et son souci du détail font de lui un partenaire de développement idéal."
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={testimonialsRef}>
      {/* Background synthwave */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80 transition-colors duration-1000"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-cyan-600/20 to-transparent transition-opacity duration-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Témoignages
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Découvrez ce que mes clients disent de ma prestation et de mon travail
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Background effects */}
          <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl rounded-full opacity-50"></div>
          
          {/* Carrousel */}
          <div className="relative overflow-hidden z-10">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-8 glass-morphism rounded-2xl border border-cyan-500/30 shadow-[0_0_25px_rgba(34,211,238,0.2)] relative"
                  >
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-cyan-500/10" />
                    
                    <div className="text-center mb-6">
                      <p className="text-xl italic text-muted-foreground leading-relaxed mb-6">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] mb-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center">
                        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">
                          {testimonial.position}, <span className="text-cyan-400">{testimonial.company}</span>
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <motion.div 
                      className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-tl from-cyan-500/20 to-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    
                    <motion.div 
                      className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Contrôles de navigation */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              className="p-2 rounded-full glass-morphism hover:bg-white/10 transition-all duration-300"
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-6 w-6 text-cyan-400" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === current ? 'bg-cyan-400' : 'bg-white/20'
                  }`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              className="p-2 rounded-full glass-morphism hover:bg-white/10 transition-all duration-300"
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-6 w-6 text-cyan-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
