
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Zap, Lightbulb } from 'lucide-react';

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
    <section id="creative-showcase" className="relative py-16 overflow-hidden" ref={containerRef}>
      {/* Enhanced synthwave background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/40 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1637419450536-378d5457abb8?q=80&w=1968')] bg-fixed bg-cover bg-center opacity-10"></div>
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
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expériences Immersives
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Une fusion de design, code et créativité digitale
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Main video showcase */}
          <motion.div 
            className="relative w-full lg:w-2/3"
            style={{ opacity, scale, rotateY }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover"
                loop
                muted
                playsInline
                onClick={togglePlayPause}
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-in-neon-colors-34676-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Play/Pause button and effect */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                onClick={togglePlayPause}
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-lg border border-white/20"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isPlaying ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Video title */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold text-white">Vision Synthwave</h3>
                <p className="text-white/80 text-sm">Explorez l'esthétique rétrofuturiste et l'ambiance nocturne</p>
              </div>
            </div>
            
            {/* Animated pulse rings */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20 blur-xl rounded-xl"></div>
            
            {/* Hover information */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/80 border border-white/10">
              Cliquez pour {isPlaying ? 'pauser' : 'lancer'}
            </div>
          </motion.div>
          
          {/* Side feature panels */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
          >
            {[
              { 
                icon: <Sparkles className="h-5 w-5 text-pink-400" />, 
                title: "Design Immersif", 
                desc: "Création d'interfaces interactives qui captent l'attention et stimulent l'engagement" 
              },
              { 
                icon: <Zap className="h-5 w-5 text-cyan-400" />, 
                title: "Animations Fluides", 
                desc: "Transitions et effets visuels dynamiques inspirés de l'esthétique synthwave" 
              },
              { 
                icon: <Lightbulb className="h-5 w-5 text-yellow-400" />, 
                title: "Concept Rétrofuturiste", 
                desc: "Fusion des éléments rétro des années 80 avec une vision moderne et futuriste" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="glass-morphism p-5 rounded-xl border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 blur-xl rounded-xl"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Moving decorative element */}
            <motion.div 
              className="hidden lg:block h-24 relative overflow-hidden glass-morphism rounded-xl border border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
              
              <motion.div
                className="absolute inset-0 flex items-center"
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear" 
                }}
              >
                <div className="whitespace-nowrap text-xl tracking-widest opacity-20 font-mono">
                  CREATIVITY • INNOVATION • DESIGN • CODE • EXPERIENCE • DIGITAL • ART • 
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
