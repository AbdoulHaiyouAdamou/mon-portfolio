import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Film, Calendar, Smartphone } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

function StatItem({ value, suffix, label, icon, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-cyan-400"
        >
          {icon}
        </motion.div>

        {/* Number */}
        <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
          <span className="text-gradient">{count}</span>
          <span className="text-cyan-400">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-gray-400 text-lg">{label}</p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>
    </motion.div>
  );
}

const stats = [
  {
    value: 700,
    suffix: '+',
    label: 'Vidéos Montées',
    icon: <Film className="w-8 h-8" />,
  },
  {
    value: 3,
    suffix: '+',
    label: "Années d'Expérience",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Projets Mobile/Web',
    icon: <Smartphone className="w-8 h-8" />,
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 radial-gradient opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Chiffres </span>
            <span className="text-gradient">Clés</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de mon engagement et de mon expertise
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-0 w-32 h-32 border border-cyan-400/10 rounded-full -translate-x-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-0 w-24 h-24 border border-cyan-400/10 rounded-full translate-x-1/2"
        />
      </div>
    </section>
  );
}
