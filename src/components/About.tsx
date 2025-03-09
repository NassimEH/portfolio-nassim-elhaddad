
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../utils/projectData';
import { useTranslation } from 'react-i18next';

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

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title Section - Centered */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm"
            variants={titleVariants}
          >
            <p className="text-sm font-mono text-primary">
              {t('about.title')}
            </p>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            {t('about.subtitle')}
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column: About Me - More dynamic with motion */}
          <motion.div 
            ref={contentRef}
            variants={contentVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {t('about.description', { returnObjects: true }).map((paragraph: string, index: number) => (
              <motion.p 
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
                variants={contentVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              variants={contentVariants}
            >
              {["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <motion.span
                  key={tech}
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full glass-morphism"
                  variants={contentVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right column: Skills with interactive elements */}
          <motion.div 
            ref={skillsRef}
            variants={skillsVariants}
            initial="hidden"
            animate={isSkillsInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {skills.map((skillCategory) => (
              <motion.div 
                key={skillCategory.category} 
                className="glass-morphism p-6 rounded-xl"
                variants={skillCategoryVariants}
                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              >
                <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/5 hover:bg-primary/20 transition-colors duration-300"
                      variants={skillItemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.3)",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
