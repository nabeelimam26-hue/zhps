import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { label: 'Avg. Launch Lift', value: '42%' },
  { label: 'Client Retention', value: '96%' },
  { label: 'Build Velocity', value: '2.4x' },
];

const sentence = 'Designed for modern brands that value trust, clarity, and velocity.';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative px-4 pb-20 pt-36 sm:px-6 lg:pt-44">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 lg:gap-10"
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'show'}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="col-span-12 lg:col-span-7">
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-slate-200/90 uppercase">
            premium digital systems
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-gold-gradient sm:text-6xl lg:text-7xl">
            Luxury-grade web experiences with measurable business impact.
          </h1>
          <p className="mt-6 text-lg text-slate-300/90 sm:text-xl">
            <span>{sentence}</span>
            {!reduceMotion && (
              <span className="ml-1 inline-block w-[0.55ch] align-[-0.08em] animate-caret text-gold-gradient">|</span>
            )}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300/75">
            We pair clear product storytelling with high-performance engineering and understated cinematic motion.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#f4d694,#d49a4b)] px-6 py-3 text-sm font-bold text-[#1a1304] transition hover:-translate-y-0.5">
              Start your build
              <ArrowRight className="size-4" />
            </a>
            <a href="#top" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/95 transition hover:border-white/35 hover:bg-white/10">
              View capabilities
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((item, idx) => (
              <motion.div key={item.label} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} transition={{ delay: idx * 0.05 }} className="glass rounded-2xl p-4">
                <p className="text-2xl font-display text-gold-gradient">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, scale: 0.97, y: 16 }, show: { opacity: 1, scale: 1, y: 0 } }} className="relative col-span-12 min-h-[420px] lg:col-span-5">
          <div className="absolute inset-x-8 top-12 h-44 rounded-full bg-[radial-gradient(circle,rgba(212,154,75,0.24),transparent_70%)] blur-3xl" />
          <div className="absolute left-1/2 top-8 w-[85%] -translate-x-1/2 glass-strong animate-float rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300/85">System architecture badge</p>
            <p className="mt-3 font-display text-2xl text-white">Cinematic Interface Stack</p>
            <p className="mt-2 text-sm text-slate-300/75">Design language, conversion UX, and performance-first frontend delivery.</p>
          </div>

          {['React + Motion', 'Headless CMS', 'Analytics layer'].map((chip, i) => (
            <div
              key={chip}
              className="absolute left-1/2 top-40 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200/85 animate-orbit"
              style={{ animationDelay: `${i * -6}s` }}
            >
              {chip}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
