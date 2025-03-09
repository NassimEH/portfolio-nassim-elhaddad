
import React from 'react';
import { useSettingsStore } from '../store/useSettingsStore';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sun, Moon, Languages } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ThemeLanguageSwitch: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage } = useSettingsStore();
  const { i18n, t } = useTranslation();
  const { toast } = useToast();
  
  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
    toast({
      title: t('toast.language_changed'),
      description: lang === 'fr' ? 'Français activé' : 'English activated',
      duration: 2000,
    });
  };
  
  const handleThemeToggle = () => {
    toggleTheme();
    toast({
      title: t('toast.theme_changed'),
      description: theme === 'dark' ? t('toast.light_theme') : t('toast.dark_theme'),
      duration: 2000,
    });
  };
  
  return (
    <div className="fixed top-5 right-5 z-50 flex items-center space-x-3">
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
        
        <div className="absolute right-0 mt-2 w-24 py-2 glass-morphism rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
  );
};

export default ThemeLanguageSwitch;
