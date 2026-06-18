import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  ArrowUp,
  Sparkles 
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/30 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-gold-gradient" />
              <span className="font-display text-xl font-semibold text-white">
                Studio<span className="text-gold-gradient">X</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-300/60">
              Creating premium digital experiences for brands that value trust, clarity, and velocity.
            </p>
            
            <div className="mt-4 flex space-x-4">
              <a 
                href="#" 
                className="rounded-full border border-white/10 p-2 text-slate-300/60 transition hover:border-gold-gradient/50 hover:text-gold-gradient"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </a>
              <a 
                href="#" 
                className="rounded-full border border-white/10 p-2 text-slate-300/60 transition hover:border-gold-gradient/50 hover:text-gold-gradient"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a 
                href="#" 
                className="rounded-full border border-white/10 p-2 text-slate-300/60 transition hover:border-gold-gradient/50 hover:text-gold-gradient"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a 
                href="#" 
                className="rounded-full border border-white/10 p-2 text-slate-300/60 transition hover:border-gold-gradient/50 hover:text-gold-gradient"
                aria-label="YouTube"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-slate-300/60">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {['UX/UI Design', 'Frontend Engineering', 'Growth Strategy'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-300/60 transition hover:text-gold-gradient">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-slate-300/60">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-300/60 transition hover:text-gold-gradient">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-300/40">
            © {new Date().getFullYear()} StudioX. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300/60 transition hover:border-gold-gradient/50 hover:text-gold-gradient"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Back to Top
            <ArrowUp className="size-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
