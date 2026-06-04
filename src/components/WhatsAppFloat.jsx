import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../constants/site'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-500/40 glow-cyan"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chamar no WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20" />
    </motion.a>
  )
}
