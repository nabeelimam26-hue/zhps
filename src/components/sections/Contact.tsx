import { Mail } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center shadow-2xl shadow-cyan-950/25 backdrop-blur-2xl sm:p-12">
        <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
          <Mail className="size-7" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Ready to make your digital presence feel premium?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Tell us what you are building, where the experience feels stuck, and what a successful launch needs to accomplish.
        </p>
        <a
          href="mailto:hello@zhps.dev"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-2xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-200"
        >
          hello@zhps.dev
        </a>
      </Reveal>
    </section>
  );
}
