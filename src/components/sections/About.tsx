import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  Heart, 
  Lightbulb, 
  School, 
  Award, 
  BookOpen, 
  Globe,
  Users,
  Cpu
} from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const visionPoints = [
  {
    icon: Target,
    title: 'Our Vision',
    description: 'To be a beacon of excellence in education, nurturing future leaders with integrity and innovation.',
    color: 'from-amber-500/20 to-amber-600/20'
  },
  {
    icon: Heart,
    title: 'Our Mission',
    description: 'To provide quality education that fosters intellectual curiosity, character development, and social responsibility.',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Lightbulb,
    title: 'Our Values',
    description: 'Integrity, Excellence, Respect, Responsibility, and Innovation – the pillars of our educational philosophy.',
    color: 'from-emerald-500/20 to-emerald-600/20'
  }
];

const milestones = [
  { year: '1975', event: 'School Founded with 50 students', icon: School },
  { year: '2000', event: 'Received CBSE Affiliation', icon: Award },
  { year: '2010', event: 'Expanded to Middle School', icon: BookOpen },
  { year: '2015', event: 'Launched Smart Classroom Initiative', icon: Cpu },
  { year: '2020', event: 'Introduced Digital Learning Platform', icon: Globe },
  { year: '2025', event: 'Achieved 98% CBSE Results', icon: Award },
];

const features = [
  { label: 'CBSE Curriculum', value: 'Pre-Primary to 8th', icon: BookOpen },
  { label: 'Expert Faculty', value: '32+', icon: Users },
  { label: 'Student-Teacher Ratio', value: '25:1', icon: Users },
  { label: 'Campus Area', value: '3 Acres', icon: School },
];

export function About() {
  const reduceMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
      
      <motion.div
        style={{ opacity, scale }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-amber-400/90 uppercase">
            About Our School
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            A Legacy of{' '}
            <span className="text-gold-gradient">Excellence</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300/75">
            DR ZAKIR HUSSAIN MIDDLE SCHOOL has been nurturing young minds with quality education and character building in Patna since 1975.
          </p>
        </motion.div>

        {/* Vision/Mission/Values Grid */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visionPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="glass-strong group relative overflow-hidden rounded-3xl p-8 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-amber-400">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300/75">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Milestones Timeline */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h3 className="mb-8 text-center font-display text-3xl font-semibold text-white">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-500/50 to-amber-500/0" />
            
            <div className="space-y-8">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={reduceMotion ? false : { opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className="glass-strong rounded-2xl p-6 transition hover:scale-105">
                        <p className="font-display text-2xl font-bold text-amber-400">{milestone.year}</p>
                        <p className="mt-1 text-sm text-white">{milestone.event}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-amber-500/50 bg-black/50">
                      <Icon className="size-5 text-amber-400" />
                    </div>
                    
                    <div className="w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <Icon className="mx-auto size-6 text-amber-400" />
                <p className="mt-3 font-display text-lg font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-300/60">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
