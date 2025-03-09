
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote, Star, StarHalf } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    position: "Directrice Marketing",
    company: "TechVision",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Travailler avec ce développeur a été une expérience incroyable. Sa capacité à comprendre nos besoins et à livrer des solutions sur mesure a transformé notre présence en ligne. Je recommande ses services à quiconque cherche un développeur web de premier ordre.",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas Dubois",
    position: "CEO",
    company: "StartupFlow",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Un talent exceptionnel. Ce développeur a créé pour nous une application web qui a dépassé toutes nos attentes. Son expertise technique et sa créativité ont fait toute la différence dans notre projet.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Emma Chen",
    position: "Directrice Produit",
    company: "InnovateLab",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Nous avons eu la chance de travailler avec ce développeur sur plusieurs projets, et chaque fois, les résultats ont été spectaculaires. Sa compréhension des tendances actuelles et son souci du détail font de lui un partenaire de développement idéal.",
    rating: 5
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
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-gray-400" />);
    }
    
    return stars;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={testimonialsRef}>
      {/* Background synthwave */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-cyan-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Témoignages
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Découvrez ce que mes clients disent de ma prestation et de mon travail
          </motion.p>
        </div>
        
        <div className="relative py-8">
          {/* Carrousel */}
          <div className="overflow-hidden">
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
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-cyan-500/20" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-grow text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        <p className="text-lg mb-6 italic">{testimonial.text}</p>
                        
                        <div>
                          <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                          <p className="text-muted-foreground">
                            {testimonial.position}, <span className="text-cyan-400">{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
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
                  className={`w-3 h-3 rounded-full ${
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
