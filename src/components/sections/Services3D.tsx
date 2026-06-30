import { motion } from 'framer-motion';
import { Card3D } from '../3d/Card3D';
import { BookOpen, Beaker, Laptop, Palette, Music, Trophy } from 'lucide-react';

const services = [
  {
    title: 'CBSE Curriculum',
    description: 'Comprehensive curriculum from Pre-Primary to 8th grade aligned with CBSE standards and global best practices.',
    icon: <BookOpen />,
  },
  {
    title: 'Science Laboratories',
    description: 'State-of-the-art labs with modern equipment for hands-on learning and scientific exploration.',
    icon: <Beaker />,
  },
  {
    title: 'Digital Learning',
    description: 'Smart classrooms with interactive tools and online platforms for enhanced learning experiences.',
    icon: <Laptop />,
  },
  {
    title: 'Arts & Crafts',
    description: 'Creative expression programs fostering artistic talent and cultural awareness in students.',
    icon: <Palette />,
  },
  {
    title: 'Music & Dance',
    description: 'Classical and contemporary music and dance programs for holistic personality development.',
    icon: <Music />,
  },
  {
    title: 'Sports & Fitness',
    description: 'Comprehensive sports programs including cricket, basketball, badminton, and athletics training.',
    icon: <Trophy />,
  },
];

export const Services3D = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-4">
            ACADEMIC PROGRAMS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              Learning Programs
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From academics to arts, sports to science, we offer a complete spectrum of educational experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card3D
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-gold font-bold text-lg">Pre-Primary to 8th</p>
              <p className="text-gray-400 text-sm mt-2">Comprehensive education spanning all formative years</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg">25:1 Student-Teacher Ratio</p>
              <p className="text-gray-400 text-sm mt-2">Personalized attention and individualized learning paths</p>
            </div>
            <div>
              <p className="text-gold font-bold text-lg">CBSE Affiliated</p>
              <p className="text-gray-400 text-sm mt-2">Recognized curriculum with national standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
