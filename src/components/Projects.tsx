
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects, categories, CategoryInfo, ProjectCategory } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import ProjectDetailModal from './ProjectDetailModal';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ProjectCategory | null>(null);
  const [activeTechnologyFilter, setActiveTechnologyFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { t } = useTranslation();
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  // Get all unique technologies from categories
  const allTechnologies = Array.from(
    new Set(
      categories.flatMap(category => category.technologies)
    )
  ).sort();
  
  const handleCategoryFilterChange = (category: ProjectCategory | null) => {
    setActiveCategoryFilter(category);
    setActiveTechnologyFilter(null);
  };
  
  const handleTechnologyFilterChange = (technology: string | null) => {
    setActiveTechnologyFilter(technology);
    setActiveCategoryFilter(null);
  };
  
  // Combined filtering logic
  const filteredProjects = projects.filter(project => {
    // First apply main filter (all or featured)
    if (activeFilter === 'featured' && !project.featured) {
      return false;
    }
    
    // Then apply category filter if active
    if (activeCategoryFilter && project.category !== activeCategoryFilter) {
      return false;
    }
    
    // Then apply technology filter if active
    if (activeTechnologyFilter && !project.technologies.includes(activeTechnologyFilter)) {
      return false;
    }
    
    return true;
  });
  
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
  };
  
  // Animation variants
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
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { 
      y: -10, 
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };
  
  const getCategoryColor = (categoryId: ProjectCategory) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-400';
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto">
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
              {t('projects.title')}
            </p>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            {t('projects.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={titleVariants}
          >
            {t('projects.description')}
          </motion.p>
          
          {/* Primary Filters */}
          <motion.div 
            className="flex justify-center mt-8 space-x-4 mb-8"
            variants={titleVariants}
          >
            <motion.button
              onClick={() => {
                setActiveFilter('all');
                setActiveCategoryFilter(null);
                setActiveTechnologyFilter(null);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'all' && !activeCategoryFilter && !activeTechnologyFilter
                  ? 'bg-primary text-primary-foreground' 
                  : 'glass-morphism hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('projects.filters.all')}
            </motion.button>
            <motion.button
              onClick={() => {
                setActiveFilter('featured');
                setActiveCategoryFilter(null);
                setActiveTechnologyFilter(null);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'featured' && !activeCategoryFilter && !activeTechnologyFilter
                  ? 'bg-primary text-primary-foreground' 
                  : 'glass-morphism hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('projects.filters.featured')}
            </motion.button>
          </motion.div>
          
          {/* Secondary Filters - Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-6"
            variants={titleVariants}
          >
            <h3 className="w-full text-lg font-medium mb-2">{t('projects.filters.categories')}</h3>
            {categories.map((category: CategoryInfo) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryFilterChange(
                  activeCategoryFilter === category.id ? null : category.id
                )}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  activeCategoryFilter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white` 
                    : 'glass-morphism hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.language') === 'en' ? category.nameEn : category.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Tertiary Filters - Technologies */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={titleVariants}
          >
            <h3 className="w-full text-lg font-medium mb-2">{t('projects.filters.technologies')}</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
              {allTechnologies.map((tech) => (
                <motion.button
                  key={tech}
                  onClick={() => handleTechnologyFilterChange(
                    activeTechnologyFilter === tech ? null : tech
                  )}
                  className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                    activeTechnologyFilter === tech
                      ? 'bg-primary text-primary-foreground' 
                      : 'glass-morphism hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  layoutId={`project-${project.id}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="glass-morphism rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className={`h-48 bg-gradient-to-br ${getCategoryColor(project.category)} flex items-center justify-center`}>
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-5xl font-bold text-white opacity-30">{project.title.charAt(0)}</div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 rounded-full bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      className="text-sm font-medium flex items-center text-primary hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      {t('projects.view_details')} →
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full py-16 text-center text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Aucun projet ne correspond à ces filtres. Veuillez essayer d'autres critères.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/NassimEH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg glass-morphism hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.836 2.807 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            {t('projects.view_more')}
          </motion.a>
        </motion.div>
      </div>
      
      {/* Project Details Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeProjectModal} 
      />
    </section>
  );
};

export default Projects;
