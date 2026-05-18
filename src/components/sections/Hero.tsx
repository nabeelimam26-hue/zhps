import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative px-4 pb-20 pt-36 sm:px-6 sm:pb-28 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
            <Sparkles className="size-4 text-cyan-300" />
            Premium digital systems for ambitious teams
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Build a sharper brand presence for the next era of the web.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            ZHPS blends high-end interface design, scalable React architecture, and subtle motion to create digital experiences that feel fast, trusted, and futuristic.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-2xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start a project
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Experience score</p>
                <p className="text-3xl font-semibold text-white">98.7%</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">Live</span>
            </div>
            <div className="space-y-3">
              {['Brand velocity', 'Interface clarity', 'Conversion lift'].map((label, index) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex justify-between text-sm">
                    <span className="text-slate-300">{label}</span>
                    <span className="text-cyan-200">{88 + index * 4}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300"
                      initial={reduceMotion ? false : { width: '20%' }}
                      whileInView={reduceMotion ? undefined : { width: `${88 + index * 4}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.12 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
