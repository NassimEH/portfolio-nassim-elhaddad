
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Filter, Tag, Book, Code, Database, Server, FileText, Globe, CheckCircle2 } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "React Nanodegree",
    organization: "Udacity",
    date: "2023",
    description: "A comprehensive program covering React, Redux, and React Native.",
    category: "frontend",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png"
  },
  {
    id: 2,
    name: "Node.js Developer Certification",
    organization: "Coursera",
    date: "2022",
    description: "An in-depth course on building scalable APIs with Node.js and Express.",
    category: "backend",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png"
  },
  {
    id: 3,
    name: "AWS Certified Developer",
    organization: "Amazon Web Services",
    date: "2021",
    description: "Certification demonstrating proficiency in developing and deploying applications on AWS.",
    category: "devops",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    id: 4,
    name: "Google Cloud Professional Cloud Architect",
    organization: "Google",
    date: "2023",
    description: "Certification demonstrating expertise in designing and managing cloud solutions on Google Cloud Platform.",
    category: "devops",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
  },
  {
    id: 5,
    name: "Certified Scrum Master",
    organization: "Scrum Alliance",
    date: "2022",
    description: "Certification demonstrating knowledge of Scrum principles and practices.",
    category: "project_management",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Scrum_Alliance_Logo.png"
  },
  {
    id: 6,
    name: "Microsoft Certified Azure Solutions Architect Expert",
    organization: "Microsoft",
    date: "2024",
    description: "Certification demonstrating expertise in designing and implementing solutions on Microsoft Azure.",
    category: "devops",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
  },
  {
    id: 7,
    name: "Full-Stack Web Development",
    organization: "OpenClassrooms",
    date: "2023",
    description: "A comprehensive program covering both front-end and back-end web development technologies.",
    category: "fullstack",
    image: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png"
  },
  {
    id: 8,
    name: "Data Science Specialization",
    organization: "Coursera",
    date: "2022",
    description: "A specialization in data science covering topics such as machine learning, data analysis, and data visualization.",
    category: "data_science",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png"
  },
  {
    id: 9,
    name: "UI/UX Design Specialization",
    organization: "Coursera",
    date: "2021",
    description: "A specialization in UI/UX design covering topics such as user research, wireframing, and prototyping.",
    category: "design",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png"
  },
  {
    id: 10,
    name: "Mobile App Development with React Native",
    organization: "Udemy",
    date: "2023",
    description: "A course on building cross-platform mobile applications with React Native.",
    category: "mobile",
    image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
  }
];

const filters = [
  { id: 'all', name: 'All', icon: <Filter className="w-4 h-4" /> },
  { id: 'frontend', name: 'Frontend', icon: <Code className="w-4 h-4" /> },
  { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
  { id: 'fullstack', name: 'Fullstack', icon: <Database className="w-4 h-4" /> },
  { id: 'devops', name: 'DevOps', icon: <Globe className="w-4 h-4" /> },
  { id: 'design', name: 'Design', icon: <FileText className="w-4 h-4" /> },
  { id: 'mobile', name: 'Mobile', icon: <Tag className="w-4 h-4" /> },
  { id: 'data_science', name: 'Data Science', icon: <Book className="w-4 h-4" /> },
  { id: 'project_management', name: 'Management', icon: <CheckCircle2 className="w-4 h-4" /> },
];

const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
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

  const filteredCertifications = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Curved Synthwave Background Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="w-full h-auto" 
          viewBox="0 0 1440 250" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,128L40,138.7C80,149,160,171,240,170.7C320,171,400,149,480,154.7C560,160,640,192,720,218.7C800,245,880,267,960,250.7C1040,235,1120,181,1200,165.3C1280,149,1360,171,1400,181.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" 
            fill="url(#certGradient1)"
            className="opacity-20"
          ></path>
        </svg>
        <defs>
          <linearGradient id="certGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </div>
      
      {/* Background interactive effects */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/80 to-background"
        style={{
          background: `radial-gradient(circle ${Math.max(400, window.innerWidth / 3)}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
        }}
      ></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Curved synthwave elements */}
        <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-700/10 via-pink-600/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-600/10 to-purple-700/10 blur-3xl"></div>
        
        {/* Moving particles */}
        {[...Array(8)].map((_, i) => (
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

        {/* Filters - Horizontal compact design */}
        <motion.div 
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-morphism p-3 rounded-full flex flex-wrap justify-center gap-2 border border-purple-500/20 max-w-3xl shadow-lg">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.icon}
                <span>{filter.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certifications cards with filtered animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter} // This forces re-render when filter changes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredCertifications.length > 0 ? (
              filteredCertifications.map(cert => (
                <motion.div 
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  key={cert.id}
                  layout
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/50 hover:bg-black/60 transition-all h-full">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{cert.name}</h3>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <img 
                            src={cert.image} 
                            alt={cert.organization} 
                            className="w-10 h-10 rounded-full object-contain bg-white/10 p-1 border border-white/20"
                          />
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 text-sm flex-grow">{cert.description}</p>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="text-sm text-cyan-400 font-mono">{cert.date}</div>
                        <div className="text-sm text-muted-foreground">{cert.organization}</div>
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs bg-black/50 border border-pink-500/30 text-pink-300">
                        {cert.category}
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
                  onClick={() => setActiveFilter('all')}
                  className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg text-sm"
                >
                  Afficher toutes les certifications
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Additional curved synthwave elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            className="w-full h-auto" 
            viewBox="0 0 1440 150" 
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#certGradient2)"
              className="opacity-10"
            ></path>
          </svg>
          <defs>
            <linearGradient id="certGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
