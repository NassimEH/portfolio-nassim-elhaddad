
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Download, Play, Pause, Sparkles, Zap, Lightbulb } from 'lucide-react';

const CreativeShowcase: React.FC = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  useEffect(() => {
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && videoRef.current && !isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else if (!entry.isIntersecting && videoRef.current && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    
    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.5
    });
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);
  
  return (
    <section id="creative-showcase" className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Enhanced synthwave background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/40 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572053675669-0731a6b4b669?q=80&w=1000')] bg-fixed bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Enhanced synthwave sun */}
        <div className="absolute bottom-0 w-full">
          <div className="w-full h-40 bg-gradient-to-t from-purple-600/0 via-pink-500/10 to-transparent"></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-60 h-20 rounded-full bg-gradient-to-t from-pink-500/20 to-yellow-500/5 blur-2xl"></div>
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-x-0 bottom-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bottom-0 w-full h-px"
              style={{ 
                background: `linear-gradient(90deg, transparent 0%, rgba(236, 72, 153, ${0.05 + i * 0.02}) 50%, transparent 100%)`,
                bottom: `${i * 8}px`
              }}
            ></div>
          ))}
          
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bottom-0 w-px h-40"
              style={{ 
                background: `linear-gradient(0deg, rgba(236, 72, 153, ${0.1 + i * 0.01}) 0%, transparent 100%)`,
                left: `${(100 / 15) * i}%`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.1)',
              textShadow: '0 0 20px rgba(236,72,153,0.5), 0 0 40px rgba(124,58,237,0.3)'
            }}
          >
            Créations & Réalisations
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Découvrez mes projets créatifs et explorez mon univers digital à travers ces réalisations
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Showcase */}
          <motion.div 
            className="relative"
            style={{ opacity, scale, rotateY }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover"
                loop
                muted
                playsInline
              >
                <source src="https://cdn.pixabay.com/vimeo/414848094/26985-76833.mp4?width=1280&hash=b1f34f4a3e662d8fa9a6ef9b3bfdd1c5143380af" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Processus Créatif</h3>
                  <p className="text-sm text-white/80">Aperçu de mon workflow et de mes inspirations en développement web</p>
                </div>
                
                <motion.button
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center"
                  onClick={togglePlayPause}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6 text-white" />
                  ) : (
                    <Play className="h-6 w-6 text-white ml-1" />
                  )}
                </motion.button>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/40 to-transparent blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500/40 to-transparent blur-2xl"></div>
            
            {/* Pulsing indicator */}
            <motion.div 
              className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500"
              animate={{ 
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            ></motion.div>
          </motion.div>
          
          {/* Resume download with enhanced synthwave style */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="neo-blur p-8 rounded-2xl relative overflow-hidden border border-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-yellow-500/10"></div>
              
              {/* Enhanced synthwave decorative elements */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-bl from-purple-500/30 to-transparent blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-pink-500/30 to-transparent blur-3xl"></div>
              
              <div className="absolute right-8 top-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-500/40 to-transparent"></div>
              <div className="absolute left-0 bottom-8 h-1 w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 via-pink-500 to-purple-400">
                    Portfolio Digital
                  </span>
                </h3>
                
                <div className="space-y-5 mb-8">
                  <div className="flex items-start">
                    <Sparkles className="h-5 w-5 text-pink-400 mt-1 mr-3" />
                    <p className="text-muted-foreground">
                      Explorez mon portfolio complet présentant l'étendue de mes compétences et de mes réalisations en développement web et design
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
                    <p className="text-muted-foreground">
                      Découvrez mon parcours, mes méthodes de travail et ma vision du développement web moderne
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-yellow-400 mt-1 mr-3" />
                    <p className="text-muted-foreground">
                      Apprenez comment je peux contribuer à vos projets en apportant des solutions créatives et performantes
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.a
                    href="/resume.pdf"
                    download="cv-2023.pdf"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white flex items-center justify-center hover:brightness-110 transition-all"
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 25px -5px rgba(236,72,153,0.5)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger mon CV
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg glass-morphism border border-white/10 hover:bg-white/10 flex items-center justify-center transition-all"
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 25px -5px rgba(168,85,247,0.3)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="w-5 h-5 mr-2 text-cyan-500" />
                    Consulter en ligne
                  </motion.a>
                </motion.div>
                
                {/* Enhanced synthwave style decoration */}
                <div className="absolute right-0 bottom-0 transform rotate-6">
                  <div className="text-6xl font-bold opacity-10 text-pink-500" 
                    style={{ 
                      fontFamily: "'Permanent Marker', cursive",
                      textShadow: "0 0 10px rgba(236,72,153,0.7)"
                    }}
                  >
                    CV
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

export default CreativeShowcase;
