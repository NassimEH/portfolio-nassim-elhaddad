
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "../components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    toast({
      title: "Page introuvable",
      description: "La page que vous recherchez n'existe pas.",
      variant: "destructive",
    });
  }, [location.pathname, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center relative grid-bg overflow-hidden">
      <ParticleBackground particleCount={30} />
      
      <div className="glass-morphism p-12 rounded-xl text-center z-10 max-w-md animate-fade-in">
        <div className="mb-6 text-8xl font-bold text-primary">404</div>
        <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
        <p className="text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 ease-cinematic font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
