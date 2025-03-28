
import React from 'react';
import { useSettingsStore } from '../store/useSettingsStore';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ThemeLanguageSwitch: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage } = useSettingsStore();
  const { i18n, t } = useTranslation();
  const { toast } = useToast();
  
  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Explicitly call changeLanguage
    document.documentElement.lang = lang; // Set HTML lang attribute
    
    toast({
      title: t('toast.language_changed'),
      description: lang === 'fr' ? 'Français activé' : 'English activated',
      duration: 2000,
    });
  };
  
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme();
    
    // Apply theme to document element directly
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
    
    toast({
      title: t('toast.theme_changed'),
      description: theme === 'dark' ? t('toast.light_theme') : t('toast.dark_theme'),
      duration: 2000,
    });
  };
  
  // Handle sidebar toggle
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('translate-x-0');
      sidebar.classList.toggle('-translate-x-full');
    }
  };
  
  return (
    <>
      {/* Sidebar menu button */}
      <div className="fixed top-5 left-5 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      </div>
      
      {/* Theme and language switches - Now vertically stacked */}
      <div className="fixed top-20 right-5 z-50 flex flex-col items-center space-y-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center"
          onClick={handleThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-blue-800" />
          )}
        </motion.button>
        
        <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center"
            aria-label="Change language"
          >
            <Languages className="w-5 h-5" />
          </motion.button>
          
          <div className="absolute right-12 top-1 w-24 py-2 glass-morphism rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <button 
              className={`w-full py-1 px-3 text-left hover:bg-white/10 transition-colors ${language === 'fr' ? 'text-primary' : ''}`}
              onClick={() => handleLanguageChange('fr')}
            >
              Français
            </button>
            <button 
              className={`w-full py-1 px-3 text-left hover:bg-white/10 transition-colors ${language === 'en' ? 'text-primary' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              English
            </button>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div id="sidebar" className="fixed top-0 left-0 h-full w-64 glass-morphism backdrop-blur-xl z-40 transform -translate-x-full transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full p-5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {language === 'fr' ? 'Menu' : 'Menu'}
            </h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
          
          <nav className="space-y-4 flex-grow">
            <a href="#hero" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'Accueil' : 'Home'}
            </a>
            <a href="#about" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'À propos' : 'About'}
            </a>
            <a href="#resume" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'CV' : 'Resume'}
            </a>
            <a href="#certifications" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'Certifications' : 'Certifications'}
            </a>
            <a href="#projects" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'Projets' : 'Projects'}
            </a>
            <a href="#experience" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'Expérience' : 'Experience'}
            </a>
            <a href="#services" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'Services' : 'Services'}
            </a>
            <a href="#contact" className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors" onClick={toggleSidebar}>
              {language === 'fr' ? 'Contact' : 'Contact'}
            </a>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="text-sm text-muted-foreground">
              <p>© 2023 Nassim Portfolio</p>
              <p className="mt-1">{language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}</p>
            </div>
            
            <div className="flex space-x-2 mt-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeLanguageSwitch;
