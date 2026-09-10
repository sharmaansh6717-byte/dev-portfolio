import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

// Small dot cursor that expands over anything with data-cursor="hover".
// Disabled entirely on mobile — component returns null so it never
// touches touch devices.

export default function CustomCursor() {
  const isMobile = useIsMobile()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })

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

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)

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
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        width: isHovering ? 48 : 10,
        height: isHovering ? 48 : 10,
        backgroundColor: isHovering ? 'rgb(var(--color-accent) / 0.15)' : 'rgb(var(--color-accent))',
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  )
}