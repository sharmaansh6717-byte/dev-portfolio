import { AnimatePresence, motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const handleKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-base/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-border bg-surface p-6 shadow-xl sm:p-8 dark:shadow-none"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs text-text-muted">{project.category}</p>
                <h3 className="font-display text-2xl font-semibold text-text-primary">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                data-cursor="hover"
                className="rounded-full border border-border p-2 text-text-muted hover:border-accent hover:text-text-primary"
              >
                <X size={16} />
              </button>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="mb-6 aspect-video w-full rounded-md border border-border object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />

            <p className="mb-6 text-text-muted">{project.longDescription || project.description}</p>

            {(project.problem || project.solution || project.result) && (
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
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
                  <div className="sm:col-span-2">
                    <p className="mb-1 text-xs text-text-muted">Result</p>
                    <p className="text-sm text-text-primary">{project.result}</p>
                  </div>
                )}
              </div>
            )}

            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded border border-border px-2 py-1 text-xs text-text-muted">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-text-primary hover:border-accent"
                >

                  <Github size={14} /> View code
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm text-white hover:bg-accent-hover"
                >
                  <ExternalLink size={14} /> Live demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}