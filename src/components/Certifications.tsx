
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, ChevronDown, ExternalLink, Filter } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Sample certifications data
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Web Development Certification",
      issuer: "FreeCodeCamp",
      date: "2023",
      category: "development",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=FreeCodeCamp",
      link: "https://www.freecodecamp.org"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      category: "development",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=Meta+React",
      link: "https://www.meta.com"
    },
    {
      id: 3,
      title: "Cloud Practitioner",
      issuer: "AWS",
      date: "2022",
      category: "cloud",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=AWS+Cloud",
      link: "https://aws.amazon.com"
    },
    {
      id: 4,
      title: "Data Science Specialization",
      issuer: "Coursera",
      date: "2021",
      category: "data",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=Coursera+Data",
      link: "https://www.coursera.org"
    },
    {
      id: 5,
      title: "Digital Marketing Fundamentals",
      issuer: "Google",
      date: "2021",
      category: "marketing",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=Google+Marketing",
      link: "https://www.google.com"
    },
    {
      id: 6,
      title: "UX Design Professional",
      issuer: "Google",
      date: "2020",
      category: "design",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=Google+UX",
      link: "https://www.google.com"
    },
    {
      id: 7,
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "2020",
      category: "cloud",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=Azure",
      link: "https://azure.microsoft.com"
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      issuer: "Cisco",
      date: "2019",
      category: "security",
      image: "https://placehold.co/400x300/1a1a2e/ffffff?text=Cisco+Security",
      link: "https://www.cisco.com"
    }
  ];
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(certifications.map(cert => cert.category)))];
  
  // Filter certifications by category
  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);
  
  // Category colors
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'development': return 'from-purple-500/20 to-pink-500/10 border-purple-500/30';
      case 'cloud': return 'from-blue-500/20 to-cyan-500/10 border-blue-500/30';
      case 'data': return 'from-green-500/20 to-emerald-500/10 border-green-500/30';
      case 'marketing': return 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30';
      case 'design': return 'from-rose-500/20 to-pink-500/10 border-rose-500/30';
      case 'security': return 'from-red-500/20 to-orange-500/10 border-red-500/30';
      default: return 'from-purple-500/20 to-cyan-500/10 border-purple-500/30';
    }
  };
  
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 transition-colors duration-1000"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-indigo-600/20 to-transparent transition-opacity duration-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Certifications
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Mes certifications et formations professionnelles
          </motion.p>
        </motion.div>
        
        {/* Filters */}
        <div className="mb-8 relative">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.button 
              className={`relative px-3 py-1.5 text-sm rounded-full glass-morphism transition-all ${selectedCategory === 'all' ? 'border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.3)]' : 'border border-white/10'}`}
              onClick={() => setSelectedCategory('all')}
              whileHover={{ y: -2 }}
            >
              Toutes
            </motion.button>
            
            {/* Mobile filter dropdown */}
            <div className="relative md:hidden">
              <motion.button 
                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full glass-morphism border border-white/10"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                whileHover={{ y: -2 }}
              >
                <Filter className="w-4 h-4" />
                <span>Filtrer</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 glass-morphism rounded-lg p-2 z-10">
                  {categories.slice(1).map(category => (
                    <button
                      key={category}
                      className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-white/10 transition-colors ${selectedCategory === category ? 'text-indigo-400' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Desktop categories */}
            {categories.slice(1).map(category => (
              <motion.button 
                key={category}
                className={`hidden md:block px-3 py-1.5 text-sm rounded-full glass-morphism transition-all ${selectedCategory === category ? 'border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.3)]' : 'border border-white/10'}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass-morphism rounded-xl overflow-hidden border bg-gradient-to-br ${getCategoryColor(cert.category)}`}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full glass-morphism capitalize">
                      {cert.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold line-clamp-2">{cert.title}</h3>
                    <Award className="flex-shrink-0 w-5 h-5 text-indigo-400" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span className="mr-1">Voir le certificat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Easter egg */}
        <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-help">
          <div className="text-xs text-indigo-400">Easter egg #2: Try clicking on each certification in order!</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
