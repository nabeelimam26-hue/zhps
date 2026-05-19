import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
 codex/implement-global-design-system-and-hero-section-232u96
import { useLenis } from '../hooks/useLenis';
 main

export function LandingPage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
