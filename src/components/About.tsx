
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../utils/projectData';
import { useTranslation } from 'react-i18next';
import { Code, Music, Dumbbell, Network, Share2, LightbulbIcon, PenTool, Gamepad, FileText, Download, Eye, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define interest categories
interface Interest {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  color: string;
  bgGradient: string;
}

const About: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // State for CV section
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  
  // State to track active interest
  const [activeInterest, setActiveInterest] = useState<number>(0);
  
  // Define interests
  const interests: Interest[] = [
    { 
      icon: <Code className="w-8 h-8 text-purple-400" />, 
      title: "Développement", 
      description: "J'aime programmer à mes heures perdues et tous mes projets de développement sont disponibles sur mon GitHub. Je prends plaisir à explorer de nouvelles technologies et à créer des solutions innovantes.",
      technologies: ["Java", "Python", "C", "React", "TypeScript"],
      color: "purple",
      bgGradient: "from-purple-500/20 to-purple-500/5"
    },
    { 
      icon: <Dumbbell className="w-8 h-8 text-pink-400" />, 
      title: "Musculation", 
      description: "La musculation est pour moi une discipline qui forge non seulement le corps mais aussi l'esprit. Je compte créer des ebooks sur la musculation traitant différents thèmes pour partager mes connaissances et expériences dans ce domaine.",
      technologies: ["Fitness", "Hypertrophie", "Nutrition", "Préparation physique", "Force"],
      color: "pink",
      bgGradient: "from-pink-500/20 to-pink-500/5"
    },
    { 
      icon: <Music className="w-8 h-8 text-cyan-400" />, 
      title: "Composition", 
      description: "La musique est une forme d'expression qui m'inspire et me permet d'explorer ma créativité. Je compose des morceaux électroniques et instrumentaux qui nourrissent ma sensibilité artistique et influencent ma vision du design numérique.",
      technologies: ["Ableton Live", "FL Studio", "Sound Design", "Mixage", "Mastering"],
      color: "cyan",
      bgGradient: "from-cyan-500/20 to-cyan-500/5"
    },
    { 
      icon: <Network className="w-8 h-8 text-yellow-400" />, 
      title: "Réseaux", 
      description: "Les infrastructures réseau sont la colonne vertébrale du monde numérique. Mon intérêt pour cette technologie m'a permis de mieux comprendre l'environnement technique et d'optimiser les performances des applications que je développe.",
      technologies: ["TCP/IP", "Configuration réseau", "Cybersécurité", "VPN", "Cloud"],
      color: "yellow",
      bgGradient: "from-yellow-500/20 to-yellow-500/5"
    },
    { 
      icon: <Share2 className="w-8 h-8 text-green-400" />, 
      title: "Marketing", 
      description: "Le marketing digital est essentiel pour donner de la visibilité aux projets web. J'ai acquis plusieurs expériences dans ce domaine grâce à des stages et des missions freelances, ce qui me permet de comprendre les stratégies pour toucher les bonnes audiences.",
      technologies: ["SEO", "Analytics", "Content Marketing", "Social Media", "Email Marketing"],
      color: "green",
      bgGradient: "from-green-500/20 to-green-500/5"
    },
    { 
      icon: <LightbulbIcon className="w-8 h-8 text-orange-400" />, 
      title: "Innovation", 
      description: "L'innovation est au cœur de ma démarche professionnelle. Je suis constamment à l'affût des nouvelles technologies et méthodologies qui pourraient révolutionner notre façon de créer et d'interagir avec le numérique.",
      technologies: ["IA", "IoT", "Blockchain", "Réalité augmentée", "DevOps"],
      color: "orange",
      bgGradient: "from-orange-500/20 to-orange-500/5"
    },
    { 
      icon: <PenTool className="w-8 h-8 text-blue-400" />, 
      title: "Design", 
      description: "Le design est pour moi la rencontre parfaite entre l'esthétique et la fonctionnalité. Je m'intéresse particulièrement à l'UI/UX et à la manière dont le design peut améliorer l'expérience utilisateur et l'engagement.",
      technologies: ["UI/UX", "Figma", "Design System", "Prototypage", "Animations"],
      color: "blue",
      bgGradient: "from-blue-500/20 to-blue-500/5"
    },
    { 
      icon: <Gamepad className="w-8 h-8 text-red-400" />, 
      title: "Jeux Vidéos", 
      description: "Je suis passionné par les jeux vidéo, tant pour y jouer que pour en créer. Cette passion m'a permis de développer une compréhension approfondie des mécaniques de jeu et de l'interaction utilisateur, que j'applique dans mes projets.",
      technologies: ["Game Design", "Unity", "C#", "Développement de jeux", "3D"],
      color: "red",
      bgGradient: "from-red-500/20 to-red-500/5"
    },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      setHasDownloaded(true);
      
      // Reset the downloaded state after 3 seconds
      setTimeout(() => {
        setHasDownloaded(false);
      }, 3000);
      
      toast({
        title: "CV téléchargé",
        description: "Merci de votre intérêt pour mon parcours !",
      });
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/lovable-uploads/ac0b53ac-bd3c-4dc8-a6a3-2d0e1a1ed9ab.png'; // Use the original CV
      link.download = 'cv-nassim-elhaddad.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };
  
  const viewCV = () => {
    window.open('/lovable-uploads/ac0b53ac-bd3c-4dc8-a6a3-2d0e1a1ed9ab.png', '_blank');
    
    toast({
      title: "Aperçu du CV",
      description: "Ouverture du CV dans un nouvel onglet",
    });
  };

  // Get color class based on active interest
  const getColorClass = () => {
    const interest = interests[activeInterest];
    switch (interest.color) {
      case 'purple': return 'text-purple-400';
      case 'pink': return 'text-pink-400';
      case 'cyan': return 'text-cyan-400';
      case 'yellow': return 'text-yellow-400';
      case 'green': return 'text-green-400';
      case 'orange': return 'text-orange-400';
      case 'blue': return 'text-blue-400';
      case 'red': return 'text-red-400';
      default: return 'text-purple-400';
    }
  };

  // Get border color class based on active interest
  const getBorderColorClass = () => {
    const interest = interests[activeInterest];
    switch (interest.color) {
      case 'purple': return 'border-purple-500/30';
      case 'pink': return 'border-pink-500/30';
      case 'cyan': return 'border-cyan-500/30';
      case 'yellow': return 'border-yellow-500/30';
      case 'green': return 'border-green-500/30';
      case 'orange': return 'border-orange-500/30';
      case 'blue': return 'border-blue-500/30';
      case 'red': return 'border-red-500/30';
      default: return 'border-purple-500/30';
    }
  };

  // Get shadow color class based on active interest
  const getShadowClass = () => {
    const interest = interests[activeInterest];
    switch (interest.color) {
      case 'purple': return 'shadow-[0_0_15px_rgba(168,85,247,0.2)]';
      case 'pink': return 'shadow-[0_0_15px_rgba(236,72,153,0.2)]';
      case 'cyan': return 'shadow-[0_0_15px_rgba(34,211,238,0.2)]';
      case 'yellow': return 'shadow-[0_0_15px_rgba(234,179,8,0.2)]';
      case 'green': return 'shadow-[0_0_15px_rgba(34,197,94,0.2)]';
      case 'orange': return 'shadow-[0_0_15px_rgba(249,115,22,0.2)]';
      case 'blue': return 'shadow-[0_0_15px_rgba(59,130,246,0.2)]';
      case 'red': return 'shadow-[0_0_15px_rgba(239,68,68,0.2)]';
      default: return 'shadow-[0_0_15px_rgba(168,85,247,0.2)]';
    }
  };

  // Get background gradient
  const getBgGradient = () => {
    return interests[activeInterest].bgGradient;
  };

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
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none transition-colors duration-1000"></div>
      
      {/* Effets synthwave - grille et néons */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -bottom-10 left-0 w-full h-40 bg-gradient-to-t from-purple-500/20 to-transparent transition-opacity duration-1000"></div>
      <div className="absolute -top-10 right-0 w-full h-40 bg-gradient-to-b from-cyan-500/20 to-transparent transition-opacity duration-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titre Section */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            À propos de moi
          </motion.h2>
        </motion.div>
        
        {/* Interactive Interests Grid */}
        <motion.div 
          ref={contentRef}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8"
        >
          {/* Interest categories */}
          <div className="space-y-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {interests.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${activeInterest === index ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  onClick={() => setActiveInterest(index)}
                >
                  <div className={`w-14 h-14 rounded-2xl glass-morphism flex items-center justify-center mb-2 ${activeInterest === index ? 'glow shadow-lg border border-white/30' : 'border border-white/10'}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-center">{item.title}</span>
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
                className={`glass-morphism p-8 rounded-2xl space-y-6 relative overflow-hidden bg-gradient-to-br ${getBgGradient()}`}
              >
                {/* Background glow effect */}
                <div className={`absolute -inset-1 ${getBgGradient()} blur-3xl opacity-50 rounded-3xl transition-all duration-500`}></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 ${getColorClass()}`}>
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
                        className={`inline-block px-4 py-2 text-sm font-medium rounded-full glass-morphism border ${getBorderColorClass()} ${getShadowClass()}`}
                        whileHover={{ 
                          scale: 1.05, 
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
          </div>
          
          {/* CV Section - Ajouté à la fin de la section À propos */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-morphism p-6 rounded-2xl relative overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              {/* Background gradient effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5">
                  <motion.div
                    className="w-full aspect-[3/4] glass-morphism rounded-lg relative overflow-hidden border border-white/10 shadow-xl flex items-center justify-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* CV Image */}
                    <img 
                      src="/lovable-uploads/ac0b53ac-bd3c-4dc8-a6a3-2d0e1a1ed9ab.png"
                      alt="CV Nassim El Haddad"
                      className="w-full h-full object-contain p-2"
                    />
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-colors duration-300"></div>
                  </motion.div>
                  
                  {/* Small floating elements */}
                  <motion.div 
                    className="absolute -top-3 -left-3 w-8 h-8 glass-morphism rounded-lg flex items-center justify-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-3 -right-3 w-8 h-8 glass-morphism rounded-lg flex items-center justify-center"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{ scale: 1.2, rotate: -45 }}
                  >
                    <Download className="w-4 h-4 text-pink-400" />
                  </motion.div>
                </div>
                
                <div className="md:col-span-7">
                  <motion.h3
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Mon CV
                  </motion.h3>
                  
                  <motion.p
                    className="text-lg text-muted-foreground mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Téléchargez mon CV pour découvrir mon parcours professionnel complet, mes compétences et mes formations. Retrouvez-y également mes coordonnées pour me contacter directement.
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      className="flex items-center gap-2 px-6 py-3 rounded-lg glass-morphism hover:bg-cyan-500/10 transition-all duration-300 group"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34,211,238,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      onClick={viewCV}
                    >
                      <Eye className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      <span>Consulter mon CV</span>
                    </motion.button>
                    
                    <motion.button
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg ${hasDownloaded ? 'bg-green-500/20 text-green-300' : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'} transition-all duration-300`}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34,211,238,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      onClick={handleDownload}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Téléchargement...</span>
                        </>
                      ) : hasDownloaded ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Téléchargé</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          <span>Télécharger mon CV</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Easter egg */}
          <motion.div 
            className="absolute right-10 -bottom-5 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-help"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <div className="text-xs text-cyan-400">Easter egg #1: Hover over all interest icons in sequence!</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
