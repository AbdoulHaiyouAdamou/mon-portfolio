import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Globe,
  Film,
  Mic,
  Palette,
  Sparkles
} from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
  color: string;
}

const devSkills: Skill[] = [
  { name: 'Java', level: 'Expert', icon: <Code2 className="w-6 h-6" />, color: '#f89820' },
  { name: 'Android Studio', level: 'Avancé', icon: <Smartphone className="w-6 h-6" />, color: '#3ddc84' },
  { name: 'React', level: 'Avancé', icon: <Code2 className="w-6 h-6" />, color: '#61dafb' },
  { name: 'TypeScript', level: 'Intermédiaire', icon: <Code2 className="w-6 h-6" />, color: '#3178c6' },
  { name: 'PHP', level: 'Avancé', icon: <Globe className="w-6 h-6" />, color: '#777bb4' },
  { name: 'MySQL', level: 'Avancé', icon: <Database className="w-6 h-6" />, color: '#4479a1' },
];

const creativeSkills: Skill[] = [
  { name: 'Premiere Pro', level: 'Expert', icon: <Film className="w-6 h-6" />, color: '#9999ff' },
  { name: 'After Effects', level: 'Avancé', icon: <Sparkles className="w-6 h-6" />, color: '#9999ff' },
  { name: 'CapCut', level: 'Expert', icon: <Film className="w-6 h-6" />, color: '#00c853' },
  { name: 'ElevenLabs', level: 'Avancé', icon: <Mic className="w-6 h-6" />, color: '#00f2ff' },
  { name: 'Canva', level: 'Expert', icon: <Palette className="w-6 h-6" />, color: '#00c4cc' },
  { name: 'DaVinci Resolve', level: 'Intermédiaire', icon: <Film className="w-6 h-6" />, color: '#ff6b6b' },
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="group relative"
    >
      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden">
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` 
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </motion.div>

          {/* Name */}
          <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
            {skill.name}
          </h3>

          {/* Level */}
          <p className="text-gray-500 text-sm">{skill.level}</p>

          {/* Progress Bar */}
          <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Avancé' ? '80%' : '60%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-full rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Expertise Technique</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Mon </span>
            <span className="text-gradient">Arsenal</span>
            <span className="text-white"> Technologique</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une combinaison unique de compétences techniques et créatives pour donner vie à vos projets
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Développement</h3>
                <p className="text-gray-400 text-sm">Code propre, architecture solide</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {devSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Creative Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-600/20 flex items-center justify-center">
                <Film className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Création Vidéo</h3>
                <p className="text-gray-400 text-sm">Montage professionnel, storytelling</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {creativeSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 glass rounded-full">
            <span className="text-gray-400">Stack créative + IA Générative</span>
            <span className="w-px h-4 bg-gray-600" />
            <span className="text-cyan-400 font-medium">ElevenLabs, Generative Fill</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
