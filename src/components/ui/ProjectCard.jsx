import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

// Hover tilt is capped small (max 6deg) — enough to feel alive,
// not enough to feel gimmicky. Disabled implicitly on touch since
// there's no mousemove-while-hovering on those devices.

export default function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -6, y: px * 6 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(project)}
      data-cursor="hover"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden bg-border">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <span className="absolute left-3 top-3 font-display text-xs text-text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
          <ArrowUpRight
            size={18}
            className="text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <p className="mb-4 text-sm text-text-muted">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded border border-border px-2 py-0.5 text-xs text-text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 text-sm">
          {project.github && project.github !== '#' && (
            
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-text-muted hover:text-accent"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-text-muted hover:text-accent"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}