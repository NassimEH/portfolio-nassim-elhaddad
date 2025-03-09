
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../utils/projectData';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { Send, Mail, MapPin, ArrowRight, Github, Linkedin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      toast({
        title: t('contact.success_title'),
        description: t('contact.success_message'),
      });
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Synthwave background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('contact.title')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Form - Takes more space */}
          <motion.div 
            className="lg:col-span-3 glass-morphism p-8 rounded-2xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Background gradient effects */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-purple-400" />
                {t('contact.form_title')}
              </h3>
              
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">{t('contact.thank_you')}</h4>
                    <p className="text-muted-foreground">{t('contact.will_reply_soon')}</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.name_placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.email_placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder={t('contact.message_placeholder')}
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 disabled:opacity-70 transition-all duration-300 font-medium flex justify-center items-center"
                      whileHover={{ translateY: -5, boxShadow: "0 10px 25px -5px rgba(168,85,247,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : null}
                      {isSubmitting ? t('contact.sending') : t('contact.send')}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-morphism p-8 rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute -inset-10 bg-gradient-to-tl from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl rounded-full"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">{t('contact.info_title')}</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">{t('contact.email_label')}</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-lg hover:text-cyan-400 transition-colors duration-300"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">{t('contact.location_label')}</h4>
                      <p className="text-lg">{contactInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden">
              {/* Background effect */}
              <div className="absolute -inset-10 bg-gradient-to-bl from-purple-500/10 via-pink-500/5 to-transparent blur-3xl rounded-full"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">{t('contact.follow_title')}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.a 
                    href={contactInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl glass-morphism hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168,85,247,0.3)" }}
                  >
                    <Github className="w-8 h-8 mb-2 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                  
                  <motion.a 
                    href={contactInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl glass-morphism hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34,211,238,0.3)" }}
                  >
                    <Linkedin className="w-8 h-8 mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-sm">LinkedIn</span>
                  </motion.a>
                </div>
                
                <motion.a
                  href="#"
                  className="flex items-center justify-between mt-6 px-4 py-3 rounded-lg glass-morphism hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm">{t('contact.view_all_profiles')}</span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
