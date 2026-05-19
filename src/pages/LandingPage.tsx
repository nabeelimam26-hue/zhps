import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';

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
