import { motion } from 'framer-motion';
import { Card3D } from '../3d/Card3D';
import { Building2, Lightbulb, Beaker, BookOpen, Laptop, Trophy } from 'lucide-react';

const showcaseItems = [
  {
    title: 'Main Campus',
    description: '3 acres of secure, lush green campus designed for holistic growth and development of every student.',
    icon: <Building2 />,
  },
  {
    title: 'Smart Classrooms',
    description: 'Digitally equipped learning spaces with interactive tools and modern pedagogical approaches.',
    icon: <Lightbulb />,
  },
  {
    title: 'Science Laboratory',
    description: 'Modern equipment and hands-on learning environment for scientific exploration and discovery.',
    icon: <Beaker />,
  },
  {
    title: 'Digital Library',
    description: 'Vast collection of books, journals, and digital resources for comprehensive learning.',
    icon: <BookOpen />,
  },
  {
    title: 'Computer Lab',
    description: 'High-speed internet connectivity and modern systems for IT literacy and digital skills.',
    icon: <Laptop />,
  },
  {
    title: 'Sports Ground',
    description: 'Extensive facilities for cricket, basketball, badminton, athletics, and physical training.',
    icon: <Trophy />,
  },
];

export const Showcase3D = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '20%', right: '10%' }}
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
            OUR FACILITIES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              World-Class
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              Facilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the infrastructure that provides our students with a premium learning environment.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, i) => (
            <Card3D
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Ready to experience our campus?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105">
            Schedule a Campus Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
};
