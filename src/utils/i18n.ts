
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslation from '../translations/fr.json';
import enTranslation from '../translations/en.json';

// Détection de la langue préférée du navigateur
const detectUserLanguage = () => {
  const storedLang = localStorage.getItem('app-language');
  if (storedLang && ['fr', 'en'].includes(storedLang)) {
    return storedLang;
  }
  
  // Préférence navigateur comme fallback
  const browserLang = navigator.language.split('-')[0];
  return ['fr', 'en'].includes(browserLang) ? browserLang : 'fr';
};

const resources = {
  fr: {
    translation: frTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectUserLanguage(),
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // This helps prevent issues during language switching
    }
  });

export default i18n;
