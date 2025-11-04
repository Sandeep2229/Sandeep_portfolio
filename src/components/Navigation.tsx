
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  darkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, darkMode }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'tech', label: 'Tech' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative flex items-center"
            whileHover={{ x: 10 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === item.id
                  ? darkMode
                    ? 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50'
                    : 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/50'
                  : darkMode
                  ? 'border-white/40 hover:border-white/60'
                  : 'border-black/40 hover:border-black/60'
              }`}
              animate={activeSection === item.id ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.6, repeat: activeSection === item.id ? Infinity : 0 }}
            />
            <span
              className={`ml-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
