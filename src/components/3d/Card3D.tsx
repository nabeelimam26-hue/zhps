import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  delay?: number;
}

export const Card3D = ({ title, description, icon, image, delay = 0 }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * 10;
    const rotY = ((centerX - x) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/80" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="text-4xl text-gold drop-shadow-lg">{icon}</div>
          <div className="w-1 h-12 bg-gradient-to-b from-gold to-transparent rounded-full" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md">{description}</p>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-gold/20 group-hover:border-gold/50 transition-colors duration-300" />
    </motion.div>
  );
};
