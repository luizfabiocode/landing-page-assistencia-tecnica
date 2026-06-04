import { motion } from 'framer-motion'
import { FaTools, FaBolt, FaShieldAlt } from 'react-icons/fa'
import mascot from '../assets/logo-mascot.png'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20 blur-2xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative glass-strong rounded-3xl p-6 sm:p-8 glow-blue overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

        <motion.img
          src={mascot}
          alt="Edy Micro - técnico especializado"
          className="relative z-10 w-full max-w-[280px] mx-auto drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div
          className="absolute top-6 left-6 glass rounded-xl px-3 py-2 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FaBolt className="text-cyan-400" />
          <span className="text-xs font-semibold text-white">Reparo rápido</span>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-4 glass rounded-xl px-3 py-2 flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <FaTools className="text-blue-400" />
          <span className="text-xs font-semibold text-white">Especialistas</span>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-6 glass rounded-xl px-3 py-2 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <FaShieldAlt className="text-emerald-400" />
          <span className="text-xs font-semibold text-white">Garantia</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 border border-cyan-500/20 rounded-2xl"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
