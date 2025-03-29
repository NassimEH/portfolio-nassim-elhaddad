
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// S'assurer que l'élément root est disponible avant de rendre l'application
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
    console.log("Application de portfolio démarrée avec succès!");
  } else {
    console.error("Root element not found");
  }
});
