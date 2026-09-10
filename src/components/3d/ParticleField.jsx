import { Sparkles } from '@react-three/drei'

// Faint ambient dust drifting through the scene. Uses drei's Sparkles
// rather than a hand-rolled BufferGeometry — same visual result, far less code.

export default function ParticleField({ reducedMotion = false }) {
  return (
    <Sparkles
      count={reducedMotion ? 0 : 60}
      scale={[8, 5, 4]}
      size={2}
      speed={reducedMotion ? 0 : 0.15}
      opacity={0.35}
      color="#9B8CFF"
    />
  )
}