
import { create } from 'zustand';

type Theme = 'dark' | 'light';
type Language = 'fr' | 'en';

interface SettingsState {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  theme: 'dark',
  language: 'fr',
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));
