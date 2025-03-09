
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../utils/i18n';

type Theme = 'dark' | 'light';
type Language = 'fr' | 'en';

interface SettingsState {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      language: 'fr',
      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document element directly
        if (theme === 'light') {
          document.documentElement.classList.add('light-theme');
        } else {
          document.documentElement.classList.remove('light-theme');
        }
      },
      setLanguage: (language) => {
        i18n.changeLanguage(language);
        set({ language });
        // Set document language attribute
        document.documentElement.lang = language;
      },
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        get().setTheme(newTheme);
      },
    }),
    {
      name: 'settings-storage',
    }
  )
);
