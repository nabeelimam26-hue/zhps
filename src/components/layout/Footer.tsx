import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Linkedin, 
  Facebook, 
  Youtube,
  ArrowUp,
  Mail,
  Phone,
  MapPin
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
              <BookOpen className="size-5 text-gold-gradient" />
              <span className="font-display text-xl font-semibold text-white">
                Dr. Zakir<span className="text-gold-gradient"> Hussain</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-300/60">
              Empowering young minds with quality education, character building, and holistic development since 1975.
            </p>
            
            <div className="mt-4 space-y-2 text-sm text-slate-300/60">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-gold-gradient" />
                <span>Patna, Bihar, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-gold-gradient" />
                <a href="tel:+916120123456" className="transition hover:text-gold-gradient">
                  +91 612 012 3456
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-gold-gradient" />
                <a href="mailto:info@drzakirschool.edu" className="transition hover:text-gold-gradient">
                  info@drzakirschool.edu
                </a>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-4">
              <a 
                href="#" 
                className="rounded-full border border-white/10 p-2 text-slate-300/60 transition hover:border-gold-gradient/50 hover:text-gold-gradient"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
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
                aria-label="YouTube"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-slate-300/60">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Services', 'Admissions'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-300/60 transition hover:text-gold-gradient">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-slate-300/60">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              {['Contact', 'Showcase', 'Testimonials'].map((item) => (
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
            © {new Date().getFullYear()} Dr. Zakir Hussain Middle School. All rights reserved. | CBSE Affiliated
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
