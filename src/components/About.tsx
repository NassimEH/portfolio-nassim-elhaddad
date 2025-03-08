
import React from 'react';
import { skills } from '../utils/projectData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: About Me */}
          <div className="reveal-on-scroll">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
              <p className="text-sm font-mono text-primary">
                À propos
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Passionné par la création d'expériences web exceptionnelles
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Je suis un développeur full stack basé à Lyon, spécialisé dans la création d'applications web modernes et élégantes avec une attention particulière aux détails et à l'expérience utilisateur.
              </p>
              <p>
                Avec plusieurs années d'expérience dans le développement web, j'ai travaillé sur divers projets allant des sites vitrines aux applications complexes avec des architectures sophistiquées.
              </p>
              <p>
                Ma philosophie est centrée sur la création de solutions qui combinent esthétique et fonctionnalité, en utilisant les technologies les plus adaptées à chaque projet.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full glass-morphism"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right column: Skills */}
          <div className="reveal-on-scroll">
            <div className="space-y-8">
              {skills.map((skillCategory) => (
                <div key={skillCategory.category} className="glass-morphism p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/5 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
