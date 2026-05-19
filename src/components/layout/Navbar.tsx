import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/content';

export function Navbar() {
  const [isCompressed, setIsCompressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompressed(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto max-w-7xl rounded-3xl glass transition-all duration-500 ${
          isCompressed ? 'px-4 py-2.5 shadow-xl' : 'px-5 py-4 shadow-2xl'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="ZHPS home">
            <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 font-display text-sm font-bold tracking-wider text-gold-gradient">
              Z
            </span>
            <span className="font-display text-sm tracking-[0.35em] text-white/95">ZHPS</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 transition-all duration-300 hover:text-white hover:tracking-wide">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link to="/admin" className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/35 hover:bg-white/10 sm:inline-flex">
              Admin
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex rounded-full border border-white/20 bg-white/5 p-2 text-white md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-2 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-slate-200/85 transition hover:bg-white/10 hover:text-white" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
