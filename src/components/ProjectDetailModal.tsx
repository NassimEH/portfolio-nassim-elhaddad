
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, X, Calendar } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  
  if (!project) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl glass-morphism border border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.2)] backdrop-blur-2xl max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight mb-2">
            {project.title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1.5 bg-black/20 hover:bg-black/30 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
          
        {project.imageUrl ? (
          <div className="h-64 sm:h-96 w-full rounded-md overflow-hidden mb-6">
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ) : (
          <div className="h-48 sm:h-64 w-full rounded-md overflow-hidden mb-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
            <motion.div
              className="text-white/20 text-8xl font-bold"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {project.title.charAt(0)}
            </motion.div>
          </div>
        )}
        
        {project.date && (
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
            <span>{t('projects.modal.date')}: {project.date}</span>
          </div>
        )}
        
        <p className="text-muted-foreground mb-8">
          {project.description}
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">{t('projects.modal.technologies')}</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md glass-morphism bg-gradient-to-r from-cyan-500/20 to-cyan-700/20 hover:from-cyan-500/30 hover:to-cyan-700/30 transition-colors border border-cyan-500/30 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {t('projects.modal.visit_site')}
            </a>
          )}
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md glass-morphism hover:bg-white/5 transition-colors border border-white/10"
          >
            <Github className="w-4 h-4 mr-2" />
            {t('projects.modal.view_code')}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
