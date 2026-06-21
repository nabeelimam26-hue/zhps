import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import TiltedCard from '../ui/TiltedCard';
import '../ui/TiltedCard.css';

const showcaseItems = [
  {
    id: 1,
    title: 'Main Campus',
    description: 'State-of-the-art infrastructure with modern facilities',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=600&fit=crop',
    alt: 'School Building'
  },
  {
    id: 2,
    title: 'Smart Classrooms',
    description: 'Digital learning environments for enhanced education',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop',
    alt: 'Smart Classroom'
  },
  {
    id: 3,
    title: 'Sports Excellence',
    description: 'World-class facilities for holistic development',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=600&fit=crop',
    alt: 'Sports Facilities'
  },
];

export function Showcase() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="showcase" className="relative px-4 py-20 sm:px-6 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] text-amber-400/90 uppercase">
            Our Campus
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Explore Our{' '}
            <span className="text-gold-gradient">School</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300/75">
            Discover the learning environment that shapes future leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltedCard
                imageSrc={item.image}
                altText={item.alt}
                captionText={item.title}
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={8}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                    <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300/80">{item.description}</p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}