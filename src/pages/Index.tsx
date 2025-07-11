// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';
// import AboutSection from '../components/AboutSection';
// import ProjectsSection from '../components/ProjectsSection';
// import ExperienceSection from '../components/ExperienceSection';
// import TechStackSection from '../components/TechStackSection';
// import ContactSection from '../components/ContactSection';
// import ParticleBackground from '../components/ParticleBackground';
// import CinematicBackground from '../components/CinematicBackground';
// import AmbientSounds from '../components/AmbientSounds';
// import ThemeToggle from '../components/ThemeToggle';
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
// import PortfolioChatbot from '../components/PortfolioChatbot';

// const sampleMediaContent = {
//   video: {
//     src: 'https://dl.dropboxusercontent.com/scl/fi/gua5vzegtlrd5n49d1s5s/Portfolio-gif-video.MOV?rlkey=r993wzq95mbh3z0iybmcr6ty6&st=g4pstowo',
//     poster: undefined,
//     background: '/lovable-uploads/18c2cd86-ea62-4bf5-982c-734b0d25bc00.png',
//     title: "Hello! I'm Sai Sandeep Mamidala Passionate about AI, backend engineering, and real- world innovation",
//     date: 'Portfolio',
//     scrollToExpand: 'Scroll to Explore',
//   },
//   image: {
//     src: '/lovable-uploads/spacex-elon-musk.JPG',
//     poster: undefined,
//     background: '/lovable-uploads/pexels-francesco-ungaro-281260.jpg',
//     title: "Hello! I'm Sai Sandeep Mamidala Passionate about AI, backend engineering, and real- world innovation",
//     date: 'AI Innovation',
//     scrollToExplore: 'Scroll to Explore',
//   },
// };

// const HeroContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
//   return (
//     <motion.div
//       className='max-w-5xl mx-auto text-center px-6'
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2, ease: "easeOut" }}
//     >
//       <motion.h1
//         className='text-5xl md:text-7xl font-light mb-8 text-white tracking-wide'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         Creative Engineering
//       </motion.h1>

//       <motion.div
//         className='w-24 h-px bg-white/60 mx-auto mb-8'
//         initial={{ width: 0 }}
//         animate={{ width: 96 }}
//         transition={{ duration: 1, delay: 0.6 }}
//       />

//       <motion.p
//         className='text-xl md:text-2xl mb-12 text-white/90 leading-relaxed font-light max-w-4xl mx-auto'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.8 }}
//       >
//         Building AI-powered experiences that bridge technology and human creativity.
//         Specializing in scalable systems and intelligent applications that transform ideas into reality.
//       </motion.p>

//       <motion.p
//         className='text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1 }}
//       >
//         From healthcare innovation to enterprise solutions, every project tells a story of purposeful engineering.
//       </motion.p>
//     </motion.div>
//   );
// };

