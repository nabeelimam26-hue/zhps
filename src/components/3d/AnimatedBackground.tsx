import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedBackgroundScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (groupRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        groupRef.current.rotation.x = y * 0.3;
        groupRef.current.rotation.y = x * 0.3;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <group ref={groupRef}>
      {/* Floating spheres */}
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 12) * Math.PI * 2) * 4,
            Math.sin((i / 12) * Math.PI * 2) * 4,
            Math.cos((i / 12) * Math.PI * 2) * 2,
          ]}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhongMaterial
            color={new THREE.Color().setHSL(i / 12, 0.7, 0.6)}
            emissive={new THREE.Color().setHSL(i / 12, 0.7, 0.3)}
            wireframe={false}
          />
        </mesh>
      ))}

      {/* Central rotating torus */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[3, 0.5, 16, 100]} />
        <meshPhongMaterial
          color="#d4af37"
          emissive="#a0860f"
          wireframe={false}
        />
      </mesh>

      {/* Ambient light */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#d4af37" />
    </group>
  );
};

export const AnimatedBackground = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 8], fov: 75 }}
    >
      <AnimatedBackgroundScene />
    </Canvas>
  );
};
