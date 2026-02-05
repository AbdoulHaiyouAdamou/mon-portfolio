import { motion } from 'framer-motion';
import { 
  Download, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Languages, 
  Heart,
  MapPin,
  Calendar,
  User
} from 'lucide-react';

interface CVSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

function CVSection({ title, icon, children, delay = 0 }: CVSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6 mb-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-cyan-400/20 flex items-center justify-center text-cyan-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

export default function CV() {
  return (
    <section id="cv" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient opacity-30" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Mon </span>
            <span className="text-gradient">Curriculum Vitae</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Découvrez mon parcours académique et professionnel en détail
          </p>
          
          {/* Download Button */}
          <motion.a
            href="/cv-abdoul-haiyou.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-xl neon-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 242, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Télécharger le CV PDF
          </motion.a>
        </motion.div>

        {/* Personal Info */}
        <CVSection title="Informations Personnelles" icon={<User className="w-5 h-5" />} delay={0}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm">Nom complet</p>
                <p className="text-white">Adamou Noma Abdoul Haiyou</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm">Date de naissance</p>
                <p className="text-white">17/08/2001 à Niamey, Niger</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm">Adresse</p>
                <p className="text-white">1273 Hay Massira 1, Témara, Maroc</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm">Statut</p>
                <p className="text-white">Célibataire - Nationalité Nigérienne</p>
              </div>
            </div>
          </div>
        </CVSection>

        {/* Education */}
        <CVSection title="Formation" icon={<GraduationCap className="w-5 h-5" />} delay={0.1}>
          <div className="space-y-4">
            <div className="border-l-2 border-cyan-400/30 pl-4">
              <p className="text-cyan-400 font-medium">2024 - Présent</p>
              <p className="text-white font-semibold">Cycle d'Ingénieur</p>
              <p className="text-gray-400">École ISMAGI - Rabat, Maroc</p>
            </div>
            <div className="border-l-2 border-cyan-400/30 pl-4">
              <p className="text-cyan-400 font-medium">2022 - 2024</p>
              <p className="text-white font-semibold">Classe Préparatoire</p>
              <p className="text-gray-400">École SupMTI - Oujda, Maroc</p>
            </div>
            <div className="border-l-2 border-cyan-400/30 pl-4">
              <p className="text-cyan-400 font-medium">2019 - 2022</p>
              <p className="text-white font-semibold">Lycée CSP Zeider</p>
              <p className="text-gray-400">Niamey, Niger</p>
            </div>
          </div>
        </CVSection>

        {/* Skills */}
        <CVSection title="Compétences Techniques" icon={<Code2 className="w-5 h-5" />} delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Langages de programmation</p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'C++', 'C#', 'PHP', 'Python'].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Outils & Frameworks</p>
              <div className="flex flex-wrap gap-2">
                {['Visual Studio', 'C++ Builder', 'XAMPP', 'React', 'Android Studio'].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-400 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Méthodologies</p>
              <div className="flex flex-wrap gap-2">
                {['UML', 'POO', 'MVC', 'MVVM'].map((method) => (
                  <span key={method} className="px-3 py-1 rounded-full bg-purple-400/20 text-purple-400 text-sm">
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Qualités</p>
              <div className="flex flex-wrap gap-2">
                {['Autonome', 'Rigoureux', 'Esprit d\'analyse', 'Esprit d\'équipe'].map((quality) => (
                  <span key={quality} className="px-3 py-1 rounded-full bg-green-400/20 text-green-400 text-sm">
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CVSection>

        {/* Languages */}
        <CVSection title="Langues" icon={<Languages className="w-5 h-5" />} delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-white font-semibold">Français</p>
              <p className="text-cyan-400 text-sm">Courant</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-white font-semibold">Anglais</p>
              <p className="text-cyan-400 text-sm">Intermédiaire</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-white font-semibold">Haoussa / Zarma</p>
              <p className="text-cyan-400 text-sm">Langues maternelles</p>
            </div>
          </div>
        </CVSection>

        {/* Projects */}
        <CVSection title="Projets Académiques" icon={<Briefcase className="w-5 h-5" />} delay={0.4}>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-cyan-400 font-medium text-sm">2025 - Application Java</p>
              <p className="text-white font-semibold">Gestion de réservation de vols</p>
              <p className="text-gray-400 text-sm">Application de gestion des stocks et réservations de vols avec Java : enregistrement des clients, réservations, disponibilité des vols.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-cyan-400 font-medium text-sm">2025 - Conception UML</p>
              <p className="text-white font-semibold">Modélisation système de gestion de vols</p>
              <p className="text-gray-400 text-sm">Cas d'utilisation, diagrammes de classes, séquences, activités, états, composants.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-cyan-400 font-medium text-sm">2025 - Plateforme E-commerce</p>
              <p className="text-white font-semibold">DigitalNova - E-books</p>
              <p className="text-gray-400 text-sm">Développement d'une plateforme e-commerce d'e-books avec React, TypeScript, PHP et MySQL.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-cyan-400 font-medium text-sm">2024 - Application C#</p>
              <p className="text-white font-semibold">Gestion de bibliothèque (MVC)</p>
              <p className="text-gray-400 text-sm">Application de gestion de livres, lecteurs et emprunts en architecture MVC avec C# sous Visual Studio.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-cyan-400 font-medium text-sm">2024 - Application C++ Builder</p>
              <p className="text-white font-semibold">Gestion de parking</p>
              <p className="text-gray-400 text-sm">Application de gestion de parking : enregistrement des véhicules, suivi des entrées/sorties, interface utilisateur.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-cyan-400 font-medium text-sm">2024 - Site Web PHP</p>
              <p className="text-white font-semibold">Forum de discussion</p>
              <p className="text-gray-400 text-sm">Site web dynamique avec PHP, HTML/CSS et XAMPP : inscription, création de sujets, gestion des messages et utilisateurs.</p>
            </div>
          </div>
        </CVSection>

        {/* Interests */}
        <CVSection title="Centres d'Intérêt" icon={<Heart className="w-5 h-5" />} delay={0.5}>
          <div className="flex flex-wrap gap-3">
            {['Musculation', 'Lecture', 'Technologies', 'Logique', 'Esprit d\'équipe', 'Voyage'].map((interest) => (
              <span key={interest} className="px-4 py-2 rounded-full glass text-gray-300 flex items-center gap-2">
                <Heart className="w-3 h-3 text-cyan-400" />
                {interest}
              </span>
            ))}
          </div>
        </CVSection>
      </div>
    </section>
  );
}
