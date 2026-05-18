import { Link } from 'react-router-dom';
import { navItems } from '../../data/content';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="ZHPS home">
          <span className="grid size-10 place-items-center rounded-full bg-cyan-300 text-sm font-black text-slate-950 shadow-lg shadow-cyan-300/20">
            Z
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">ZHPS</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <Link
          to="/admin"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
        >
          Admin
        </Link>
      </nav>
    </header>
  );
}
