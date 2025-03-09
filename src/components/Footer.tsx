
import React from 'react';
import { motion } from 'framer-motion';
import { scrollToElement } from '../utils/transitions';
import { useTranslation } from 'react-i18next';
import { 
  Mail, MapPin, Github, Linkedin, Twitter, Instagram, 
  ChevronUp, Heart, Coffee, Code, Cpu 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const handleNavClick = (id: string) => {
    scrollToElement(id, 80);
  };
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/NassimEH", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/nassim-elhaddad/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background synthwave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-background/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0 blur-xl"></div>
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-purple-600/20 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center glass-morphism p-6 rounded-xl border border-blue-500/20 group"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                borderColor: "rgba(59,130,246,0.5)"
              }}
            >
              <motion.div 
                className="text-blue-400 mb-3 transition-transform"
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  delay: index * 0.2
                }}
              >
                {link.icon}
              </motion.div>
              <span className="text-lg font-medium group-hover:text-blue-400 transition-colors">{link.name}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="glass-morphism border border-cyan-500/20 rounded-2xl p-8 mb-12 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & About */}
            <div>
              <motion.a 
                href="#hero" 
                className="text-2xl font-medium tracking-tighter hover:text-primary transition-colors duration-300 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('hero');
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
                <span className="text-primary font-bold text-3xl ml-1">.</span>
              </motion.a>
              
              <p className="mt-4 text-muted-foreground">
                À propos de moi
              </p>
              
              <div className="mt-6 flex items-center">
                <div className="flex space-x-2">
                  <Coffee className="h-4 w-4 text-pink-400" />
                  <Code className="h-4 w-4 text-purple-400" />
                  <Cpu className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground">Codé avec passion</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Navigation</h3>
              <ul className="space-y-3 grid grid-cols-2">
                {[
                  { name: 'Accueil', id: 'hero' },
                  { name: 'À propos', id: 'about' },
                  { name: 'Projets', id: 'projects' },
                  { name: 'Témoignages', id: 'testimonials' },
                  { name: 'Expérience', id: 'experience' },
                  { name: 'Services', id: 'services' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-hover flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id);
                      }}
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                  <a 
                    href="mailto:contact@example.com"
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    contact@example.com
                  </a>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>Lyon, France</span>
                </li>
                <motion.li 
                  className="mt-6 glass-morphism rounded-lg p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/5"
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(59,130,246,0.2)" }}
                >
                  <p className="text-sm">
                    Disponible pour de nouveaux projets freelance à partir de {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                  </p>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          <p className="text-muted-foreground text-sm flex items-center">
            &copy; {currentYear} Portfolio. Tous droits réservés.
            <motion.span 
              className="ml-2 inline-flex items-center text-blue-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="h-3 w-3 mr-1" />
            </motion.span>
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-xs text-muted-foreground mr-4">Easter egg #3: Appuyez sur le logo 5 fois rapidement</span>
            
            <motion.button 
              onClick={() => handleNavClick('hero')}
              className="flex items-center px-4 py-2 text-sm glass-morphism rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -3, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
            >
              <span>Haut</span>
              <ChevronUp className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
