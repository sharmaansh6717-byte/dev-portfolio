import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

// A handful of low-poly wireframe shapes drifting in the hero background.
// Kept sparse and monochrome (one accent + one highlight color) on purpose —
// this supports the text, it shouldn't compete with it.

function Shape({ geometry, position, scale = 1, color, wireframe = true }) {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        {geometry}
        <meshBasicMaterial color={color} wireframe={wireframe} transparent opacity={0.5} />
      </mesh>
    </Float>
  )
}

export default function FloatingObjects({ reducedMotion = false }) {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return
    // Whole group tilts gently toward the pointer — subtle, not distracting
    const { x, y } = state.pointer
    groupRef.current.rotation.y += (x * 0.15 - groupRef.current.rotation.y) * 0.02
    groupRef.current.rotation.x += (-y * 0.1 - groupRef.current.rotation.x) * 0.02
  })

  const accent = '#8274FF'
  const highlight = '#FFB86B'

  return (
    <group ref={groupRef}>
      <Shape geometry={<icosahedronGeometry args={[0.9, 0]} />} position={[2.4, 0.8, -1]} color={accent} />
      <Shape geometry={<torusGeometry args={[0.6, 0.18, 8, 32]} />} position={[-2.2, -0.6, -0.5]} color={accent} />
      <Shape geometry={<boxGeometry args={[0.7, 0.7, 0.7]} />} position={[1.6, -1.4, -1.5]} scale={0.8} color={highlight} />
      <Shape geometry={<octahedronGeometry args={[0.55, 0]} />} position={[-1.8, 1.6, -1]} color={accent} />
      <Shape geometry={<torusGeometry args={[0.35, 0.1, 8, 24]} />} position={[3, -0.4, -2]} scale={0.9} color={highlight} />
    </group>
  )
}