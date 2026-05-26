import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAuth } from '../../auth';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [error, setError] = useState('');
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const { loginAsAdmin } = useAuth();

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (event: MouseEvent) => setParallax({ x: (event.clientX / window.innerWidth - 0.5) * 10, y: (event.clientY / window.innerHeight - 0.5) * 8 });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduceMotion]);

  async function onSubmit(formData: FormData) {
    const ok = await loginAsAdmin(String(formData.get('username') ?? ''), String(formData.get('password') ?? ''));
    setError(ok ? '' : 'Invalid admin credentials. Use authorized admin account.');
  }

  return (
    <section id="top" className="relative px-4 pb-20 pt-36 sm:px-6 lg:pt-44">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f1cf66]">Est. 1970 • Khagaul, Patna</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl">Nurturing <span className="text-[#e4bf4a]">Compassionate</span> Minds Today.</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">A premium CBSE institution shaped by legacy, values, and future-ready learning systems.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">{['55+ Years', '4500+ Alumni', '60+ Educators', '100% CBSE'].map((s) => <div key={s} className="rounded-2xl border border-white/10 bg-[#101b36]/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#e4bf4a]/60"><p className="font-display text-xl text-[#f1cf66]">{s.split(' ')[0]}</p><p className="text-xs uppercase text-slate-300">{s.split(' ').slice(1).join(' ')}</p></div>)}</div>
        </div>
        <motion.div style={reduceMotion ? undefined : { x: parallax.x, y: parallax.y }} className="rounded-3xl border border-white/10 bg-[#101a34]/70 p-6 shadow-2xl backdrop-blur-2xl">
          <h3 id="login" className="font-display text-2xl text-white">Admin Access</h3>
          <p className="mt-2 text-sm text-slate-300">Guest mode is default. Login only for admission/application operations.</p>
          <form action={onSubmit} className="mt-6 space-y-4">
            <input name="username" required placeholder="Admin username" className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none transition focus:border-[#e4bf4a]" />
            <input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none transition focus:border-[#e4bf4a]" />
            {error && <p className="text-sm text-rose-300">{error}</p>}
            <button className="w-full rounded-xl bg-[#efcc61] px-5 py-3 font-semibold text-[#101a34] transition hover:scale-[1.01]">Login as Admin</button>
            <p className="text-xs text-slate-400">Helper: authorized administrators can approve/reject requests from the dashboard.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
