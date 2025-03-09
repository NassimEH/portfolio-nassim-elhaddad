
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, Github, Clock, Tag, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!project) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div
            className="relative w-full max-w-5xl bg-gradient-to-br from-background/90 to-background/95 backdrop-blur-xl rounded-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Top color bar */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
            
            {/* Hero Section with Image */}
            <div className="h-72 sm:h-80 relative overflow-hidden">
              {project.imageUrl ? (
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 flex items-center justify-center">
                  <motion.span 
                    className="text-9xl font-bold opacity-10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  >
                    {project.title.charAt(0)}
                  </motion.span>
                </div>
              )}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              
              {/* Close button */}
              <motion.button 
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass-morphism flex items-center justify-center transition-transform z-10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <X className="w-5 h-5" />
              </motion.button>
              
              {/* Project title */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <motion.h2 
                  className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h2>
                
                <motion.div
                  className="flex items-center text-sm text-muted-foreground space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-cyan-400" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1 text-pink-400" />
                    <span>{project.category}</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {/* Main content */}
              <div className="md:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                    Vue d'ensemble
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-cyan-400" />
                    Points clés
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Architecture moderne et performante</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Design responsive et adaptatif</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Optimisations pour les performances</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="pt-4"
                >
                  <div className="flex flex-wrap gap-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.modal.visit_site')}
                      </a>
                    )}
                    
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg glass-morphism hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t('projects.modal.view_code')}
                    </a>
                  </div>
                </motion.div>
              </div>
              
              {/* Sidebar with tech stack */}
              <motion.div
                className="glass-morphism p-6 rounded-xl h-fit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">{t('projects.modal.technologies')}</h3>
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <motion.div 
                      key={tech} 
                      className="px-4 py-3 rounded-lg glass-morphism bg-gradient-to-r from-white/5 to-transparent text-sm font-medium group hover:from-purple-500/10 hover:to-transparent transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (index * 0.05), duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 group-hover:scale-125 transition-transform"></div>
                        {tech}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Easter egg */}
                <motion.div 
                  className="mt-6 text-xs text-center text-muted-foreground opacity-40 cursor-help"
                  whileHover={{ opacity: 1, color: "#a855f7" }}
                >
                  Easter egg #2: Cliquez 3 fois sur la technologie du haut
                </motion.div>
              </motion.div>
            </div>
            
            {/* Bottom gradient line */}
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
