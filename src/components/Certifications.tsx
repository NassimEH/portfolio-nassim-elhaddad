
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Globe, Code, Server, BookOpen, Database, Bookmark, Briefcase, FileText } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "React Nanodegree",
    organization: "Udacity",
    date: "2023",
    description: "A comprehensive program covering React, Redux, and React Native.",
    category: "frontend",
    tags: ["React", "Redux", "React Native", "JavaScript", "TypeScript"]
  },
  {
    id: 2,
    name: "Node.js Developer Certification",
    organization: "Coursera",
    date: "2022",
    description: "An in-depth course on building scalable APIs with Node.js and Express.",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "GraphQL"]
  },
  {
    id: 3,
    name: "AWS Certified Developer",
    organization: "Amazon Web Services",
    date: "2021",
    description: "Certification demonstrating proficiency in developing and deploying applications on AWS.",
    category: "devops",
    tags: ["AWS", "Cloud", "Lambda", "EC2", "S3"]
  },
  {
    id: 4,
    name: "Google Cloud Professional Cloud Architect",
    organization: "Google",
    date: "2023",
    description: "Certification demonstrating expertise in designing and managing cloud solutions on Google Cloud Platform.",
    category: "devops",
    tags: ["GCP", "Cloud", "Kubernetes", "Containers", "Microservices"]
  },
  {
    id: 5,
    name: "Certified Scrum Master",
    organization: "Scrum Alliance",
    date: "2022",
    description: "Certification demonstrating knowledge of Scrum principles and practices.",
    category: "project_management",
    tags: ["Agile", "Scrum", "Kanban", "Team Management", "Sprint Planning"]
  },
  {
    id: 6,
    name: "Microsoft Certified Azure Solutions Architect Expert",
    organization: "Microsoft",
    date: "2024",
    description: "Certification demonstrating expertise in designing and implementing solutions on Microsoft Azure.",
    category: "devops",
    tags: ["Azure", "Cloud", "Identity", "Security", "Storage"]
  },
  {
    id: 7,
    name: "Full-Stack Web Development",
    organization: "OpenClassrooms",
    date: "2023",
    description: "A comprehensive program covering both front-end and back-end web development technologies.",
    category: "fullstack",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Database"]
  },
  {
    id: 8,
    name: "Data Science Specialization",
    organization: "Coursera",
    date: "2022",
    description: "A specialization in data science covering topics such as machine learning, data analysis, and data visualization.",
    category: "data_science",
    tags: ["Python", "R", "Machine Learning", "Statistics", "Data Visualization"]
  },
  {
    id: 9,
    name: "UI/UX Design Specialization",
    organization: "Coursera",
    date: "2021",
    description: "A specialization in UI/UX design covering topics such as user research, wireframing, and prototyping.",
    category: "design",
    tags: ["Figma", "Adobe XD", "User Testing", "Prototyping", "Design Thinking"]
  },
  {
    id: 10,
    name: "Mobile App Development with React Native",
    organization: "Udemy",
    date: "2023",
    description: "A course on building cross-platform mobile applications with React Native.",
    category: "mobile",
    tags: ["React Native", "iOS", "Android", "Mobile", "Cross-platform"]
  }
];

// All available filters
const filterCategories = [
  { value: "all", label: "Tous", icon: <Globe className="w-4 h-4" /> },
  { value: "frontend", label: "Frontend", icon: <Code className="w-4 h-4" /> },
  { value: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
  { value: "fullstack", label: "Fullstack", icon: <BookOpen className="w-4 h-4" /> },
  { value: "devops", label: "DevOps", icon: <Database className="w-4 h-4" /> },
  { value: "design", label: "Design", icon: <Bookmark className="w-4 h-4" /> },
  { value: "project_management", label: "Gestion de projet", icon: <Briefcase className="w-4 h-4" /> },
  { value: "mobile", label: "Mobile", icon: <FileText className="w-4 h-4" /> },
  { value: "data_science", label: "Data Science", icon: <Database className="w-4 h-4" /> },
];

const Certifications: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const { t } = useTranslation();
  
  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const filteredCertifications = currentFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === currentFilter);

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
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Moving particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Decorative neon lines */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
            style={{
              width: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              width: [0, Math.random() * 300 + 200, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('certifications.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('certifications.description')}
          </motion.p>
        </div>

        {/* Horizontal Compact Filters */}
        <motion.div 
          className="mb-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => handleFilterChange(category.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all ${
                currentFilter === category.value 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' 
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="sync">
            {filteredCertifications.length > 0 ? (
              filteredCertifications.map(cert => (
                <motion.div 
                  key={cert.id}
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  layout
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/30 hover:bg-black/40 transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                        <Award className="h-5 w-5 text-pink-400" />
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm">{cert.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {cert.tags.slice(0, 3).map((tag, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="bg-white/5 text-xs border-purple-500/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {cert.tags.length > 3 && (
                          <Badge 
                            variant="outline" 
                            className="bg-white/5 text-xs border-cyan-500/20"
                          >
                            +{cert.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        <div className="text-cyan-400 font-mono">{cert.date}</div>
                        <div className="text-muted-foreground">{cert.organization}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground">Aucune certification ne correspond à ce filtre.</p>
                <button
                  onClick={() => setCurrentFilter('all')}
                  className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg text-sm"
                >
                  Afficher toutes les certifications
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Neon effect decoration at the bottom */}
        <motion.div 
          className="mt-16 h-px w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
