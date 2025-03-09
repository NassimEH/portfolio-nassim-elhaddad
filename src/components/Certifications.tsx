
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Calendar, ExternalLink, Filter, Check, Tag, Briefcase, Layers } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  logo: string;
  category: string[];
  company?: string;
  domain: string[];
  credentialUrl: string;
  color: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    category: ["development", "devops"],
    company: "Amazon",
    domain: ["cloud", "infrastructure"],
    credentialUrl: "#",
    color: "from-blue-500 to-teal-400"
  },
  {
    id: 2,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    category: ["development"],
    company: "Meta",
    domain: ["frontend", "javascript"],
    credentialUrl: "#",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    title: "Professional UI/UX Designer",
    issuer: "Google",
    date: "2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    category: ["design"],
    company: "Google",
    domain: ["design", "frontend"],
    credentialUrl: "#",
    color: "from-amber-400 to-red-500"
  },
  {
    id: 4,
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    logo: "https://www.scrum.org/themes/custom/scrumorg_v2/assets/images/logo-250.png",
    category: ["management"],
    company: "Scrum.org",
    domain: ["agile", "management"],
    credentialUrl: "#",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 5,
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2023",
    logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    category: ["devops"],
    company: "Docker",
    domain: ["infrastructure", "containerization"],
    credentialUrl: "#",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 6,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2021",
    logo: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg",
    category: ["development"],
    company: "freeCodeCamp",
    domain: ["javascript", "algorithms"],
    credentialUrl: "#",
    color: "from-green-400 to-cyan-500"
  }
];

