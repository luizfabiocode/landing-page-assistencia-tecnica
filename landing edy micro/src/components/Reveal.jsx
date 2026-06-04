import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 32,
}) {
  const { ref, isVisible } = useScrollReveal()

  const offsets = {
    up: { y: amount },
    down: { y: -amount },
    left: { x: amount },
    right: { x: -amount },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
