import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { WHATSAPP_URL } from '../constants/site'

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Precisa de assistência técnica confiável?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
                Entre em contato agora mesmo e solicite um orçamento.
              </p>
              <Button
                href={WHATSAPP_URL}
                variant="whatsapp"
                icon={FaWhatsapp}
                size="lg"
                className="!bg-white !text-emerald-700 !shadow-2xl hover:!from-white hover:!to-emerald-50 !from-white !to-white"
              >
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
