
import React from 'react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: (darkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <motion.button
      onClick={() => onToggle(!darkMode)}
      className={`relative w-16 h-8 rounded-full backdrop-blur-md border focus:outline-none transition-colors duration-300 ${
        darkMode 
          ? 'bg-white/10 border-white/20' 
          : 'bg-black/10 border-black/20'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <motion.div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg ${
          darkMode ? 'bg-blue-400' : 'bg-yellow-400'
        }`}
        animate={{
          x: darkMode ? 0 : 32,
          boxShadow: darkMode
            ? '0 0 20px rgba(59, 130, 246, 0.5)'
            : '0 0 20px rgba(251, 191, 36, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs">
        <span className={darkMode ? 'opacity-60' : 'opacity-100'}>🌙</span>
        <span className={!darkMode ? 'opacity-60' : 'opacity-100'}>☀️</span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
