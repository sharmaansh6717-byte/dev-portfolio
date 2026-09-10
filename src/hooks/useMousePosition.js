import { useEffect, useState } from 'react'

/**
 * Raw viewport mouse coordinates, plus normalized (-1 to 1) values
 * useful for driving 3D parallax and the wavy background.
 * Does nothing on touch devices (no mousemove events fire there anyway).
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0, normX: 0, normY: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2
      const normY = (e.clientY / window.innerHeight - 0.5) * 2
      setPosition({ x: e.clientX, y: e.clientY, normX, normY })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return position
}