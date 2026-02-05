import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Rocket } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="fixed bottom-8 right-8 z-40 group"
        >
          <motion.div
            animate={isHovering ? {
              y: [0, -5, 0],
              rotate: [0, -5, 5, 0],
            } : {}}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            
            {/* Button */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/50 transition-shadow">
              <motion.div
                animate={isHovering ? { y: -2 } : { y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isHovering ? (
                  <Rocket className="w-6 h-6 text-white" />
                ) : (
                  <ArrowUp className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </div>

            {/* Particles */}
            {isHovering && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, y: 0, x: 0 }}
                    animate={{ 
                      opacity: 0, 
                      y: 30 + Math.random() * 20,
                      x: (Math.random() - 0.5) * 30
                    }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                  />
                ))}
              </>
            )}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
