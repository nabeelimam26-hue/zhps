import { Link } from 'react-router-dom';
import { AnimatedBackground } from '../components/layout/AnimatedBackground';

export function AdminPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="grid min-h-screen place-items-center px-4 py-16 text-white">
        <section className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center shadow-2xl shadow-cyan-950/25 backdrop-blur-2xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Admin</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Admin portal placeholder</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This route is ready for authentication, dashboards, and content tools when the admin experience is defined.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Back to landing page
          </Link>
        </section>
      </main>
    </>
  );
}
