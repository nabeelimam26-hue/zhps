import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const testimonials = [
  {
    name: 'Victoria Chen',
    role: 'CEO, Luxe Brands',
    content: 'The cinematic interface transformed our digital presence. Our conversion rates increased by 47% within the first month.',
    avatar: 'VC',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Digital, Premium Group',
    content: 'Exceptional attention to detail and performance. The motion design adds a layer of sophistication that sets us apart.',
    avatar: 'MR',
    rating: 5
  },
  {
    name: 'Sophia Laurent',
    role: 'Creative Director, Atelier',
    content: 'Finally, a digital partner that understands both design excellence and business impact. Highly recommended.',
    avatar: 'SL',
    rating: 5
  }
];

export function Testimonials() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="testimonials" className="relative px-4 py-20 sm:px-6 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-slate-200/90 uppercase">
            client voices
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Trusted by{' '}
            <span className="text-gold-gradient">leading brands</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-strong rounded-3xl p-8 transition hover:scale-[1.02]"
            >
              <Quote className="mb-4 size-8 text-gold-gradient/50" />
              
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-gold-gradient text-gold-gradient" />
                ))}
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-slate-200/90">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full border border-gold-gradient/30 bg-gold-gradient/10 font-display text-sm font-semibold text-gold-gradient">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-300/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-12"
        >
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-gold-gradient">96%</p>
            <p className="text-sm text-slate-300/60">Client Retention Rate</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-gold-gradient">4.9★</p>
            <p className="text-sm text-slate-300/60">Average Client Rating</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-gold-gradient">200+</p>
            <p className="text-sm text-slate-300/60">Projects Delivered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
