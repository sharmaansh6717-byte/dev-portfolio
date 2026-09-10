import { motion } from 'framer-motion'

export default function TimelineItem({ entry, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative pb-10 pl-8"
    >
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-base" />
      {!isLast && <span className="absolute left-[4.5px] top-4 h-full w-px bg-border" />}

      <p className="mb-1 text-xs text-text-muted">{entry.date}</p>
      <h3 className="font-display text-lg font-semibold text-text-primary">{entry.role}</h3>
      <p className="mb-2 text-sm text-accent">{entry.organization}</p>
      <p className="mb-3 text-sm text-text-muted">{entry.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {entry.technologies.map((tech) => (
          <span key={tech} className="rounded border border-border px-2 py-0.5 text-xs text-text-muted">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}