import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, ExternalLink, Award, Calendar, MapPin } from 'lucide-react';
import { useSettingsStore } from '../store/useSettingsStore';
const Experience: React.FC = () => {
  const {
    t
  } = useTranslation();
  const {
    language
  } = useSettingsStore();

  // Define experiences based on CV with French translations
  const experiences = [{
    id: 1,
    title: {
      en: "Apprentice - Cybersecurity Engineer",
      fr: "Apprenti - Ingénieur en Cybersécurité"
    },
    company: "Siemens",
    location: {
      en: "Paris, France",
      fr: "Paris, France"
    },
    startDate: {
      en: "September 2024",
      fr: "Septembre 2024"
    },
    endDate: {
      en: "",
      fr: ""
    },
    logo: "https://www.google.com/imgres?q=siemens&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063521363084&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FSiemensFranceCarriere%2F&docid=B6upVVnmauSc_M&tbnid=ObFHpZnl6XgPiM&vet=12ahUKEwjL6sWOxq-MAxXHUqQEHU3PL1kQM3oECFIQAA..i&w=1024&h=1023&hcb=2&ved=2ahUKEwjL6sWOxq-MAxXHUqQEHU3PL1kQM3oECFIQAA",
    description: {
      en: ["Supporting the industrialization of cybersecurity in Siemens Mobility products.", "Formalizing project management processes within multidisciplinary projects.", "Promoting the tool used among various users and ensuring proper configuration maintenance.", "Setting up and utilizing infrastructures for cybersecurity audits of systems.", "Contributing to the testing of complex equipment and systems."],
      fr: ["Soutien à l'industrialisation de la cybersécurité dans les produits Siemens Mobility.", "Formalisation des processus de gestion de projet au sein de projets multidisciplinaires.", "Promotion de l'outil utilisé auprès de divers utilisateurs et maintenance de la configuration.", "Mise en place et utilisation d'infrastructures pour les audits de cybersécurité des systèmes.", "Contribution aux tests d'équipements et de systèmes complexes."]
    },
    technologies: {
      en: ["Cybersecurity", "Project Management", "Audit", "Systems Testing"],
      fr: ["Cybersécurité", "Gestion de Projet", "Audit", "Tests de Systèmes"]
    }
  }, {
    id: 2,
    title: {
      en: "Intern - Developer",
      fr: "Stagiaire - Développeur"
    },
    company: "Netopsia",
    location: {
      en: "Paris, France (Hybrid)",
      fr: "Paris, France (Hybride)"
    },
    startDate: {
      en: "April 2024",
      fr: "Avril 2024"
    },
    endDate: {
      en: "June 2024",
      fr: "Juin 2024"
    },
    logo: "/lovable-uploads/0752b7ad-cc95-4761-bb39-56d6ea8253e0.png",
    description: {
      en: ["Migrating legacy systems to newer architectures, ensuring performance optimization.", "Developing and debugging custom scripts for network automation.", "Providing documentation for future maintenance and scalability of systems."],
      fr: ["Migration de systèmes existants vers des architectures plus récentes, garantissant l'optimisation des performances.", "Développement et débogage de scripts personnalisés pour l'automatisation du réseau.", "Fourniture de documentation pour la maintenance future et l'évolutivité des systèmes."]
    },
    technologies: {
      en: ["Network Automation", "Legacy Migration", "Documentation", "Performance Optimization"],
      fr: ["Automatisation Réseau", "Migration de Systèmes", "Documentation", "Optimisation de Performance"]
    }
  }, {
    id: 3,
    title: {
      en: "Freelance - Web developer and SEO editor",
      fr: "Freelance - Développeur Web et rédacteur SEO"
    },
    company: "Chauff'Heure VIP",
    location: {
      en: "Paris, France",
      fr: "Paris, France"
    },
    startDate: {
      en: "October 2022",
      fr: "Octobre 2022"
    },
    endDate: {
      en: "November 2022",
      fr: "Novembre 2022"
    },
    logo: "/lovable-uploads/2da10e39-695e-4977-bf8f-a29fb711aa0b.png",
    description: {
      en: ["Fixed minor bugs on the company's website.", "Wrote articles using the WordPress CMS, optimized SEO using the Yoast plugin.", "Managed web performance using audit tools."],
      fr: ["Correction de bugs mineurs sur le site web de l'entreprise.", "Rédaction d'articles à l'aide du CMS WordPress, optimisation du référencement à l'aide du plugin Yoast.", "Gestion des performances web à l'aide d'outils d'audit."]
    },
    technologies: {
      en: ["WordPress", "SEO", "Web Performance", "Content Writing"],
      fr: ["WordPress", "SEO", "Performance Web", "Rédaction de Contenu"]
    }
  }];

  // Define education based on CV with French translations
  const education = [{
    id: 1,
    degree: {
      en: "Engineer's degree in Computer science and Networks",
      fr: "Diplôme d'ingénieur en Informatique et Réseaux"
    },
    institution: "Telecom SudParis",
    location: {
      en: "Palaiseau, France",
      fr: "Palaiseau, France"
    },
    startDate: {
      en: "2024",
      fr: "2024"
    },
    endDate: {
      en: "2027",
      fr: "2027"
    },
    logo: "/lovable-uploads/48042697-212b-4742-b92a-f939a1c11a92.png",
    description: {
      en: "Engineering studies with a focus on Computer science and Networks at Telecom SudParis, part of Institut Polytechnique de Paris.",
      fr: "Études d'ingénieur avec une spécialisation en Informatique et Réseaux à Telecom SudParis, membre de l'Institut Polytechnique de Paris."
    }
  }, {
    id: 2,
    degree: {
      en: "Bachelor's degree in Computer Science (BUT)",
      fr: "BUT Informatique"
    },
    institution: "Université Paris-Est Créteil (Paris 12)",
    location: {
      en: "Créteil, France",
      fr: "Créteil, France"
    },
    startDate: {
      en: "2022",
      fr: "2022"
    },
    endDate: {
      en: "2024",
      fr: "2024"
    },
    logo: "/lovable-uploads/faf6c4ab-5656-42b7-ba95-3c6edbe70eb0.png",
    description: {
      en: "Bachelor's University of Technology degree in Computer Science.",
      fr: "BUT (Bachelor Universitaire de Technologie) en Informatique."
    }
  }, {
    id: 3,
    degree: {
      en: "High School Diploma",
      fr: "Baccalauréat"
    },
    institution: "Lycée La Mare Carrée",
    location: {
      en: "Moissy-Cramayel, France",
      fr: "Moissy-Cramayel, France"
    },
    startDate: {
      en: "2019",
      fr: "2019"
    },
    endDate: {
      en: "2022",
      fr: "2022"
    },
    logo: "/lovable-uploads/ad741a26-ddd7-4412-80a6-096b56f7bb86.png",
    description: {
      en: "High School diploma with focuses on mathematics and computer science.",
      fr: "Baccalauréat avec spécialités mathématiques et informatique."
    }
  }];
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
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
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects for smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-blue-950/5 to-background/95"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="text-center mb-16 reveal-on-scroll" variants={titleVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.3
      }}>
          <motion.div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm" variants={titleVariants}>
            <p className="text-sm font-mono text-primary">
              {t('experience.title')}
            </p>
          </motion.div>
          
          <motion.h2 variants={titleVariants} className="text-3xl md:text-4xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent lg:text-5xl">
            {t('experience.subtitle')}
          </motion.h2>
          
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={titleVariants}>
            {t('experience.description')}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <motion.div className="space-y-8" variants={titleVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            <motion.h3 className="text-2xl font-semibold mb-8 flex items-center" variants={titleVariants}>
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              {t('experience.work')}
            </motion.h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-blue-400/20 before:to-transparent">
              {experiences.map((exp, index) => <motion.div key={exp.id} className="relative pl-10" variants={itemVariants}>
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />
                  
                  <motion.div className="glass-morphism p-6 rounded-xl border-l-4 border-blue-500/50" whileHover={{
                x: 5,
                boxShadow: "0px 5px 15px rgba(59,130,246,0.2)",
                transition: {
                  duration: 0.3
                }
              }}>
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div className="flex items-center">
                        {exp.logo && <div className="w-12 h-12 aspect-square rounded-lg glass-morphism flex items-center justify-center mr-3 overflow-hidden bg-white/5">
                            <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                          </div>}
                        <h4 className="text-xl font-medium">{language === 'fr' ? exp.title.fr : exp.title.en}</h4>
                      </div>
                      <div className="text-sm font-mono text-blue-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {language === 'fr' ? exp.startDate.fr : exp.startDate.en} - {(language === 'fr' ? exp.endDate.fr : exp.endDate.en) || t('experience.present')}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <a href={`https://www.google.com/search?q=${exp.company}`} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1 w-fit">
                        {exp.company}
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                        {language === 'fr' ? exp.location.fr : exp.location.en}
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {(language === 'fr' ? exp.description.fr : exp.description.en).map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {(language === 'fr' ? exp.technologies.fr : exp.technologies.en).map(tech => <span key={tech} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300">
                          {tech}
                        </span>)}
                    </div>
                  </motion.div>
                </motion.div>)}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div className="space-y-8" variants={titleVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            <motion.h3 className="text-2xl font-semibold mb-8 flex items-center" variants={titleVariants}>
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              {t('experience.education')}
            </motion.h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-purple-400/20 before:to-transparent">
              {education.map(edu => <motion.div key={edu.id} className="relative pl-10" variants={itemVariants}>
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />
                  
                  <motion.div className="glass-morphism p-6 rounded-xl border-l-4 border-purple-500/50" whileHover={{
                x: 5,
                boxShadow: "0px 5px 15px rgba(168,85,247,0.2)",
                transition: {
                  duration: 0.3
                }
              }}>
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div className="flex items-center">
                        {edu.logo && <div className="w-12 h-12 aspect-square rounded-lg glass-morphism flex items-center justify-center mr-3 overflow-hidden bg-white/10">
                            <img src={edu.logo} alt={edu.institution} className="w-10 h-10 object-contain" />
                          </div>}
                        <h4 className="text-xl font-medium">{language === 'fr' ? edu.degree.fr : edu.degree.en}</h4>
                      </div>
                      <div className="text-sm font-mono text-purple-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {language === 'fr' ? edu.startDate.fr : edu.startDate.en} - {language === 'fr' ? edu.endDate.fr : edu.endDate.en}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <a href={`https://www.google.com/search?q=${edu.institution}`} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-1 w-fit">
                        {edu.institution}
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-pink-400" />
                        {language === 'fr' ? edu.location.fr : edu.location.en}
                      </div>
                    </div>
                    
                    {edu.description && <p className="text-muted-foreground">{language === 'fr' ? edu.description.fr : edu.description.en}</p>}
                  </motion.div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
        
        {/* LinkedIn Link */}
        <div className="mt-16 text-center">
          <motion.a href="https://www.linkedin.com/in/nassim-elhaddad/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-blue-500/30 backdrop-blur-sm text-blue-400 hover:bg-white/10 transition-all duration-300" whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 15px rgba(59,130,246,0.2)"
        }} whileTap={{
          scale: 0.98
        }}>
            <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="font-medium">{t('experience.view_linkedin')}</span>
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </section>;
};
export default Experience;
