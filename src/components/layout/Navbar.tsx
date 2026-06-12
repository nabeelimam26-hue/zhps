import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/content';
import { useAuth } from '../../auth';

export function Navbar() {
  const [isCompressed, setIsCompressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { role, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setIsCompressed(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className={`mx-auto max-w-6xl rounded-[1.3rem] border border-white/10 bg-[#0c1833]/85 backdrop-blur-xl transition-all duration-500 ${isCompressed ? 'px-4 py-2.5' : 'px-5 py-4'}`}>
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="ZHPS home">
            <span className="grid size-10 place-items-center rounded-xl bg-[#d7b446] font-display text-sm font-bold text-[#0c1632]">⌂</span>
            <span className="font-display text-sm tracking-wide text-white/95">Dr. Zakir Hussain</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-200/80 transition-all duration-300 hover:text-[#f2cf66]">{item.label}</a>)}</div>
          <div className="flex items-center gap-2">
            {role === 'admin' ? <><Link to="/admin" className="rounded-full bg-[#f1cd60] px-4 py-2 text-sm font-semibold text-[#111a32]">Dashboard</Link><button onClick={logout} className="rounded-full border border-white/20 px-4 py-2 text-sm">Logout</button></> : <a href="#login" className="rounded-full bg-[#f1cd60] px-4 py-2 text-sm font-semibold text-[#111a32]">Admin Login</a>}
            <button type="button" onClick={() => setIsOpen((v) => !v)} className="inline-flex rounded-full border border-white/20 bg-white/5 p-2 text-white md:hidden" aria-label="Toggle menu" aria-expanded={isOpen}>{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
