import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CinematicBackgroundProps {
  activeSection: string;
  darkMode: boolean;
}

const backgroundImages = {
  hero: '/lovable-uploads/pexels-luis-gomes-166706-546819.png',
  about: '/lovable-uploads/efa56aba-c6e0-4597-853b-cfc623236dd7.png',
  projects: '/lovable-uploads/94b8f050-bc2f-46cc-82a2-87e5f31d7668.png',
  experience: '/lovable-uploads/49476563-bcfe-4e8a-b3af-82b18297f898.png',
  tech: '/lovable-uploads/efa56aba-c6e0-4597-853b-cfc623236dd7.png',
  contact: '/lovable-uploads/49476563-bcfe-4e8a-b3af-82b18297f898.png',
};

const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ activeSection, darkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(backgroundImages.hero);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log('Active Section:', activeSection); // Debug activeSection
    const newBackground = backgroundImages[activeSection as keyof typeof backgroundImages] || backgroundImages.hero;

    if (newBackground !== currentBackground) {
      console.log('Switching to:', newBackground); // Debug new background
      setIsTransitioning(true);
      setImageLoaded(false);

      const img = new Image();
      img.onload = () => {
        console.log('Image loaded:', newBackground); // Debug image load
        setCurrentBackground(newBackground);
        setImageLoaded(true);
        setIsTransitioning(false);
      };
      img.onerror = () => {
        console.error('Failed to load image:', newBackground);
        setCurrentBackground(newBackground); // Fallback to new background
        setImageLoaded(true);
        setIsTransitioning(false);
      };
      img.src = newBackground;
    }
  }, [activeSection, currentBackground]);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full overflow-hidden z-[-2]"
      style={{
        transform: `translateY(${scrollY * 0.2}px)`,
      }}
    >
      <motion.div
        key={currentBackground} // Add key to force re-render on background change
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentBackground})`,
          transform: 'scale(1.05)',
        }}
        animate={{
          opacity: imageLoaded ? 1 : 0,
          scale: [1.05, 1.08, 1.05],
        }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeInOut' },
          scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
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
  );
};

export default CinematicBackground;