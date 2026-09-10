import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { social } from '../../data/social'

// Kept intentionally short per the brief — no huge paragraph.
// Edit the three card bodies below to match your real background.

const cards = [
  {
    title: 'Who I am',
    body: `I'm a software engineer based in ${social.location}, interested in building things that are fast, useful, and a little bit delightful to use.`,
  },
  {
    title: 'Education',
    body: '[YOUR DEGREE], [YOUR UNIVERSITY] — [YEAR RANGE].',
  },
  {
    title: 'Currently learning',
    body: 'Deepening my understanding of applied machine learning and distributed systems.',
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 lg:px-20">
      <SectionHeading title="About" description="A short version of the long story." />

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <h3 className="mb-3 font-display text-base font-semibold text-text-primary">{card.title}</h3>
            <p className="text-sm text-text-muted">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}