
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote, MessageSquare, Calendar, Star, User, Building, ThumbsUp } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  text: string;
  date: string;
  rating: number;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Martin Roussel TEDONGMO LEKPA",
    position: "Production Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Étudiant très sérieux que j'ai eu à l'UPEC. Très assidu pendant le cours autour des différents types de virtualisation, il est opérationnel pour vous accompagner en entreprise sur des sujets d'actualité comme : la conteneurisation et l'observabilité.",
    date: "4 février 2025",
    rating: 5,
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 2,
    name: "François-Xavier Priour",
    position: "Freelance Translator",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "J'ai eu le plaisir d'enseigner l'anglais à Nassim à l'Université Paris-Est Créteil. Je garde le souvenir d'un étudiant motivé, vif, curieux, agréable, avec un très bon niveau d'anglais qui sera sans aucun doute un atout professionnel non négligeable.",
    date: "21 janvier 2025",
    rating: 5,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 3,
    name: "Marie-Hélène Renaud",
    position: "Professeur agrégé de Lettres modernes à l'Université Paris Est Créteil - UFR Sciences et Technologie",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Nassim El Haddad a suivi mes cours d'Expression-Communication (EC) et de Projet Personnel Professionnel (PPP) de BUT2 Informatique en 2023-2024. C'était un étudiant sérieux et attentif, capable d'une réflexion approfondie et doté de très bonnes compétences en expression française. C'est donc très volontiers que je le recommande, tant pour une poursuite d'études que pour un recrutement en entreprise.",
    date: "2 janvier 2025",
    rating: 5,
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 4,
    name: "Théo Moussaoui",
    position: "J'accompagne la création de produits tech 🚀",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Nassim a fait partie des étudiants avec lesquels j'ai beaucoup apprécié travailler en tant qu'enseignant. Pragmatique, réfléchi et consciencieux, je suis confiant sur sa capacité à apporter de la valeur professionnellement !",
    date: "27 décembre 2024",
    rating: 5,
    color: "from-green-400 to-emerald-500"
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
      {/* Background effects */}
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
            {t('testimonials.title', 'Témoignages')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('testimonials.subtitle', 'Témoignages de professeurs et collaborateurs')}
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
                    
                    {/* Add a subtle grid to the background */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-pink-500/10 to-transparent"></div>
                    </div>
                    
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-cyan-500/20" />
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <MessageSquare className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="text-sm text-cyan-400 font-medium">{t('testimonials.label', 'Témoignage')}</span>
                          </div>
                          
                          <p className="text-xl italic text-muted-foreground leading-relaxed mb-6 font-light">
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
                            <h4 className="text-xl font-medium flex items-center">
                              <User className="w-4 h-4 mr-2 text-indigo-400" />
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground flex items-center font-light">
                              <Building className="w-4 h-4 mr-2 text-pink-400" />
                              {testimonial.position}
                            </p>
                            <p className="text-sm text-muted-foreground font-light flex items-center mt-1">
                              <Calendar className="w-3 h-3 mr-1 text-cyan-400" />
                              {testimonial.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              className="p-2 rounded-full neo-blur hover:bg-white/10 transition-all duration-300 border border-cyan-500/30"
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3, boxShadow: "0 0 15px rgba(34,211,238,0.5)" }}
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
              className="p-2 rounded-full neo-blur hover:bg-white/10 transition-all duration-300 border border-cyan-500/30"
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3, boxShadow: "0 0 15px rgba(34,211,238,0.5)" }}
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
