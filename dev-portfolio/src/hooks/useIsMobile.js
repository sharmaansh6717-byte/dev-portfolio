import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * True on small/touch screens. Used to disable the custom cursor
 * and simplify the 3D scene, per the brief's mobile requirements.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}