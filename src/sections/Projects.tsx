import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code2, 
  Film,
  Layers
} from 'lucide-react';

type ProjectCategory = 'all' | 'dev' | 'video';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Perso - AI Local Assistant',
    description: 'Assistant IA personnel fonctionnant localement sur Android. Architecture MVVM, gestion de bases de données locales, interface intuitive.',
    category: 'dev',
    tags: ['Android Native', 'Java', 'MVVM', 'SQLite'],
    icon: <Smartphone className="w-6 h-6" />,
    color: '#3ddc84',
    github: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, paiement, gestion des commandes et tableau de bord admin.',
    category: 'dev',
    tags: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
    icon: <Code2 className="w-6 h-6" />,
    color: '#61dafb',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Viral Snack Content',
    description: 'Montage de plus de 700 shorts viraux pour TikTok, Reels et YouTube Shorts. Motion design, sous-titres dynamiques, effets visuels.',
    category: 'video',
    tags: ['Premiere Pro', 'After Effects', 'CapCut', 'Motion Design'],
    icon: <Film className="w-6 h-6" />,
    color: '#ff0055',
    link: '#',
  },
  {
    id: 4,
    title: 'Corporate & Storytelling',
    description: 'Montage de vidéos long-format pour YouTube : documentaires, tutoriels, contenu corporate. Narration engageante.',
    category: 'video',
    tags: ['Storytelling', 'Color Grading', 'Sound Design', 'DaVinci Resolve'],
    icon: <Film className="w-6 h-6" />,
    color: '#ffd700',
    link: '#',
  },
];

const filters = [
  { id: 'all' as ProjectCategory, label: 'Tous', icon: <Layers className="w-4 h-4" /> },
  { id: 'dev' as ProjectCategory, label: 'Développement', icon: <Code2 className="w-4 h-4" /> },
  { id: 'video' as ProjectCategory, label: 'Vidéo', icon: <Film className="w-4 h-4" /> },
];

function Smartphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
        {/* Project Header */}
        <div className="relative h-48 overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` 
            }}
          />
          
          {/* Animated Pattern */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-20"
            style={{
              background: `repeating-conic-gradient(from 0deg, ${project.color} 0deg 10deg, transparent 10deg 20deg)`
            }}
          />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                color: project.color
              }}
            >
              {project.icon}
            </motion.div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: `${project.color}30`,
                color: project.color
              }}
            >
              {project.category === 'dev' ? 'Développement' : 'Vidéo'}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.link && (
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/20 text-cyan-400 text-sm font-medium hover:bg-cyan-400/30 transition-colors"
              >
                <Play className="w-4 h-4" />
                Voir
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
            {!project.link && !project.github && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/20 text-cyan-400 text-sm font-medium hover:bg-cyan-400/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Détails
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une sélection de mes réalisations en développement et en montage vidéo
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white neon-glow'
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
          >
            <Layers className="w-5 h-5" />
            Voir tous les projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
