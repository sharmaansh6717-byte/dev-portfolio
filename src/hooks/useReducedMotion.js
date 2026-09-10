import { useEffect, useState } from 'react'

/**
 * Tracks the user's prefers-reduced-motion OS setting.
 * Components should check this before running JS-driven animations
 * (the CSS-level safety net in index.css handles pure-CSS transitions).
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return reduced
}