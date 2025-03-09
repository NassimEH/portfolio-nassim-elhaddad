
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Award, Bookmark, BookOpen, Briefcase, Code, Database, Server, FileText, Globe } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  description: string;
  category: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "React Nanodegree",
    organization: "Udacity",
    date: "2023",
    description: "A comprehensive program covering React, Redux, and React Native.",
    category: "frontend"
  },
  {
    id: 2,
    name: "Node.js Developer Certification",
    organization: "Coursera",
    date: "2022",
    description: "An in-depth course on building scalable APIs with Node.js and Express.",
    category: "backend"
  },
  {
    id: 3,
    name: "AWS Certified Developer",
    organization: "Amazon Web Services",
    date: "2021",
    description: "Certification demonstrating proficiency in developing and deploying applications on AWS.",
    category: "devops"
  },
  {
    id: 4,
    name: "Google Cloud Professional Cloud Architect",
    organization: "Google",
    date: "2023",
    description: "Certification demonstrating expertise in designing and managing cloud solutions on Google Cloud Platform.",
    category: "devops"
  },
  {
    id: 5,
    name: "Certified Scrum Master",
    organization: "Scrum Alliance",
    date: "2022",
    description: "Certification demonstrating knowledge of Scrum principles and practices.",
    category: "project_management"
  },
  {
    id: 6,
    name: "Microsoft Certified Azure Solutions Architect Expert",
    organization: "Microsoft",
    date: "2024",
    description: "Certification demonstrating expertise in designing and implementing solutions on Microsoft Azure.",
    category: "devops"
  },
  {
    id: 7,
    name: "Full-Stack Web Development",
    organization: "OpenClassrooms",
    date: "2023",
    description: "A comprehensive program covering both front-end and back-end web development technologies.",
    category: "fullstack"
  },
  {
    id: 8,
    name: "Data Science Specialization",
    organization: "Coursera",
    date: "2022",
    description: "A specialization in data science covering topics such as machine learning, data analysis, and data visualization.",
    category: "data_science"
  },
  {
    id: 9,
    name: "UI/UX Design Specialization",
    organization: "Coursera",
    date: "2021",
    description: "A specialization in UI/UX design covering topics such as user research, wireframing, and prototyping.",
    category: "design"
  },
  {
    id: 10,
    name: "Mobile App Development with React Native",
    organization: "Udemy",
    date: "2023",
    description: "A course on building cross-platform mobile applications with React Native.",
    category: "mobile"
  }
];

interface FilterCategory {
  name: string;
  icon: React.ReactNode;
  filters: string[];
  color: string;
}

const Certifications: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse position tracking for background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(currentFilter === filter ? null : filter);
  };

  const filteredCertifications = currentFilter
    ? certifications.filter(cert => cert.category.toLowerCase().includes(currentFilter))
    : certifications;

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };
  
  // Filter categories
  const filterCategories: FilterCategory[] = [
    {
      name: "Domaines Techniques",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      filters: ["Frontend", "Backend", "Fullstack", "Mobile", "Data Science"],
      color: "purple"
    },
    {
      name: "Organisations",
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      filters: ["Udacity", "Coursera", "AWS", "Google", "Microsoft", "OpenClassrooms"],
      color: "cyan"
    },
    {
      name: "Spécialités",
      icon: <Bookmark className="w-5 h-5 text-pink-400" />,
      filters: ["DevOps", "Project Management", "Design", "Cloud"],
      color: "pink"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background interactive effects */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/80 to-background"
        style={{
          background: `radial-gradient(circle ${Math.max(400, window.innerWidth / 3)}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
        }}
      ></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Moving particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/50"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{ 
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
        
        {/* Moving light lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            style={{ 
              width: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`
            }}
            animate={{ 
              opacity: [0, 0.7, 0],
              width: [0, Math.random() * 300 + 200, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 2
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('certifications.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('certifications.description')}
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <motion.div 
            className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl border border-purple-500/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 blur-xl rounded-xl"></div>
            
            <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Filtrer par catégorie
            </h3>
            
            <div className="grid gap-4">
              {filterCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className={`rounded-lg border border-${category.color}-500/20 overflow-hidden`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`px-4 py-3 flex justify-between items-center bg-${category.color}-500/10 hover:bg-${category.color}-500/15 transition-all cursor-pointer`}>
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-${category.color}-400`} />
                  </div>
                  
                  <div className="px-4 py-3 bg-black/20 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {category.filters.map((filter) => (
                      <motion.button
                        key={filter}
                        onClick={() => handleFilterChange(filter.toLowerCase())}
                        className={`px-3 py-2 rounded-md text-sm transition-all ${
                          currentFilter === filter.toLowerCase() 
                            ? `bg-gradient-to-r from-${category.color}-500 to-${category.color === 'purple' ? 'pink' : category.color === 'cyan' ? 'blue' : 'purple'}-500 text-white shadow-lg` 
                            : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {filter}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {currentFilter && (
              <motion.div 
                className="mt-4 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setCurrentFilter(null)}
                  className="px-4 py-2 text-sm bg-white/10 hover:bg-white/15 rounded-lg flex items-center gap-2 transition-all"
                >
                  <span>Réinitialiser le filtre</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-t border-r border-purple-400 rounded-full"
                  ></motion.div>
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Certifications cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredCertifications.length > 0 ? (
            filteredCertifications.map(cert => (
              <motion.div 
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={cert.id}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/50 hover:bg-black/60 transition-all">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{cert.name}</h3>
                      <Award className="h-5 w-5 text-pink-400" />
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm">{cert.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-cyan-400 font-mono">{cert.date}</div>
                      <div className="text-sm text-muted-foreground">{cert.organization}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-1 md:col-span-3 text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground">Aucune certification ne correspond à ce filtre.</p>
              <button
                onClick={() => setCurrentFilter(null)}
                className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg text-sm"
              >
                Afficher toutes les certifications
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
