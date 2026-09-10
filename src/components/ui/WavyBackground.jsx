import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Soft blurred blobs behind the hero. Desktop: they parallax gently toward
// the cursor and drift on their own. Mobile / reduced-motion: static,
// no listeners attached, so there's zero perf cost.

const BLOBS = [
  { color: 'bg-blob-rose', size: 420, top: '-8%', left: '2%', depth: 30 },
  { color: 'bg-blob-amber', size: 360, top: '18%', left: '68%', depth: 45 },
  { color: 'bg-blob-violet', size: 340, top: '55%', left: '20%', depth: 60 },
  { color: 'bg-blob-coral', size: 300, top: '62%', left: '72%', depth: 38 },
]

function Blob({ blob, mouseX, mouseY, interactive }) {
  const x = useTransform(mouseX, (v) => v * blob.depth)
  const y = useTransform(mouseY, (v) => v * blob.depth)
  const springX = useSpring(x, { stiffness: 60, damping: 20 })
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <motion.div
      className={`absolute rounded-full ${blob.color} blur-[80px]`}
      style={{
        width: blob.size,
        height: blob.size,
        top: blob.top,
        left: blob.left,
        x: interactive ? springX : 0,
        y: interactive ? springY : 0,
      }}
      animate={
        interactive
          ? { scale: [1, 1.08, 1] }
          : undefined
      }
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function WavyBackground() {
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  const interactive = !isMobile && !reducedMotion

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (!interactive) return
    const handleMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [interactive, mouseX, mouseY])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 dark:opacity-30">
      {BLOBS.map((blob) => (
        <Blob key={blob.color} blob={blob} mouseX={mouseX} mouseY={mouseY} interactive={interactive} />
      ))}
    </div>
  )
}