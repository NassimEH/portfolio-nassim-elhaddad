
import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, ExternalLink, Award, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  
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
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects for smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-blue-950/5 to-background/95"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 reveal-on-scroll"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm"
            variants={titleVariants}
          >
            <p className="text-sm font-mono text-primary">
              {t('experience.title')}
            </p>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            {t('experience.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={titleVariants}
          >
            {t('experience.description')}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <motion.div 
            className="space-y-8"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8 flex items-center"
              variants={titleVariants}
            >
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              {t('experience.work')}
            </motion.h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-blue-400/20 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="relative pl-10"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />
                  
                  <motion.div 
                    className="glass-morphism p-6 rounded-xl border-l-4 border-blue-500/50"
                    whileHover={{ 
                      x: 5, 
                      boxShadow: "0px 5px 15px rgba(59,130,246,0.2)",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div className="flex items-center">
                        {exp.logo && (
                          <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center mr-3 overflow-hidden">
                            <img 
                              src={exp.logo} 
                              alt={exp.company} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        )}
                        <h4 className="text-xl font-medium">{exp.title}</h4>
                      </div>
                      <div className="text-sm font-mono text-blue-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {exp.startDate} - {exp.endDate || t('experience.present')}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <a 
                        href={`https://www.google.com/search?q=${exp.company}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1 w-fit"
                      >
                        {exp.company}
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div 
            className="space-y-8"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8 flex items-center"
              variants={titleVariants}
            >
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              {t('experience.education')}
            </motion.h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-purple-400/20 before:to-transparent">
              {education.map((edu) => (
                <motion.div 
                  key={edu.id} 
                  className="relative pl-10"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />
                  
                  <motion.div 
                    className="glass-morphism p-6 rounded-xl border-l-4 border-purple-500/50"
                    whileHover={{ 
                      x: 5, 
                      boxShadow: "0px 5px 15px rgba(168,85,247,0.2)",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div className="flex items-center">
                        {edu.logo && (
                          <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center mr-3 overflow-hidden">
                            <img 
                              src={edu.logo} 
                              alt={edu.institution} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        )}
                        <h4 className="text-xl font-medium">{edu.degree}</h4>
                      </div>
                      <div className="text-sm font-mono text-purple-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <a 
                        href={`https://www.google.com/search?q=${edu.institution}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-1 w-fit"
                      >
                        {edu.institution}
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                        {edu.location}
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-muted-foreground">{edu.description}</p>
                    )}
                    
                    {/* Add awards or recognitions if available */}
                    {edu.awards && (
                      <div className="mt-4 p-3 rounded-lg bg-purple-500/10">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-purple-400 mr-2" />
                          <span className="text-sm font-medium text-purple-300">{t('experience.awards')}</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {edu.awards.map((award, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-purple-500 mr-2">•</span>
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* LinkedIn Link */}
        <div className="mt-16 text-center">
          <motion.a 
            href="https://www.linkedin.com/in/nassim-elhaddad/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-700/20"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 20px rgba(59,130,246,0.4)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>{t('experience.view_linkedin')}</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
