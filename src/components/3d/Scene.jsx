import { Canvas } from '@react-three/fiber'
import FloatingObjects from './FloatingObjects'
import ParticleField from './ParticleField'

// The hero's 3D canvas. Rendered only on desktop with motion enabled —
// that decision lives in Hero.jsx (via useIsMobile / useReducedMotion),
// this component just assumes it's safe to run when mounted.

export default function Scene({ reducedMotion = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.6} />
      <FloatingObjects reducedMotion={reducedMotion} />
      <ParticleField reducedMotion={reducedMotion} />
    </Canvas>
  )
}