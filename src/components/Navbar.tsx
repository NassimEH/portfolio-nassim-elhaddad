
import React, { useState, useEffect } from 'react';
import { scrollToElement } from '../utils/transitions';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../store/useSettingsStore';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { language } = useSettingsStore();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (id: string) => {
    scrollToElement(id, 80);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-30 px-6 md:px-12 transition-all duration-700 ease-cinematic ${
        isScrolled ? 'py-4 glass-morphism backdrop-blur-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-2xl font-medium tracking-tighter hover:text-primary transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
        >
          NASSIM<span className="text-cyan-400 font-bold">.portfolio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'resume', 'certifications', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 link-hover"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {language === 'fr' ? 
                // French translations
                item === 'about' ? 'À propos' :
                item === 'resume' ? 'CV' :
                item === 'certifications' ? 'Certifications' :
                item === 'projects' ? 'Projets' :
                item === 'experience' ? 'Expérience' :
                item === 'contact' ? 'Contact' : item
                : 
                // English translations
                item
              }
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button - Hidden since we have sidebar now */}
        <div className="md:hidden opacity-0 invisible pointer-events-none">
          <button 
            className="flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-hidden="true"
          >
            <div className="relative w-6 h-5">
              <span className="absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ease-cinematic" />
              <span className="absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ease-cinematic top-2" />
              <span className="absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ease-cinematic top-4" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
