import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-cyan-500',
  secondary:
    'glass text-white hover:border-cyan-500/40 hover:bg-white/5',
  whatsapp:
    'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-500 hover:to-emerald-400',
  outline:
    'border border-white/15 text-white hover:border-cyan-400/50 hover:bg-cyan-500/5',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  size = 'md',
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="text-lg shrink-0" />}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
