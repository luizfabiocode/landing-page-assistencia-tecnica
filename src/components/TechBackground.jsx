import { motion } from 'framer-motion'

export default function TechBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400/60"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-1.5 h-1.5 rounded-full bg-blue-400/60"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-white/40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  )
}
