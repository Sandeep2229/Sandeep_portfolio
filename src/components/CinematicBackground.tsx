import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CinematicBackgroundProps {
  activeSection: string;
  darkMode: boolean;
}

const backgroundImages = {
  hero: '/lovable-uploads/pexels-luis-gomes-166706-546819.png',
  about: '/lovable-uploads/136216d4-1d34-4507-863b-69e9d8ac8e78.png',
  projects: '/lovable-uploads/94b8f050-bc2f-46cc-82a2-87e5f31d7668.png',
  experience: '/lovable-uploads/49476563-bcfe-4e8a-b3af-82b18297f898.png',
  tech: '/lovable-uploads/efa56aba-c6e0-4597-853b-cfc623236dd7.png',
  contact: '/lovable-uploads/49476563-bcfe-4e8a-b3af-82b18297f898.png'
};

const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ activeSection, darkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(backgroundImages.hero);
  const [previousBackground, setPreviousBackground] = useState(backgroundImages.hero);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true); // set true by default for fallback

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newBackground = backgroundImages[activeSection as keyof typeof backgroundImages] || backgroundImages.hero;

    if (newBackground !== currentBackground) {
      setIsTransitioning(true);
      setPreviousBackground(currentBackground);
      setImageLoaded(false);

      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
        setTimeout(() => {
          setCurrentBackground(newBackground);
          setIsTransitioning(false);
        }, 150);
      };
      img.onerror = () => {
        console.error('Failed to preload background image:', newBackground);
        setCurrentBackground(newBackground);
        setIsTransitioning(false);
      };
      img.src = newBackground;
    }
  }, [activeSection, currentBackground]);

  return (
    <>
      <motion.div
        className="fixed inset-0 w-full h-full overflow-hidden z-[-2]"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      >
        {/* Crossfade Background Transition */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${previousBackground})`,
            transform: 'scale(1.05)'
          }}
          animate={{
            opacity: isTransitioning ? 0 : 1,
            scale: [1.05, 1.08, 1.05]
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${currentBackground})`,
            transform: 'scale(1.05)'
          }}
          animate={{
            opacity: 1,
            scale: [1.05, 1.08, 1.05]
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' }
          }}
        />

        {/* Fallback Gradient */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${darkMode
              ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
              : 'bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50'
            }`}
          style={{ opacity: imageLoaded ? 0 : 0.8 }}
        />

        {/* Cinematic Grading Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${darkMode
              ? 'bg-gradient-to-br from-black/30 via-blue-900/20 to-purple-900/30'
              : 'bg-gradient-to-br from-white/10 via-blue-100/20 to-purple-100/20'
            }`}
        />

        {/* Depth Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </motion.div>

      {/* Floating Lights */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5],
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-blue-400/10 to-transparent pointer-events-none z-[-1]"
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [0.8, 1.2, 0.8],
          x: [0, 50, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="fixed top-3/4 right-1/3 w-64 h-64 rounded-full bg-gradient-radial from-amber-400/8 to-transparent pointer-events-none z-[-1]"
        animate={{
          opacity: [0.03, 0.15, 0.03],
          scale: [1, 1.4, 1],
          x: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4
        }}
      />
    </>
  );
};

export default CinematicBackground;
