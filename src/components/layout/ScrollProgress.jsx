import { motion, useScroll, useSpring } from 'framer-motion'

// Thin progress bar fixed to the top of the viewport, fills as you scroll.

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-accent"
    />
  )
}