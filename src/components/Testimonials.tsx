
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote, MessageSquare, Calendar, Star, User, Building, ThumbsUp, Gift } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
  date: string;
  project: string;
  skills: string[];
  highlight: string;
  rating: number;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    position: "Directrice Marketing",
    company: "TechVision",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Travailler avec ce développeur a été une expérience incroyable. Sa capacité à comprendre nos besoins et à livrer des solutions sur mesure a transformé notre présence en ligne. Je recommande ses services à quiconque cherche un développeur web de premier ordre.",
    date: "Juin 2023",
    project: "Refonte site e-commerce",
    skills: ["React", "Node.js", "UI/UX Design"],
    highlight: "Augmentation des conversions de 40% en 3 mois",
    rating: 5,
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    position: "CEO",
    company: "StartupFlow",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Un talent exceptionnel. Ce développeur a créé pour nous une application web qui a dépassé toutes nos attentes. Son expertise technique et sa créativité ont fait toute la différence dans notre projet.",
    date: "Mars 2023",
    project: "Application de gestion",
    skills: ["Vue.js", "Firebase", "Tailwind CSS"],
    highlight: "Temps de développement réduit de 30%",
    rating: 5,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 3,
    name: "Emma Chen",
    position: "Directrice Produit",
    company: "InnovateLab",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Nous avons eu la chance de travailler avec ce développeur sur plusieurs projets, et chaque fois, les résultats ont été spectaculaires. Sa compréhension des tendances actuelles et son souci du détail font de lui un partenaire de développement idéal.",
    date: "Octobre 2022",
    project: "Dashboard analytique",
    skills: ["React", "D3.js", "API REST"],
    highlight: "Visualisation de données complexes simplifiée",
    rating: 4,
    color: "from-amber-400 to-orange-500"
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
            {t('testimonials.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('testimonials.description')}
          </motion.p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
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
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-2xl`}></div>
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-cyan-500/10" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      <div className="md:col-span-3">
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <MessageSquare className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="text-sm text-cyan-400 font-medium">{t('testimonials.testimonial')}</span>
                          </div>
                          
                          <p className="text-xl italic text-muted-foreground leading-relaxed mb-6">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold flex items-center">
                              <User className="w-4 h-4 mr-2 text-indigo-400" />
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground flex items-center">
                              <Building className="w-4 h-4 mr-2 text-pink-400" />
                              {testimonial.position}, <span className="text-cyan-400 ml-1">{testimonial.company}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 glass-morphism rounded-xl p-5 border border-white/10">
                        <div className="mb-4">
                          <h5 className={`text-lg font-medium mb-2 bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                            {t('testimonials.project_details')}
                          </h5>
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                              <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500/30'}`}
                                  fill={i < testimonial.rating ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p className="mb-2">{t('testimonials.project')}: <span className="text-primary">{testimonial.project}</span></p>
                            
                            {/* Project highlight */}
                            <div className="flex items-center mb-3 p-2 rounded-lg bg-gradient-to-r from-green-500/10 to-cyan-500/10">
                              <ThumbsUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <p className="text-green-300 text-xs">{testimonial.highlight}</p>
                            </div>
                            
                            {/* Skills used */}
                            <div className="mb-3">
                              <p className="text-xs text-muted-foreground mb-2 flex items-center">
                                <Gift className="w-3 h-3 mr-1 text-cyan-400" />
                                {t('testimonials.skills_delivered')}:
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {testimonial.skills.map((skill, i) => (
                                  <span 
                                    key={i} 
                                    className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${testimonial.color} bg-opacity-10 text-white`}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`w-full h-1 bg-gradient-to-r ${testimonial.color} rounded-full mb-4`}></div>
                        
                        <div className="flex justify-center mt-4">
                          <motion.button
                            className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${testimonial.color} text-white`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {t('testimonials.view_project')}
                          </motion.button>
                        </div>
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
          
          {/* Navigation controls */}
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
                  className={`w-10 h-2 rounded-full transition-colors duration-300 ${
                    index === current ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-white/20'
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
