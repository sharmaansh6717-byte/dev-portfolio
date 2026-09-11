import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Large showcase for the one project marked featured: true in projects.js.
// Numbered marker is appropriate here since it's genuinely singled out
// as "the" featured piece, not a generic list.

export default function FeaturedProject({ project, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(project)}
      data-cursor="hover"
      className="group grid cursor-pointer gap-8 rounded-lg border border-border bg-surface p-6 shadow-sm transition-all hover:border-accent hover:shadow-md dark:shadow-none sm:p-10 lg:grid-cols-2 lg:gap-12"
    >
      <div className="flex flex-col justify-center">
        <span className="mb-4 font-display text-sm text-text-muted">01</span>
        <h3 className="mb-2 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          {project.title}
        </h3>
        <p className="mb-6 text-sm uppercase tracking-widest2 text-accent">{project.tagline}</p>

        <div className="mb-6 space-y-4">
          {project.problem && (
            <div>
              <p className="mb-1 text-xs text-text-muted">Problem</p>
              <p className="text-sm text-text-primary">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <p className="mb-1 text-xs text-text-muted">Solution</p>
              <p className="text-sm text-text-primary">{project.solution}</p>
            </div>
          )}
          {project.result && (
            <div>
              <p className="mb-1 text-xs text-text-muted">Result</p>
              <p className="text-sm text-text-primary">{project.result}</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-sm text-text-primary">
          View details
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-md border border-border bg-base">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
    </motion.div>
  )
}