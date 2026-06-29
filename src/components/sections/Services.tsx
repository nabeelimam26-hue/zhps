import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Microscope, 
  Cpu, 
  Palette, 
  Music,
  Trophy,
  ArrowRight 
} from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const services = [
  {
    icon: BookOpen,
    title: 'CBSE Curriculum',
    description: 'Comprehensive curriculum from Pre-Primary to 8th grade, aligned with national standards and best practices.',
    gradient: 'from-amber-400/20 to-amber-600/20'
  },
  {
    icon: Microscope,
    title: 'Science Laboratories',
    description: 'State-of-the-art labs equipped for practical learning in Physics, Chemistry, and Biology.',
    gradient: 'from-blue-400/20 to-blue-600/20'
  },
  {
    icon: Cpu,
    title: 'Digital Learning',
    description: 'Smart classrooms with interactive boards and digital platforms for enhanced engagement.',
    gradient: 'from-emerald-400/20 to-emerald-600/20'
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    description: 'Creative programs fostering artistic expression and cultural awareness among students.',
    gradient: 'from-purple-400/20 to-purple-600/20'
  },
  {
    icon: Music,
    title: 'Music & Dance',
    description: 'Specialized training in classical and contemporary music and dance forms.',
    gradient: 'from-rose-400/20 to-rose-600/20'
  },
  {
    icon: Trophy,
    title: 'Sports & Fitness',
    description: 'Comprehensive sports programs including cricket, basketball, badminton, and athletics.',
    gradient: 'from-cyan-400/20 to-cyan-600/20'
  }
];

export function Services() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-slate-200/90 uppercase">
            Academic Programs
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Holistic Education for{' '}
            <span className="text-gold-gradient">Complete Growth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300/75">
            Our diverse programs combine academic excellence with extracurricular activities for well-rounded development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-gold-gradient">
                    <Icon className="size-6" />
                  </div>
                  
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300/75">
                    {service.description}
                  </p>
                  
                  <motion.div
                    className="mt-4 flex items-center text-sm font-medium text-gold-gradient"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore
                    <ArrowRight className="ml-1 size-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#f4d694,#d49a4b)] px-8 py-4 text-sm font-bold text-[#1a1304] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Explore Our Programs
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
