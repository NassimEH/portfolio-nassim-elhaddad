
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRevealOnScroll, useParallax } from '../utils/transitions';
import { useToast } from '@/hooks/use-toast';

// ThreeJS needs to be installed
<lov-add-dependency>three@latest</lov-add-dependency>

const Index = () => {
  useRevealOnScroll();
  useParallax();
  
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast
    toast({
      title: "Bienvenue sur mon portfolio !",
      description: "Explorez mes projets et découvrez mes compétences.",
    });
  }, [toast]);

  return (
    <div className="min-h-screen relative grid-bg">
      {/* Background Effects */}
      <ParticleBackground particleCount={50} />
      
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
