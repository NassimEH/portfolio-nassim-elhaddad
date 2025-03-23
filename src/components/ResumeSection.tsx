
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
        title: t('resume.toast_downloaded'),
        description: t('resume.toast_description'),
      });
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/lovable-uploads/ac0b53ac-bd3c-4dc8-a6a3-2d0e1a1ed9ab.png'; // Use the original CV
      link.download = 'cv-nassim-elhaddad.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };
  
  const viewCV = () => {
    window.open('/lovable-uploads/ac0b53ac-bd3c-4dc8-a6a3-2d0e1a1ed9ab.png', '_blank');
    
    toast({
      title: t('resume.view'),
      description: t('resume.opening'),
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
            {t('resume.title')}
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('resume.subtitle')}
          </motion.p>
        </motion.div>
        
        <div className="glass-morphism p-6 md:p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('resume.description')}
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
                  <span>{t('resume.view')}</span>
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
                      <span>{t('resume.downloading')}</span>
                    </>
                  ) : hasDownloaded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>{t('resume.downloaded')}</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>{t('resume.download')}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
            
            <motion.div
              className="md:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-[3/4] glass-morphism rounded-lg relative overflow-hidden border border-white/10 shadow-xl flex items-center justify-center group">
                {/* Display the original CV image */}
                <img 
                  src="/lovable-uploads/ac0b53ac-bd3c-4dc8-a6a3-2d0e1a1ed9ab.png"
                  alt="CV Nassim El Haddad"
                  className="w-full h-full object-contain p-2"
                />
                
                {/* Effet de néon en hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-colors duration-300"></div>
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
