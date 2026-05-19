import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { label: 'Avg. Launch Lift', value: '42%' },
  { label: 'Client Retention', value: '96%' },
  { label: 'Build Velocity', value: '2.4x' },
];

const sentence = 'Designed for modern brands that value trust, clarity, and velocity.';

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      setParallax({ x, y });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduceMotion]);

  return (
    <section id="top" className="relative px-4 pb-20 pt-36 sm:px-6 lg:pt-44">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 lg:gap-10"
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'show'}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.08 } } }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } } }} className="col-span-12 lg:col-span-7">
          <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-slate-200/90 uppercase">
            premium digital systems
          </motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: easing } } }} className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-gold-gradient sm:text-6xl lg:text-7xl">
            Luxury-grade web experiences with measurable business impact.
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.14 } } }} className="mt-6 text-lg text-slate-300/90 sm:text-xl">
            <span>{sentence}</span>
            {!reduceMotion && <span className="ml-1 inline-block w-[0.55ch] align-[-0.08em] animate-caret text-gold-gradient">|</span>}
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.2 } } }} className="mt-5 max-w-2xl text-base leading-7 text-slate-300/75">
            We pair clear product storytelling with high-performance engineering and understated cinematic motion.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { delay: 0.25 } } }} className="mt-9 flex flex-wrap gap-4">
            <a href="#top" className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#f4d694,#d49a4b)] px-6 py-3 text-sm font-bold text-[#1a1304] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_14px_35px_rgba(212,154,75,0.3)]">
              Start your build
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a href="#top" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/95 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.01] hover:border-white/40 hover:bg-white/10 hover:shadow-[0_12px_30px_rgba(8,12,28,0.45)]">
              View capabilities
            </a>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { delay: 0.35, staggerChildren: 0.08 } } }} className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <motion.div key={item.label} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="glass rounded-2xl p-4 transition-transform duration-500 hover:-translate-y-1">
                <p className="text-2xl font-display text-gold-gradient">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300/80">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, scale: 0.96, y: 24 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.1, ease: easing } } }} className="relative col-span-12 min-h-[490px] lg:col-span-5">
          <div className="absolute inset-x-6 top-16 h-56 rounded-full bg-[radial-gradient(circle,rgba(212,154,75,0.26),transparent_70%)] blur-3xl animate-glow-shift" />

          <motion.div
            className="absolute left-1/2 top-10 w-[92%] -translate-x-1/2 glass-strong rounded-[2rem] p-7"
            animate={reduceMotion ? undefined : { x: parallax.x * 0.35, y: parallax.y * 0.35 }}
            transition={{ type: 'spring', stiffness: 30, damping: 14, mass: 0.8 }}
          >
            <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.26),transparent_40%,rgba(212,154,75,0.24))] opacity-60" />
            <div className="relative animate-float">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300/85">System architecture badge</p>
              <p className="mt-3 font-display text-3xl leading-tight text-white">Cinematic Interface Stack</p>
              <p className="mt-3 text-sm leading-6 text-slate-300/75">Design language, conversion UX, and performance-first frontend delivery.</p>
            </div>
          </motion.div>

          {['React + Motion', 'Headless CMS', 'Analytics layer'].map((chip, i) => (
            <motion.div
              key={chip}
              className="absolute left-1/2 top-56 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200/85 shadow-[0_10px_30px_rgba(5,8,20,0.4)] animate-orbit"
              style={{ animationDelay: `${i * -6}s` }}
              animate={reduceMotion ? undefined : { x: parallax.x * (0.15 + i * 0.05), y: parallax.y * (0.15 + i * 0.05) }}
              transition={{ type: 'spring', stiffness: 28, damping: 16 }}
            >
              {chip}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
