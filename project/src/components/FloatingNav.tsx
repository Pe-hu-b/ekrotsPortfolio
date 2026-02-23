import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' }
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);

    const observers = navItems.map((item) => {
      const element = document.getElementById(item.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 backdrop-blur-[20px] rounded-full px-6 py-3"
      style={{ backgroundColor: 'rgba(5,5,8,0.85)' }}
    >
      <ul className="flex items-center gap-2">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {item.label}
            </button>
            {activeSection === item.id && (
              <motion.div
                layoutId="navpill"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'rgba(0,212,255,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