// const Index = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [ambientSounds, setAmbientSounds] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');
//   const mediaType: 'video' = 'video'; // fixed to video only

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['hero', 'about', 'projects', 'experience', 'tech', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 3;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const currentMedia = sampleMediaContent[mediaType];

//   return (
//     <div className={`min-h-screen transition-colors duration-1000 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'
//       }`}>
//       <CinematicBackground activeSection={activeSection} darkMode={darkMode} />

//       <div className="opacity-20">
//         <ParticleBackground darkMode={darkMode} />
//       </div>

//       <div className="fixed top-8 right-8 z-50 flex gap-3">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.2 }}
//         >
//           <AmbientSounds enabled={ambientSounds} onToggle={setAmbientSounds} />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.4 }}
//         >
//           <ThemeToggle darkMode={darkMode} onToggle={setDarkMode} />
//         </motion.div>
//       </div>

//       <Navigation activeSection={activeSection} darkMode={darkMode} />

//       <main className="relative z-10">
//         <section id="hero" className="min-h-screen">
//           <ScrollExpandMedia
//             mediaType={mediaType}
//             mediaSrc={currentMedia.src}
//             posterSrc={currentMedia.poster}
//             bgImageSrc={currentMedia.background}
//             title={currentMedia.title}
//             date={currentMedia.date}
//             scrollToExpand={currentMedia.scrollToExpand}
//             textBlend
//           >
//             <HeroContent mediaType={mediaType} />
//           </ScrollExpandMedia>
//         </section>

//         <motion.section id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
//           <AboutSection darkMode={darkMode} />
//         </motion.section>

//         <motion.section id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
//           <ProjectsSection darkMode={darkMode} />
//         </motion.section>

//         <motion.section id="experience" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
//           <ExperienceSection darkMode={darkMode} />
//         </motion.section>

//         <motion.section id="tech" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
//           <TechStackSection darkMode={darkMode} />
//         </motion.section>

//         <motion.section id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
//           <ContactSection darkMode={darkMode} />
//         </motion.section>
//       </main>

//       <Footer darkMode={darkMode} />
//       <PortfolioChatbot darkMode={darkMode} />
//     </div>
//   );
// };

// export default Index;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import TechStackSection from '../components/TechStackSection';
import ContactSection from '../components/ContactSection';
import ParticleBackground from '../components/ParticleBackground';
import CinematicBackground from '../components/CinematicBackground';
import AmbientSounds from '../components/AmbientSounds';
import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PortfolioChatbot from '../components/PortfolioChatbot';

const sampleMediaContent = {
  video: {
    src: 'https://dl.dropboxusercontent.com/scl/fi/gua5vzegtlrd5n49d1s5s/Portfolio-gif-video.MOV?rlkey=r993wzq95mbh3z0iybmcr6ty6&st=g4pstowo',
    poster: undefined,
    background: '/lovable-uploads/18c2cd86-ea62-4bf5-982c-734b0d25bc00.png',
    title: "Hello! I'm Sai Sandeep Mamidala\nPassionate about AI, backend engineering,\nand real-world innovation",
    date: 'Portfolio',
    scrollToExpand: 'Scroll to Explore',
  },
  image: {
    src: '/lovable-uploads/spacex-elon-musk.JPG',
    poster: undefined,
    background: '/lovable-uploads/pexels-francesco-ungaro-281260.jpg',
    title: "Hello! \nI'm Sai Sandeep Mamidala\nPassionate about AI, backend engineering,\nand real-world innovation",
    date: 'AI Innovation',
    scrollToExplore: 'Scroll to Explore',
  },
};

const HeroContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  return (
    <motion.div
      className='max-w-5xl mx-auto text-center px-6'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h1
        className='text-5xl md:text-7xl font-light mb-8 text-white tracking-wide'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Creative Engineering
      </motion.h1>

      <motion.div
        className='w-24 h-px bg-white/60 mx-auto mb-8'
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      <motion.p
        className='text-xl md:text-2xl mb-12 text-white/90 leading-relaxed font-light max-w-4xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Building AI-powered experiences that bridge technology and human creativity.
        Specializing in scalable systems and intelligent applications that transform ideas into reality.
      </motion.p>

      <motion.p
        className='text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        From healthcare innovation to enterprise solutions, every project tells a story of purposeful engineering.
      </motion.p>
    </motion.div>
  );
};

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [ambientSounds, setAmbientSounds] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mediaType: 'video' = 'video';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'tech', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <CinematicBackground activeSection={activeSection} darkMode={darkMode} />

      <div className="opacity-20">
        <ParticleBackground darkMode={darkMode} />
      </div>

      <div className="fixed top-8 right-8 z-50 flex gap-3">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>
          <AmbientSounds enabled={ambientSounds} onToggle={setAmbientSounds} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4 }}>
          <ThemeToggle darkMode={darkMode} onToggle={setDarkMode} />
        </motion.div>
      </div>

      <Navigation activeSection={activeSection} darkMode={darkMode} />

      <main className="relative z-10">
        <section id="hero" className="min-h-screen">
          <ScrollExpandMedia
            mediaType={mediaType}
            mediaSrc={currentMedia.src}
            posterSrc={currentMedia.poster}
            bgImageSrc={currentMedia.background}
            title={currentMedia.title}
            date={currentMedia.date}
            scrollToExpand={currentMedia.scrollToExpand}
            textBlend
          >
            <HeroContent mediaType={mediaType} />
          </ScrollExpandMedia>
        </section>

        <motion.section
          id="about"
          className="bg-[url('/lovable-uploads/blue.jpg')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <AboutSection darkMode={darkMode} />
        </motion.section>

        <motion.section
          id="projects"
          className="relative bg-[url('/lovable-uploads/94b8f050-bc2f-46cc-82a2-87e5f31d7668.png')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

          {/* Project content */}
          <div className="relative z-10">
            <ProjectsSection darkMode={darkMode} />
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="relative bg-[url('/lovable-uploads/bridge.png')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

          {/* Content above overlay */}
          <div className="relative z-10">
            <ExperienceSection darkMode={darkMode} />
          </div>
        </motion.section>


        <motion.section
          id="tech"
          className="relative bg-[url('/lovable-uploads/nightbrooklyn.png')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

          {/* Actual content on top of overlay */}
          <div className="relative z-10">
            <TechStackSection darkMode={darkMode} />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="relative bg-[url('/lovable-uploads/sea.png')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

          {/* Content on top */}
          <div className="relative z-10">
            <ContactSection darkMode={true} />
          </div>
        </motion.section>

      </main>

      <Footer darkMode={darkMode} />
      <PortfolioChatbot darkMode={darkMode} />
    </div>
  );
};

export default Index;
