
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslation from '../translations/fr.json';
import enTranslation from '../translations/en.json';

// Check browser language or use stored preference
const getDefaultLanguage = (): 'fr' | 'en' => {
  const storedLang = localStorage.getItem('language');
  if (storedLang === 'fr' || storedLang === 'en') {
    return storedLang;
  }
  
  // Check browser language
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'fr' ? 'fr' : 'en';
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
    lng: getDefaultLanguage(),
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    useSuspense: false, // Set this to avoid hydration issues
    react: {
      useSuspense: false
    }
  });

export default i18n;
