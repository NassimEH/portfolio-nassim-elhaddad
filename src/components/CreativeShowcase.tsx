
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Download, Play, Pause } from 'lucide-react';

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
      {/* Urban/street art inspired background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/40 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572053675669-0731a6b4b669?q=80&w=1000')] bg-fixed bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
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
              textShadow: '0 0 20px rgba(0,255,255,0.3)'
            }}
          >
            {t('creative.title')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('creative.description')}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Showcase */}
          <motion.div 
            className="relative"
            style={{ opacity, scale, rotateY }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(0,200,255,0.3)]">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover"
                loop
                muted
                playsInline
              >
                <source src="https://player.vimeo.com/external/553870651.sd.mp4?s=1bfec349a7d4cf1883b4d2532e3cf1d82a60ce84&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('creative.video_title')}</h3>
                  <p className="text-sm text-white/80">{t('creative.video_description')}</p>
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
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-transparent blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500/30 to-transparent blur-2xl"></div>
          </motion.div>
          
          {/* Resume download in a creative street-art style */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-morphism p-8 rounded-2xl relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-yellow-500/10"></div>
              
              {/* Urban/street art inspired decorative elements */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-bl from-yellow-500/20 to-transparent blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>
              
              <div className="absolute right-8 top-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="absolute left-0 bottom-8 h-1 w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 via-pink-500 to-yellow-400">
                    {t('creative.resume_title')}
                  </span>
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {t('creative.resume_description')}
                </p>
                
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
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center hover:brightness-110 transition-all"
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 25px -5px rgba(34,211,238,0.5)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t('resume.download')}
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
                    {t('resume.view')}
                  </motion.a>
                </motion.div>
                
                {/* Street-art style decoration */}
                <div className="absolute right-0 bottom-0 transform rotate-6">
                  <div className="text-6xl font-bold opacity-20" style={{ fontFamily: "'Permanent Marker', cursive" }}>CV</div>
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
