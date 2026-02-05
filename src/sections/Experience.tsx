import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Film, Code2 } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  side: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Video Editor & Content Creator',
    company: 'Freelance',
    period: '2021 - Présent',
    description: 'Production de plus de 700 vidéos format court (TikTok, Reels, YouTube Shorts). Maîtrise des codes de la viralité, motion design, sous-titres dynamiques.',
    icon: <Film className="w-5 h-5" />,
    color: '#ff0055',
    side: 'left',
  },
  {
    id: 2,
    title: 'Étudiant en Ingénierie',
    company: 'ISMAGI Rabat',
    period: '2022 - Présent',
    description: 'Formation en ingénierie informatique. Développement d\'applications mobiles et web, architecture logicielle, bases de données.',
    icon: <GraduationCap className="w-5 h-5" />,
    color: '#00f2ff',
    side: 'right',
  },
  {
    id: 3,
    title: 'Fullstack Developer',
    company: 'Projets Personnels',
    period: '2022 - Présent',
    description: 'Conception et développement d\'applications complètes : E-commerce, assistants IA, applications mobiles natives.',
    icon: <Code2 className="w-5 h-5" />,
    color: '#3ddc84',
    side: 'left',
  },
  {
    id: 4,
    title: 'Motion Designer',
    company: 'Freelance',
    period: '2021 - Présent',
    description: 'Création d\'animations motion graphics, intros vidéo, effets visuels pour contenu social media et corporate.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#ffd700',
    side: 'right',
  },
];

function TimelineItem({ experience, index }: { experience: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: experience.side === 'left' ? -50 : 50 
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${
        experience.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col lg:gap-8 gap-4 mb-12`}
    >
      {/* Content Card */}
      <div className={`lg:w-5/12 w-full ${experience.side === 'left' ? 'lg:text-right' : 'lg:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
        >
          {/* Header */}
          <div className={`flex items-center gap-3 mb-3 ${experience.side === 'left' ? 'lg:flex-row-reverse' : ''}`}>
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${experience.color}20`, color: experience.color }}
            >
              {experience.icon}
            </div>
            <div className={experience.side === 'left' ? 'lg:text-right' : ''}>
              <h3 className="text-white font-semibold">{experience.title}</h3>
              <p className="text-cyan-400 text-sm">{experience.company}</p>
            </div>
          </div>

          {/* Period */}
          <div className={`mb-3 ${experience.side === 'left' ? 'lg:text-right' : ''}`}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400">
              {experience.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {experience.description}
          </p>
        </motion.div>
      </div>

      {/* Center Node */}
      <div className="lg:w-2/12 flex justify-center relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="w-6 h-6 rounded-full border-4 border-[#050a14]"
            style={{ backgroundColor: experience.color }}
          />
          {/* Pulse Effect */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: experience.color }}
          />
        </motion.div>
      </div>

      {/* Empty Space for Layout */}
      <div className="lg:w-5/12 hidden lg:block" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Mon </span>
            <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            L'évolution de mon expertise en développement et en création vidéo
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 hidden lg:block -translate-x-1/2"
          />

          {/* Mobile Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 lg:hidden" />

          {/* Experience Items */}
          <div className="space-y-8 lg:space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id} 
                experience={experience} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: '700+', label: 'Vidéos' },
            { value: '10+', label: 'Projets' },
            { value: '3+', label: 'Années' },
            { value: '100%', label: 'Passion' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