type FilterType = 'all' | 'category' | 'company' | 'domain';

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [filteredCertifications, setFilteredCertifications] = useState<Certification[]>(certifications);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  useEffect(() => {
    if (filterType === 'all' || activeFilter === 'all') {
      setFilteredCertifications(certifications);
    } else if (filterType === 'category') {
      setFilteredCertifications(
        certifications.filter(cert => cert.category.includes(activeFilter))
      );
    } else if (filterType === 'company') {
      setFilteredCertifications(
        certifications.filter(cert => cert.company === activeFilter)
      );
    } else if (filterType === 'domain') {
      setFilteredCertifications(
        certifications.filter(cert => cert.domain.includes(activeFilter))
      );
    }
  }, [activeFilter, filterType]);
  
  // Get unique values for filters
  const getUniqueValues = (field: 'category' | 'company' | 'domain'): string[] => {
    const values = new Set<string>();
    
    if (field === 'category' || field === 'domain') {
      certifications.forEach(cert => {
        cert[field].forEach(value => values.add(value));
      });
    } else if (field === 'company') {
      certifications.forEach(cert => {
        if (cert.company) values.add(cert.company);
      });
    }
    
    return Array.from(values);
  };
  
  const uniqueCategories = getUniqueValues('category');
  const uniqueCompanies = getUniqueValues('company');
  const uniqueDomains = getUniqueValues('domain');
  
  return (
    <section id="certifications" className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background transition-colors duration-1000"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-1"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="px-4 py-1.5 text-sm font-medium rounded-full glass-morphism inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('certifications.title')}
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('certifications.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('certifications.description')}
          </motion.p>
        </motion.div>
        
        {/* Filter Controls */}
        <motion.div 
          className="mb-10 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filterType === 'all' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'glass-morphism'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilterType('all');
                setActiveFilter('all');
                setIsFilterMenuOpen(false);
              }}
            >
              <Layers className="w-4 h-4" />
              <span>{t('certifications.all')}</span>
            </motion.button>
            
            <div className="relative">
              <motion.button
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filterType === 'category' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'glass-morphism'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilterType('category');
                  setIsFilterMenuOpen(prev => !prev && filterType === 'category');
                }}
              >
                <Tag className="w-4 h-4" />
                <span>{t('certifications.by_category')}</span>
              </motion.button>
              
              {isFilterMenuOpen && filterType === 'category' && (
                <motion.div 
                  className="absolute mt-2 left-0 z-20 w-48 py-2 glass-morphism rounded-lg shadow-xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {uniqueCategories.map(category => (
                    <button
                      key={category}
                      className={`w-full py-2 px-4 text-left hover:bg-white/10 transition-colors flex items-center ${activeFilter === category ? 'text-primary' : ''}`}
                      onClick={() => {
                        setActiveFilter(category);
                        setIsFilterMenuOpen(false);
                      }}
                    >
                      {activeFilter === category && <Check className="w-4 h-4 mr-2" />}
                      <span>{t(`certifications.categories.${category}`)}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            <div className="relative">
              <motion.button
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filterType === 'company' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'glass-morphism'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilterType('company');
                  setIsFilterMenuOpen(prev => !prev && filterType === 'company');
                }}
              >
                <Briefcase className="w-4 h-4" />
                <span>{t('certifications.by_company')}</span>
              </motion.button>
              
              {isFilterMenuOpen && filterType === 'company' && (
                <motion.div 
                  className="absolute mt-2 left-0 z-20 w-48 py-2 glass-morphism rounded-lg shadow-xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {uniqueCompanies.map(company => (
                    <button
                      key={company}
                      className={`w-full py-2 px-4 text-left hover:bg-white/10 transition-colors flex items-center ${activeFilter === company ? 'text-primary' : ''}`}
                      onClick={() => {
                        setActiveFilter(company);
                        setIsFilterMenuOpen(false);
                      }}
                    >
                      {activeFilter === company && <Check className="w-4 h-4 mr-2" />}
                      <span>{company}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            <div className="relative">
              <motion.button
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filterType === 'domain' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'glass-morphism'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilterType('domain');
                  setIsFilterMenuOpen(prev => !prev && filterType === 'domain');
                }}
              >
                <Filter className="w-4 h-4" />
                <span>{t('certifications.by_domain')}</span>
              </motion.button>
              
              {isFilterMenuOpen && filterType === 'domain' && (
                <motion.div 
                  className="absolute mt-2 left-0 z-20 w-48 py-2 glass-morphism rounded-lg shadow-xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {uniqueDomains.map(domain => (
                    <button
                      key={domain}
                      className={`w-full py-2 px-4 text-left hover:bg-white/10 transition-colors flex items-center ${activeFilter === domain ? 'text-primary' : ''}`}
                      onClick={() => {
                        setActiveFilter(domain);
                        setIsFilterMenuOpen(false);
                      }}
                    >
                      {activeFilter === domain && <Check className="w-4 h-4 mr-2" />}
                      <span>{t(`certifications.domains.${domain}`, domain)}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
          
          {activeFilter !== 'all' && (
            <div className="mt-4 text-center">
              <motion.span
                className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {filterType === 'category' ? t(`certifications.categories.${activeFilter}`) : 
                 filterType === 'domain' ? t(`certifications.domains.${activeFilter}`, activeFilter) : 
                 activeFilter}
                <button 
                  className="ml-2 text-xs opacity-70 hover:opacity-100"
                  onClick={() => {
                    setFilterType('all');
                    setActiveFilter('all');
                  }}
                >
                  ×
                </button>
              </motion.span>
            </div>
          )}
        </motion.div>
        
        {/* Grid of certifications */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter + filterType}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="relative glass-morphism rounded-xl overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
                layout
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 rounded-lg glass-morphism p-2 flex items-center justify-center overflow-hidden">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent flex items-center`}>
                      <Calendar className="w-3 h-3 mr-1 inline" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Award className="w-4 h-4 mr-1.5" />
                    <span>{t('certifications.issuer')}: {cert.issuer}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.category.map(cat => (
                      <span 
                        key={cat} 
                        className="text-xs py-1 px-2 rounded-full glass-morphism"
                      >
                        {t(`certifications.categories.${cat}`)}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.domain.map(domain => (
                      <span 
                        key={domain} 
                        className="text-xs py-1 px-2 rounded-full glass-morphism bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                      >
                        {t(`certifications.domains.${domain}`, domain)}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 group-hover:flex hidden items-center justify-center w-full py-2 rounded-lg bg-gradient-to-r ${cert.color} text-white transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('certifications.view_credential')}
                  </motion.a>
                </div>
                
                {/* Effet de néon en hover */}
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredCertifications.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 glass-morphism rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">{t('certifications.no_results')}</h3>
            <p className="text-muted-foreground">{t('certifications.try_different_filter')}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
