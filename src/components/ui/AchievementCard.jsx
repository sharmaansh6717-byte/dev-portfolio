import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="mb-3 flex items-center justify-between">
        <Award size={18} className="text-accent" />
        <span className="text-xs text-text-muted">{achievement.date}</span>
      </div>
      <h3 className="mb-1 font-display text-base font-semibold text-text-primary">{achievement.title}</h3>
      <p className="mb-2 text-sm text-accent">{achievement.organization}</p>
      <p className="text-sm text-text-muted">{achievement.description}</p>
    </motion.div>
  )
}