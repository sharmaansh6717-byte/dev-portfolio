import { motion } from 'framer-motion'
import { useMagnetic } from '../../hooks/useMagnetic'
import { useIsMobile } from '../../hooks/useIsMobile'

// Wraps a button/link with subtle cursor-attraction. Disabled on mobile
// automatically since there's no hover concept on touch.
// variant "primary" = filled accent, "ghost" = outlined.

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = 'ghost',
  className = '',
  ...props
}) {
  const { ref, offset, handlers } = useMagnetic(0.25)
  const isMobile = useIsMobile()

  const base =
    'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-hover'
      : 'border border-border text-text-primary hover:border-accent'

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      {...(isMobile ? {} : handlers)}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
      data-cursor="hover"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`${base} ${styles} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  )
}