import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero3D } from '../components/sections/Hero3D';
import { About3D } from '../components/sections/About3D';
import { Showcase3D } from '../components/sections/Showcase3D';
import { Services3D } from '../components/sections/Services3D';
import { Admissions3D } from '../components/sections/Admissions3D';
import { Testimonials3D } from '../components/sections/Testimonials3D';
import { Contact3D } from '../components/sections/Contact3D';
import Lenis from 'lenis';
import { useEffect } from 'react';

export const LandingPage3D = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero3D />
        <About3D />
        <Showcase3D />
        <Services3D />
        <Admissions3D />
        <Testimonials3D />
        <Contact3D />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
