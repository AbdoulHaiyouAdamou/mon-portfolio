import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Mail, Download } from 'lucide-react';

const roles = [
  'Mobile Developer',
  'Fullstack Engineer',
  'Video Editor (700+ Shorts Created)',
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-20 h-20 border border-cyan-400/20 rounded-lg hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-cyan-400/20 rounded-full hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Disponible pour des projets</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              <span className="text-white block mb-2">Building</span>
              <span className="text-gradient glitch-text" data-text="Logic.">Logic.</span>
              <span className="text-white block mt-2">Editing</span>
              <span className="text-gradient-gold glitch-text" data-text="Emotions.">Emotions.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 mb-6"
            >
              Abdoul Haiyou Adamou Noma
            </motion.p>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-12 mb-8"
            >
              <span className="text-lg sm:text-xl text-cyan-400 font-medium typing-cursor">
                {displayText}
              </span>
              <span className="text-gray-500">|</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-xl neon-glow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 242, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Voir les Projets
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Me Contacter
              </motion.button>
              <motion.a
                href="/cv-abdoul-haiyou.pdf"
                download
                className="group flex items-center justify-center gap-2 px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Télécharger CV
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-400/30"
              />
              
              {/* Profile Container */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-xl" />
                
                {/* Main Circle */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/50 pulse-glow">
                  {/* Placeholder for profile image - using gradient as placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient mb-2">AH</div>
                      <div className="text-sm text-cyan-400/70">Hybrid Creator</div>
                    </div>
                  </div>
                  
                  {/* Scanline Overlay */}
                  <div className="absolute inset-0 scanline opacity-50" />
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm text-cyan-400 font-medium"
                >
                  700+ Vidéos
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm text-yellow-400 font-medium"
                >
                  3+ Ans Exp.
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
