import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view, for the Navbar's active-link highlight.
 * sectionIds must match the actual element `id` attributes in the page.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those visible
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveId(topMost.target.id)
        }
      },
      {
        // Section counts as "active" once it's within the middle band of the viewport
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}