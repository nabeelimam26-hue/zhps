import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { Contact } from '../components/sections/Contact';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { useLenis } from '../hooks/useLenis';

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
