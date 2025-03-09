
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
    (set) => ({
      theme: 'dark',
      language: 'fr',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => {
        i18n.changeLanguage(language);
        set({ language });
      },
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'dark' ? 'light' : 'dark' 
      })),
    }),
    {
      name: 'settings-storage',
    }
  )
);
