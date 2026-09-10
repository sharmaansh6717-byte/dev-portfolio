import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Staggered word-by-word reveal, used for the hero heading.
// as="h1" lets the caller control the semantic tag.

export default function AnimatedText({ text, as: Tag = 'h1', className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: delay },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <Tag className={className}>
      <motion.span variants={container} initial="hidden" animate="visible" className="inline">
        {words.map((w, i) => (
          <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
            {w}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}