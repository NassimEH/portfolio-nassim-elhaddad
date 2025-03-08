
import { useEffect } from 'react';

// Smooth scroll to element by ID with offset
export const scrollToElement = (
  elementId: string, 
  offset: number = 0, 
  duration: number = 1000
) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Reveal elements on scroll
export const useRevealOnScroll = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

// Parallax effect
export const useParallax = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxElements.forEach(element => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '0.05');
        const offsetX = (x - 0.5) * speed * 100;
        const offsetY = (y - 0.5) * speed * 100;
        
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

// Page transition
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
