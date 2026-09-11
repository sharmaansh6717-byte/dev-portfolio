import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

// Position tracking is instant (no spring) so the dot never feels like
// it's trailing behind the real cursor. Only the hover-grow size change
// is springy, since that's a state transition, not continuous tracking.

export default function CustomCursor() {
  const isMobile = useIsMobile()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const sizeSpring = { stiffness: 400, damping: 28, mass: 0.4 }

  useEffect(() => {
    if (isMobile) return

    document.body.classList.add('custom-cursor-active')

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleOver = (e) => {
      setIsHovering(!!e.target.closest('[data-cursor="hover"]'))
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [isMobile, isVisible, x, y])

  if (isMobile) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-accent mix-blend-difference"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
        willChange: 'transform',
      }}
      animate={{
        width: isHovering ? 48 : 10,
        height: isHovering ? 48 : 10,
        backgroundColor: isHovering ? 'rgb(var(--color-accent) / 0.15)' : 'rgb(var(--color-accent))',
      }}
      transition={sizeSpring}
    />
  )
}