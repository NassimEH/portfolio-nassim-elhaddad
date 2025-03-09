
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Music, FileText, Download, Headphones, Disc, Mic } from 'lucide-react';

const StreetGraphicSection: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, 50]);
  
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying && audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isPlaying]);
  
  return (
    <section id="street-graphic" className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Hip-Hop 90s inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-900 to-background"></div>
      
      {/* Brick wall pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/brick-wall.png')",
          backgroundRepeat: "repeat"
        }}
      ></div>
      
      {/* Graffiti-inspired decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div 
          className="absolute -left-10 top-10 transform -rotate-12 opacity-10"
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "200px",
            color: "#FFF",
            textShadow: "5px 5px 0 #FF3E81, 10px 10px 0 #5EFFD4"
          }}
        >
          90's
        </div>
        <div 
          className="absolute right-0 bottom-0 transform rotate-6 opacity-10"
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "150px",
            color: "#FFF",
            textShadow: "5px 5px 0 #FF3E81, 10px 10px 0 #5EFFD4"
          }}
        >
          HIP
        </div>
        <div 
          className="absolute right-20 bottom-40 transform rotate-6 opacity-10"
          style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "150px",
            color: "#FFF",
            textShadow: "5px 5px 0 #FF3E81, 10px 10px 0 #5EFFD4"
          }}
        >
          HOP
        </div>
      </div>
      
      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-621.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity, y: translateY }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Permanent Marker', cursive",
              WebkitTextStroke: '2px rgba(255,255,255,0.3)',
              color: 'transparent',
              textShadow: '0 0 20px rgba(255,62,129,0.5), 0 0 40px rgba(94,255,212,0.3)'
            }}
          >
            Street Culture & Vibes
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Célébration du mouvement hip-hop, de la culture urbaine, et de l'art de rue
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Street art CV design */}
          <motion.div 
            className="relative"
            style={{ scale, opacity }}
          >
            <div className="relative p-8 rounded-xl overflow-hidden" 
              style={{
                background: "linear-gradient(135deg, rgba(54,9,52,0.9) 0%, rgba(91,18,71,0.9) 100%)",
                border: "3px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 30px rgba(255,62,129,0.3)"
              }}
            >
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-500/30 via-pink-500/30 to-yellow-500/30"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-tl from-cyan-500/20 to-transparent"></div>
              
              <div className="mt-8 relative z-10">
                <h3 className="text-3xl font-bold mb-6"
                  style={{
                    fontFamily: "'Permanent Marker', cursive",
                    background: "linear-gradient(to right, #FF3E81, #5EFFD4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  CV Style Urban
                </h3>
                
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <Mic className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Expertise technique</h4>
                      <p className="text-muted-foreground">Maîtrise des technologies modernes comme un vrai DJ maîtrise ses platines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Headphones className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Innovation permanente</h4>
                      <p className="text-muted-foreground">Toujours à l'affût des dernières tendances comme un beatmaker à la recherche du sample parfait</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Disc className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Passion du code</h4>
                      <p className="text-muted-foreground">Chaque ligne de code est comme un flow sur un beat - précis, rythmé et impactant</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,62,129,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger mon CV
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-pink-500/30 bg-pink-500/10 text-white flex items-center justify-center hover:bg-pink-500/20 transition-all"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(94,255,212,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="w-5 h-5 mr-2 text-cyan-400" />
                    Voir en ligne
                  </motion.a>
                </div>
              </div>
              
              {/* "Cassette tape" style decoration */}
              <div className="absolute top-6 right-6 w-16 h-10 rounded-lg border-2 border-white/20 flex flex-col justify-center items-center">
                <div className="w-10 h-6 rounded-sm bg-black/30 flex justify-center items-center">
                  <div className="w-3 h-3 rounded-full border border-white/40"></div>
                  <div className="w-3 h-3 rounded-full border border-white/40 ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Music player section */}
          <motion.div 
            className="relative"
            style={{ scale, opacity }}
          >
            <div className="relative rounded-xl overflow-hidden p-8" 
              style={{
                background: "linear-gradient(135deg, rgba(40,10,60,0.9) 0%, rgba(90,20,80,0.9) 100%)",
                border: "3px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 30px rgba(94,255,212,0.3)"
              }}
            >
              <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-l from-yellow-500/30 via-pink-500/30 to-cyan-500/30"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500/20 to-transparent"></div>
              
              <div className="mt-8 relative z-10">
                <h3 className="text-3xl font-bold mb-6"
                  style={{
                    fontFamily: "'Permanent Marker', cursive",
                    background: "linear-gradient(to right, #5EFFD4, #FF3E81)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Vibes & Ambiance
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Plongez dans l'ambiance hip-hop des années 90 avec notre playlist exclusive.
                  Retrouvez l'esprit de créativité et de liberté qui anime tout mon travail.
                </p>
                
                {/* Vinyl record player */}
                <div className="relative mb-8 pt-8 px-8 pb-12 bg-black/30 rounded-lg border border-white/10">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full bg-black flex items-center justify-center animate-[spin_4s_linear_infinite] shadow-[0_0_20px_rgba(255,62,129,0.4)]" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
                        <div className="absolute w-full h-full rounded-full border-t-4 border-cyan-500 opacity-30"></div>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      </div>
                      <div className="absolute top-1/2 right-0 transform translate-x-3 -translate-y-1/2 w-3 h-32 bg-gradient-to-b from-gray-800 to-gray-600 rounded">
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-700 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <motion.button
                      onClick={toggleAudio}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center justify-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(94,255,212,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Music className="w-5 h-5 mr-2" />
                      {isPlaying ? 'Pause' : 'Play Sample'}
                    </motion.button>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>90's Hip Hop Vibes</span>
                    <span>03:21</span>
                  </div>
                  <div className="w-full h-1 mt-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
                      initial={{ width: "0%" }}
                      animate={isPlaying ? { width: "100%" } : { width: "0%" }}
                      transition={isPlaying ? 
                        { duration: 201, ease: "linear" } : 
                        { duration: 0.3 }
                      }
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StreetGraphicSection;
