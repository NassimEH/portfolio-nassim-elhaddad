
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import { Code, Sparkles, Cpu, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1 
      } 
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };
  
  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  
  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Information sur les paragraphes de description
  const descriptionParagraphs = t('about.description', { returnObjects: true });
  const paragraphs = Array.isArray(descriptionParagraphs) ? descriptionParagraphs : [descriptionParagraphs];

  // Icônes pour un look plus synthwave
  const aboutIcons = [
    { icon: <Code className="w-8 h-8 text-purple-400" />, title: "Code" },
    { icon: <Sparkles className="w-8 h-8 text-pink-400" />, title: "Créativité" },
    { icon: <Cpu className="w-8 h-8 text-cyan-400" />, title: "Innovation" },
    { icon: <Coffee className="w-8 h-8 text-orange-400" />, title: "Passion" }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none"></div>
      
      {/* Effets synthwave - grille et néons */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -bottom-10 left-0 w-full h-40 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
      <div className="absolute -top-10 right-0 w-full h-40 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre Section - Centré et plus grand */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-20"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            {t('about.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
          >
            {t('about.title')}
          </motion.p>
        </motion.div>
        
        {/* Nouvelle mise en page avec design synthwave */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Colonne gauche: About Me - Plus dynamique */}
          <motion.div 
            ref={contentRef}
            variants={contentVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex flex-wrap gap-8 justify-center mb-10">
              {aboutIcons.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ y: -8, scale: 1.05 }}
                  variants={contentVariants}
                >
                  <div className="w-16 h-16 rounded-2xl glass-morphism flex items-center justify-center mb-2 glow shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.title}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed"
                  variants={contentVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              variants={contentVariants}
            >
              {["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <motion.span
                  key={tech}
                  className="inline-block px-4 py-2 text-sm font-medium rounded-full glass-morphism border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                  variants={contentVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(236,72,153,0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Colonne droite: Skills avec éléments interactifs */}
          <motion.div 
            ref={skillsRef}
            variants={skillsVariants}
            initial="hidden"
            animate={isSkillsInView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-8"
          >
            {skills.map((skillCategory, index) => (
              <motion.div 
                key={skillCategory.category} 
                className="glass-morphism p-6 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                variants={skillCategoryVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 0 25px rgba(34,211,238,0.4)",
                  borderColor: "rgba(34,211,238,0.5)" 
                }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{skillCategory.category}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-colors duration-300"
                      variants={skillItemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 0 8px rgba(34,211,238,0.3)",
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
            
            {/* Easter egg caché */}
            <motion.div 
              className="absolute right-10 bottom-10 opacity-0 hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <div className="text-xs text-cyan-400">Easter egg trouvé! 🎮</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
