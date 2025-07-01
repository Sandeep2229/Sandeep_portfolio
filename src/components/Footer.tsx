
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={`py-12 px-6 border-t ${
        darkMode ? 'border-white/10' : 'border-black/10'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light mb-2">
            <span className="font-bold">Sai Sandeep</span>
          </h3>
          <p className="opacity-60 text-sm">Software Engineer • AI Innovator • Backend Specialist</p>
        </motion.div>

        <motion.div
          className="space-y-2 text-sm opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Sai Sandeep Mamidala. All rights reserved.</p>
          <p>Built with React, Three.js, and lots of ☕</p>
          
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-current opacity-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
