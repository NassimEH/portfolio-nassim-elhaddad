
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Layout, Database, Smartphone, Sparkles, Bot, Cpu, Globe } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  color: string;
}

const Services: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const services: Service[] = [
    {
      id: 1,
      title: "Développement Web",
      description: "Création de sites et applications web modernes, réactifs et performants avec les technologies les plus récentes.",
      icon: <Code className="w-7 h-7" />,
      delay: 0,
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      id: 2,
      title: "Design UI/UX",
      description: "Conception d'interfaces utilisateur intuitives et d'expériences centrées sur l'utilisateur qui captent l'attention.",
      icon: <Layout className="w-7 h-7" />,
      delay: 0.1,
      color: "from-pink-500/20 to-pink-500/5"
    },
    {
      id: 3,
      title: "Development Backend",
      description: "Création d'API robustes, de bases de données optimisées et d'architectures serveur scalables.",
      icon: <Database className="w-7 h-7" />,
      delay: 0.2,
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      id: 4,
      title: "Développement Mobile",
      description: "Applications mobiles natives et multi-plateformes offrant une expérience utilisateur fluide et réactive.",
      icon: <Smartphone className="w-7 h-7" />,
      delay: 0.3,
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      id: 5,
      title: "Intégration IA",
      description: "Intégration de fonctionnalités d'intelligence artificielle et d'apprentissage automatique dans vos applications.",
      icon: <Bot className="w-7 h-7" />,
      delay: 0.4,
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      id: 6,
      title: "Solutions Cloud",
      description: "Déploiement, gestion et optimisation de vos applications dans le cloud pour une scalabilité maximale.",
      icon: <Globe className="w-7 h-7" />,
      delay: 0.5,
      color: "from-green-500/20 to-green-500/5"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.2
      }
    })
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden" ref={sectionRef}>
      {/* Background synthwave */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-purple-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Mes Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Des solutions sur mesure pour tous vos besoins numériques
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              custom={service.delay}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 0 25px rgba(168,85,247,0.3)",
                borderColor: "rgba(168,85,247,0.5)"
              }}
              className={`glass-morphism p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-purple-500/30 h-full flex flex-col bg-gradient-to-br ${service.color}`}
            >
              <div className="p-3 rounded-xl bg-white/5 w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground flex-grow">{service.description}</p>
              
              <motion.button
                className="mt-6 inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                En savoir plus →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Easter Egg caché */}
        <div className="hidden lg:block">
          <motion.div 
            className="absolute bottom-10 right-10 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-help"
            whileHover={{ rotate: [0, 5, -5, 0], transition: { repeat: Infinity, duration: 1 } }}
          >
            <Sparkles className="h-6 w-6 text-purple-400" />
            <div className="absolute w-40 p-2 text-xs rounded glass-morphism -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none">
              Easter egg trouvé!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
