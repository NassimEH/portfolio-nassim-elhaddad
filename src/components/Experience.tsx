
import React from 'react';
import { experiences, education } from '../utils/projectData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
            <p className="text-sm font-mono text-primary">
              Mon parcours
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Expérience professionnelle
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et ma formation académique dans le domaine du développement web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <div className="space-y-8 reveal-on-scroll">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Expérience professionnelle
            </h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-white/10 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />
                  
                  <div className="glass-morphism p-6 rounded-xl">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-medium">{exp.title}</h4>
                      <div className="text-sm font-mono text-muted-foreground">
                        {exp.startDate} - {exp.endDate || 'Présent'}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-lg font-medium">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 rounded-full bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="space-y-8 reveal-on-scroll">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Formation
            </h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-white/10 before:to-transparent">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />
                  
                  <div className="glass-morphism p-6 rounded-xl">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-medium">{edu.degree}</h4>
                      <div className="text-sm font-mono text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-lg font-medium">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.location}</div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-muted-foreground">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* LinkedIn Link */}
            <div className="mt-12 text-center">
              <a 
                href="https://www.linkedin.com/in/nassim-elhaddad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg glass-morphism hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Voir mon profil LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
