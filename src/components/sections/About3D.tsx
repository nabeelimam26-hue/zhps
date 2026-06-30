import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Award, BookOpen, Users, Cpu } from 'lucide-react';

const visionPoints = [
  {
    icon: Target,
    title: 'Vision',
    description: 'To be a beacon of excellence in education, nurturing future leaders with integrity and innovation.',
  },
  {
    icon: Heart,
    title: 'Mission',
    description: 'To provide quality education that fosters intellectual curiosity, character development, and social responsibility.',
  },
];

const values = [
  { icon: Award, label: 'Integrity' },
  { icon: Lightbulb, label: 'Excellence' },
  { icon: Users, label: 'Respect' },
  { icon: BookOpen, label: 'Responsibility' },
  { icon: Cpu, label: 'Innovation' },
];

const milestones = [
  { year: 1975, event: 'School Founded with 50 students' },
  { year: 2000, event: 'Received CBSE Affiliation' },
  { year: 2010, event: 'Expanded to Middle School' },
  { year: 2015, event: 'Launched Smart Classroom Initiative' },
  { year: 2020, event: 'Introduced Digital Learning Platform' },
  { year: 2025, event: 'Achieved 98% CBSE Results' },
];

export const About3D = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '50%', left: '5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {visionPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
                <point.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <p className="font-semibold text-white">{value.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              Our Journey
            </span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-gold/60 transition-all duration-300">
                      <p className="text-2xl font-bold text-gold">{milestone.year}</p>
                      <p className="text-gray-300 mt-2">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gold border-4 border-slate-900"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { label: 'Years of Excellence', value: '50+' },
            { label: 'Students Enrolled', value: '850+' },
            { label: 'Faculty Members', value: '32+' },
            { label: 'CBSE Result', value: '98.72%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl text-center"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
