import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  const { ref, isVisible } = useScrollReveal()

  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mb-14 md:mb-16 ${alignClass}`}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
