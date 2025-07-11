
import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Animated background rings */}
              <motion.div
                className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-cyan-400/20 backdrop-blur-sm"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Profile Image */}
              <motion.div
                className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl m-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lovable-uploads/profilepic.png"
                  alt="Sai Sandeep Mamidala"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-light mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              About <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            
            <motion.div 
              className="h-px bg-gradient-to-r from-current via-current/50 to-transparent opacity-30 mb-8 max-w-md"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-light">
                I'm <span className="font-semibold">Sai Sandeep</span>, a NYU graduate student building 
                AI-powered experiences that bridge technology and human creativity.
              </p>
              
              <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
                Specializing in scalable systems and intelligent applications, I transform ideas 
                into reality through purposeful engineering. Every project tells a story of 
                innovation meeting real-world impact.
              </p>
              
              <p className="text-lg opacity-70 leading-relaxed max-w-2xl">
                From healthcare innovation to enterprise solutions, I bring a unique perspective 
                that combines technical expertise with creative problem-solving.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
//