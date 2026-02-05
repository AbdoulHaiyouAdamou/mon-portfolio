import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import CV from './sections/CV';
import Contact from './sections/Contact';
import ScrollToTop from './sections/ScrollToTop';
import ParticleBackground from './sections/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050a14] overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050a14]"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 border-2 border-cyan-400 border-t-transparent rounded-full"
            />
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="absolute mt-24 text-cyan-400 font-medium"
            >
              Chargement...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ParticleBackground />
          <Navigation scrollY={scrollY} />
          
          <main className="relative z-10">
            <Hero />
            <Stats />
            <Skills />
            <Projects />
            <Experience />
            <CV />
            <Contact />
          </main>
          
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
