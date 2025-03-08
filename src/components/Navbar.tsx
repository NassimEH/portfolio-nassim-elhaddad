
import React, { useState, useEffect } from 'react';
import { scrollToElement } from '../utils/transitions';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-cinematic ${
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
          Nassim<span className="text-primary font-bold">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 link-hover"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ease-cinematic ${
                isMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ease-cinematic top-2 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-full bg-foreground transform transition-all duration-300 ease-cinematic ${
                isMenuOpen ? '-rotate-45 top-2' : 'top-4'
              }`}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-500 ease-cinematic overflow-hidden ${
          isMenuOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-6 py-6">
          {['about', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-lg uppercase tracking-wider hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
