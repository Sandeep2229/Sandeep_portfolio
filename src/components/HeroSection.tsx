
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-tight">
            <span className="font-extralight">Sai</span>{' '}
            <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Sandeep
            </span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            Mamidala
          </h1>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-8" />
          <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto leading-relaxed">
            Software Engineer • AI Innovator • Backend Specialist
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mt-8" />
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-white/20 hover:border-white/40 hover:bg-white/5' 
                  : 'border-black/20 hover:border-black/40 hover:bg-black/5'
              }`}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-white/20 hover:border-white/40 hover:bg-white/5' 
                  : 'border-black/20 hover:border-black/40 hover:bg-black/5'
              }`}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex justify-center space-x-8">
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'hover:bg-white/10 hover:shadow-lg hover:shadow-white/20' 
                    : 'hover:bg-black/10 hover:shadow-lg hover:shadow-black/20'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroSection;
