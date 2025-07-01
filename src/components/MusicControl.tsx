
import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

interface MusicControlProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const MusicControl: React.FC<MusicControlProps> = ({ enabled, onToggle }) => {
  return (
    <motion.button
      onClick={() => onToggle(!enabled)}
      className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
        enabled
          ? 'bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/20'
          : 'bg-white/10 text-white/60 hover:bg-white/20'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        animate={enabled ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.6, repeat: enabled ? Infinity : 0 }}
      >
        <Music className="h-5 w-5" />
      </motion.div>
    </motion.button>
  );
};

export default MusicControl;
