import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Users, label: 'Students', value: '850+' },
    { icon: Award, label: 'CBSE Result', value: '98.72%' },
    { icon: TrendingUp, label: 'Faculty', value: '32+' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 100 - 50,
            y: mousePosition.y * 100 - 50,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: (1 - mousePosition.x) * 100 - 50,
            y: (1 - mousePosition.y) * 100 - 50,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 text-gold text-sm font-semibold">
                ✨ Established 1975 • 50 Years of Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
                Empowering the
              </span>
              <br />
              <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
                Leaders of Tomorrow
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              Where tradition meets innovation. Experience world-class education with smart classrooms, cutting-edge labs, and personalized mentoring at DR ZAKIR HUSSAIN MIDDLE SCHOOL.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105">
                Apply for Admission
              </button>
              <button className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-300">
                Explore Our Legacy
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-gold/60 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-gold text-sm font-semibold">Scroll to Explore</p>
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
