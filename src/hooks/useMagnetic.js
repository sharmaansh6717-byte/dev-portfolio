import { useRef, useState } from 'react'

/**
 * Gives an element subtle magnetic attraction toward the cursor when nearby.
 * Attach `ref` to the element and spread `handlers` onto it, then use
 * `offset` to drive a Framer Motion transform (see MagneticButton.jsx).
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handlers = {
    onMouseMove: (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setOffset({
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
      })
    },
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
  }

  return { ref, offset, handlers }
}