import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { useLenis } from '../hooks/useLenis';

// Placeholder components - you'll replace these with actual imports later
const Services = () => <section id="services" className="py-20 px-4"><div className="max-w-7xl mx-auto"><h2 className="text-3xl font-bold">Our Services</h2></div></section>;
const Testimonials = () => <section id="testimonials" className="py-20 px-4"><div className="max-w-7xl mx-auto"><h2 className="text-3xl font-bold">Testimonials</h2></div></section>;
const Contact = () => <section id="contact" className="py-20 px-4"><div className="max-w-7xl mx-auto"><h2 className="text-3xl font-bold">Contact Us</h2></div></section>;
const Footer = () => <footer className="py-8 px-4 bg-gray-900"><div className="max-w-7xl mx-auto text-center">© 2026 Your Company</div></footer>;

export function LandingPage() {
  useLenis();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
