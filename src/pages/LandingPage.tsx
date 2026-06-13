import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { useLenis } from '../hooks/useLenis';

export function LandingPage() {
  useLenis();

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
