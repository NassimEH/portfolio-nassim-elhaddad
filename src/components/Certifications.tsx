import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Award, Certificate, BookOpen, Briefcase, Code, Database, Server, ArtText, Globe } from 'lucide-react';
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

const Certifications: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
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

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background synthwave */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/80 to-background"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-purple-600/20 to-transparent"></div>

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

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Filtres par catégorie</h3>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="technical" className="border border-purple-500/20 rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-purple-500/10 transition-all neo-blur font-medium">
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-3 text-purple-400" />
                  <span>Compétences Techniques</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-black/20">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Frontend', 'Backend', 'Fullstack', 'Mobile', 'Design', 'DevOps'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleFilterChange(item.toLowerCase())}
                      className={`px-3 py-2 rounded-md text-sm transition-all ${
                        currentFilter === item.toLowerCase() 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                          : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="company" className="border border-cyan-500/20 rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-cyan-500/10 transition-all neo-blur font-medium">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Entreprises & Organisations</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-black/20">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Google', 'Microsoft', 'AWS', 'Udemy', 'Coursera', 'OpenClassrooms'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleFilterChange(item.toLowerCase())}
                      className={`px-3 py-2 rounded-md text-sm transition-all ${
                        currentFilter === item.toLowerCase() 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                          : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="domain" className="border border-pink-500/20 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-pink-500/10 transition-all neo-blur font-medium">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-pink-400" />
                  <span>Domaines d'expertise</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-black/20">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Web', 'Mobile', 'IA', 'Cloud', 'Data', 'Security'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleFilterChange(item.toLowerCase())}
                      className={`px-3 py-2 rounded-md text-sm transition-all ${
                        currentFilter === item.toLowerCase() 
                          ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white' 
                          : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredCertifications.map(cert => (
            <motion.div 
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
