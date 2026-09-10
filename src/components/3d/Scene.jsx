import { Canvas } from '@react-three/fiber'
import FloatingObjects from './FloatingObjects'
import ParticleField from './ParticleField'

export default function Scene({ reducedMotion = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      eventSource={document.body}
      eventPrefix="client"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.6} />
      <FloatingObjects reducedMotion={reducedMotion} />
      <ParticleField reducedMotion={reducedMotion} />
    </Canvas>
  )
}