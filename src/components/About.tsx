
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import { Code, Music, Dumbbell, Network, Share2, LightbulbIcon, PenTool, Cpu } from 'lucide-react';

// Define interest categories
interface Interest {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

const About: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // State to track active interest
  const [activeInterest, setActiveInterest] = useState<number>(0);
  
  // Define interests
  const interests: Interest[] = [
    { 
      icon: <Code className="w-8 h-8 text-purple-400" />, 
      title: "Développement", 
      description: "Passionné par la création d'applications web et mobiles modernes avec les dernières technologies du marché. J'explore constamment de nouvelles méthodes pour optimiser le code et créer des expériences utilisateur fluides et intuitives.",
      technologies: ["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS"] 
    },
    { 
      icon: <Dumbbell className="w-8 h-8 text-pink-400" />, 
      title: "Musculation", 
      description: "La musculation est pour moi une discipline qui forge non seulement le corps mais aussi l'esprit. Cet entraînement régulier m'a appris la persévérance, la discipline et la détermination - des qualités que j'applique également dans mes projets professionnels.",
      technologies: ["Fitness", "Hypertrophie", "Nutrition", "Préparation physique", "Force"] 
    },
    { 
      icon: <Music className="w-8 h-8 text-cyan-400" />, 
      title: "Composition", 
      description: "La musique est une forme d'expression qui m'inspire et me permet d'explorer ma créativité. Je compose des morceaux électroniques et instrumentaux qui nourrissent ma sensibilité artistique et influencent ma vision du design numérique.",
      technologies: ["Ableton Live", "FL Studio", "Sound Design", "Mixage", "Mastering"] 
    },
    { 
      icon: <Network className="w-8 h-8 text-yellow-400" />, 
      title: "Réseaux", 
      description: "Les infrastructures réseau sont la colonne vertébrale du monde numérique. Mon intérêt pour cette technologie m'a permis de mieux comprendre l'environnement technique et d'optimiser les performances des applications que je développe.",
      technologies: ["TCP/IP", "Configuration réseau", "Cybersécurité", "VPN", "Cloud"] 
    },
    { 
      icon: <Share2 className="w-8 h-8 text-green-400" />, 
      title: "Marketing", 
      description: "Le marketing digital est essentiel pour donner de la visibilité aux projets web. J'aime comprendre les stratégies qui permettent de toucher les bonnes audiences et d'optimiser la conversion des utilisateurs.",
      technologies: ["SEO", "Analytics", "Content Marketing", "Social Media", "Email Marketing"] 
    },
    { 
      icon: <LightbulbIcon className="w-8 h-8 text-orange-400" />, 
      title: "Innovation", 
      description: "L'innovation est au cœur de ma démarche professionnelle. Je suis constamment à l'affût des nouvelles technologies et méthodologies qui pourraient révolutionner notre façon de créer et d'interagir avec le numérique.",
      technologies: ["IA", "IoT", "Blockchain", "Réalité augmentée", "DevOps"] 
    },
    { 
      icon: <PenTool className="w-8 h-8 text-blue-400" />, 
      title: "Design", 
      description: "Le design est pour moi la rencontre parfaite entre l'esthétique et la fonctionnalité. Je m'intéresse particulièrement à l'UI/UX et à la manière dont le design peut améliorer l'expérience utilisateur et l'engagement.",
      technologies: ["UI/UX", "Figma", "Design System", "Prototypage", "Animations"] 
    },
    { 
      icon: <Cpu className="w-8 h-8 text-red-400" />, 
      title: "Hardware", 
      description: "Ma curiosité pour le matériel informatique m'aide à mieux comprendre les limites et possibilités techniques des plateformes pour lesquelles je développe. Cela me permet d'optimiser mes applications pour différents types d'appareils.",
      technologies: ["Assemblage PC", "Overclocking", "ARM", "Microcontrôleurs", "GPU"] 
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08 
      } 
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      } 
    }
  };
  
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none"></div>
      
      {/* Effets synthwave - grille et néons */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -bottom-10 left-0 w-full h-40 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
      <div className="absolute -top-10 right-0 w-full h-40 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titre Section - Plus propre et centré */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            À propos de moi
          </motion.h2>
        </motion.div>
        
        {/* Nouvelle mise en page avec interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Intérêts interactifs */}
          <motion.div 
            ref={contentRef}
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-12 space-y-8"
          >
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {interests.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${activeInterest === index ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  onClick={() => setActiveInterest(index)}
                >
                  <div className={`w-16 h-16 rounded-2xl glass-morphism flex items-center justify-center mb-2 ${activeInterest === index ? 'glow shadow-lg border border-white/30' : 'border border-white/10'}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeInterest}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-morphism p-8 rounded-2xl space-y-6 relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl opacity-50 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                      {interests[activeInterest].icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{interests[activeInterest].title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {interests[activeInterest].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {interests[activeInterest].technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="inline-block px-4 py-2 text-sm font-medium rounded-full glass-morphism border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 0 20px rgba(236,72,153,0.4)",
                          transition: { duration: 0.2 }
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Easter egg */}
            <motion.div 
              className="absolute right-10 -bottom-5 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-help"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <div className="text-xs text-cyan-400">Easter egg #1: Hover over all interest icons in sequence!</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
