
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects, categories, CategoryInfo, ProjectCategory } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import ProjectDetailModal from './ProjectDetailModal';
import { Folder, ChevronDown, ChevronUp, Filter, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ProjectCategory | null>(null);
  const [activeTechnologyFilter, setActiveTechnologyFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openCategoryMenu, setOpenCategoryMenu] = useState<string | null>(null);
  
  const { t } = useTranslation();
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  const handleCategoryFilterChange = (category: ProjectCategory | null) => {
    setActiveCategoryFilter(category === activeCategoryFilter ? null : category);
    setActiveTechnologyFilter(null);
  };
  
  const handleTechnologyFilterChange = (technology: string | null) => {
    setActiveTechnologyFilter(technology === activeTechnologyFilter ? null : technology);
    setActiveCategoryFilter(null);
  };
  
  const toggleCategoryMenu = (categoryId: string) => {
    setOpenCategoryMenu(openCategoryMenu === categoryId ? null : categoryId);
  };
  
  // Filtrage combiné
  const filteredProjects = projects.filter(project => {
    // D'abord appliquer le filtre principal (all ou featured)
    if (activeFilter === 'featured' && !project.featured) {
      return false;
    }
    
    // Puis appliquer le filtre de catégorie si actif
    if (activeCategoryFilter && project.category !== activeCategoryFilter) {
      return false;
    }
    
    // Puis appliquer le filtre de technologie si actif
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
  
  // Variantes d'animation
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
      boxShadow: "0 0 25px rgba(34,211,238,0.5)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };
  
  const getCategoryColor = (categoryId: ProjectCategory) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-400';
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background synthwave */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            {t('projects.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            variants={titleVariants}
          >
            {t('projects.description')}
          </motion.p>
          
          {/* Filtres principaux */}
          <motion.div 
            className="flex justify-center gap-4 mb-12"
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
                  : 'glass-morphism hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('projects.filters.featured')}
            </motion.button>
          </motion.div>
          
          {/* Filtres de catégories et technologies - version déroulante */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={titleVariants}
          >
            <div className="w-full max-w-3xl mx-auto">
              <h3 className="text-lg font-medium mb-4 flex items-center justify-center">
                <Filter className="mr-2 w-5 h-5 text-pink-400" />
                {t('projects.filters.categories')}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category: CategoryInfo) => (
                  <div key={category.id} className="relative">
                    <motion.button
                      onClick={() => toggleCategoryMenu(category.id)}
                      className="w-full px-4 py-3 rounded-lg glass-morphism flex items-center justify-between transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                      whileHover={{ boxShadow: "0 0 15px rgba(34,211,238,0.3)" }}
                    >
                      <span className="text-sm font-medium">{t('nav.language') === 'en' ? category.nameEn : category.name}</span>
                      {openCategoryMenu === category.id ? 
                        <ChevronUp className="h-4 w-4 text-muted-foreground" /> : 
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      }
                    </motion.button>
                    
                    {openCategoryMenu === category.id && (
                      <motion.div 
                        className="absolute z-20 mt-2 w-full rounded-lg overflow-hidden glass-morphism py-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <button
                          onClick={() => handleCategoryFilterChange(category.id)}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${
                            activeCategoryFilter === category.id ? 'text-cyan-400' : ''
                          }`}
                        >
                          {t('nav.language') === 'en' ? category.nameEn : category.name}
                        </button>
                        
                        <div className="border-t border-white/10 my-1"></div>
                        
                        {category.technologies.map((tech) => (
                          <button
                            key={tech}
                            onClick={() => handleTechnologyFilterChange(tech)}
                            className={`w-full px-4 py-1.5 text-left text-xs hover:bg-white/10 transition-colors ${
                              activeTechnologyFilter === tech ? 'text-pink-400' : ''
                            }`}
                          >
                            {tech}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Grille de projets */}
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
                  className="glass-morphism rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-cyan-500/30"
                  onClick={() => openProjectModal(project)}
                >
                  <div className={`h-48 bg-gradient-to-br ${getCategoryColor(project.category)} flex items-center justify-center relative group`}>
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="text-5xl font-bold text-white opacity-30 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-50">
                        <Folder className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 relative group">
                    <div className="absolute -right-2 -top-2 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                    
                    {project.date && (
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </div>
                    )}
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm font-light">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 group-hover:bg-pink-500/10 transition-colors duration-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      className="text-sm font-medium flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
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
                {t('projects.no_projects')}
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
            className="inline-flex items-center px-6 py-3 rounded-lg glass-morphism hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-purple-500/30"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168,85,247,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.836 2.807 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            {t('projects.view_more')}
          </motion.a>
        </motion.div>
      </div>
      
      {/* Modal pour les détails du projet */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeProjectModal} 
      />
    </section>
  );
};

export default Projects;
