
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Download, Eye, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResumeSection: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      setHasDownloaded(true);
      
      // Reset the downloaded state after 3 seconds
      setTimeout(() => {
        setHasDownloaded(false);
      }, 3000);
      
      toast({
        title: "CV téléchargé",
        description: "Merci de votre intérêt pour mon parcours !",
      });
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // This would be your actual resume PDF
      link.download = 'cv-2023.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };
  
  const viewCV = () => {
    window.open('/resume.pdf', '_blank');
    
    toast({
      title: "Aperçu du CV",
      description: "Ouverture du CV dans un nouvel onglet",
    });
  };
  
  return (
    <section id="resume" className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title at the top */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mon CV
          </motion.h2>
        </motion.div>
        
        <div className="glass-morphism p-6 md:p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-8 gap-8 items-center">
            <div className="md:col-span-5">
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Téléchargez mon CV pour découvrir mon parcours professionnel et académique, 
                mes compétences techniques et soft skills, ainsi que mes certifications.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg glass-morphism hover:bg-cyan-500/10 transition-all duration-300 group"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34,211,238,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={viewCV}
                >
                  <Eye className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span>Consulter le CV</span>
                </motion.button>
                
                <motion.button
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg ${hasDownloaded ? 'bg-green-500/20 text-green-300' : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'} transition-all duration-300`}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34,211,238,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Téléchargement...</span>
                    </>
                  ) : hasDownloaded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Téléchargé</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Télécharger le CV</span>
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Easter egg */}
              <div className="mt-6 text-xs text-muted-foreground italic opacity-50 cursor-help group">
                <span className="group-hover:text-cyan-400 transition-colors duration-300">Conseil: Utilisez le raccourci Konami Code sur la page d'accueil</span>
              </div>
            </div>
            
            <motion.div
              className="md:col-span-3 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-[3/4] glass-morphism rounded-lg relative overflow-hidden border border-white/10 shadow-xl">
                {/* Mock CV design */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10"></div>
                <div className="absolute top-8 right-6 w-24 h-2 rounded-full bg-white/10"></div>
                <div className="absolute top-12 right-6 w-16 h-2 rounded-full bg-white/10"></div>
                <div className="absolute top-24 left-6 w-32 h-3 rounded-full bg-white/10"></div>
                
                <div className="absolute top-32 left-6 right-6 space-y-2">
                  <div className="w-full h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-full h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-3/4 h-1.5 rounded-full bg-white/10"></div>
                </div>
                
                <div className="absolute top-44 left-6 right-6 space-y-2">
                  <div className="w-full h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-full h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-2/3 h-1.5 rounded-full bg-white/10"></div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full" 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FileText className="w-10 h-10 text-cyan-400 opacity-80" />
                </motion.div>
              </div>
              
              {/* Small floating elements */}
              <motion.div 
                className="absolute -top-3 -left-3 w-8 h-8 glass-morphism rounded-lg flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.2, rotate: 45 }}
              >
                <FileText className="w-4 h-4 text-cyan-400" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -right-3 w-8 h-8 glass-morphism rounded-lg flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.2, rotate: -45 }}
              >
                <Download className="w-4 h-4 text-pink-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
