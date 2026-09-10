import { lazy, Suspense } from 'react'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedText from '../ui/AnimatedText'
import MagneticButton from '../ui/MagneticButton'
import WavyBackground from '../ui/WavyBackground'
import { social } from '../../data/social'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// 3D scene is lazy-loaded and only mounted on desktop with motion enabled —
// mobile and reduced-motion users get WavyBackground alone, which is far cheaper.
const Scene = lazy(() => import('../3d/Scene'))

export default function Hero() {
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  const show3D = !isMobile && !reducedMotion

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-20"
    >
      <WavyBackground />

      {show3D && (
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      )}

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 text-sm tracking-widest2 text-text-muted"
        >
          DEVELOPER • BUILDER • PROBLEM SOLVER
        </motion.p>

        <AnimatedText
          as="h1"
          text={`Hi, I'm ${social.name}.`}
          className="font-display text-4xl font-semibold leading-tight text-text-primary sm:text-6xl"
          delay={0.15}
        />
        <AnimatedText
          as="p"
          text={social.tagline}
          className="mt-4 max-w-xl text-lg text-text-muted sm:text-xl"
          delay={0.5}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            View projects
          </MagneticButton>
          <MagneticButton href={social.resumeUrl} variant="ghost">
            Download resume
          </MagneticButton>

          <div className="ml-1 flex items-center gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary hover:border-accent"
            >
              <Github size={16} />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary hover:border-accent"
            >
              <Linkedin size={16} />
            </a>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-text-muted"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}