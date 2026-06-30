import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Parent, Class 7',
    content: 'The teachers at Dr. Zakir Hussain are incredibly dedicated. My son has shown remarkable improvement in both academics and confidence. The facilities are world-class!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Parent, Class 5',
    content: 'The holistic approach to education has developed my daughter\'s confidence and leadership skills. The school truly cares about individual growth.',
    rating: 5,
  },
  {
    name: 'Aditya Verma',
    role: 'Student, Class 8',
    content: 'Smart classrooms make learning fun and engaging. The sports facilities and extracurricular activities are excellent. I love being part of this school!',
    rating: 5,
  },
  {
    name: 'Neha Singh',
    role: 'Parent, Class 6',
    content: 'The 25:1 ratio ensures my child gets personal attention. The curriculum is balanced between academics and overall development. Highly satisfied!',
    rating: 5,
  },
];

export const Testimonials3D = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '30%', left: '5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ bottom: '20%', right: '5%' }}
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
            TESTIMONIALS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
              What Parents &
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from our community about their experience at Dr. Zakir Hussain Middle School.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '850+', label: 'Students' },
            { value: '98.72%', label: 'CBSE Results' },
            { value: '50+', label: 'Years Legacy' },
            { value: '32+', label: 'Faculty Members' },
          ].map((indicator, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl text-center"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
                {indicator.value}
              </p>
              <p className="text-gray-400 text-sm mt-2">{indicator.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
