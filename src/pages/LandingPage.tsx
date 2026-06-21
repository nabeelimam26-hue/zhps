import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Admissions } from '../components/sections/Admissions';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { Showcase } from '../components/sections/Showcase';
import { useLenis } from '../hooks/useLenis';

export function LandingPage() {
  useLenis();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Admissions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}