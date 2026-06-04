import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import Button from '../components/Button'
import TechBackground from '../components/TechBackground'
import HeroVisual from '../components/HeroVisual'
import { WHATSAPP_URL, SITE } from '../constants/site'

const indicators = [
  'Atendimento rápido',
  'Técnicos especializados',
  'Orçamento transparente',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <TechBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-sm text-cyan-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HiSparkles className="text-cyan-400" />
              <span>Assistência técnica em {SITE.location}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="gradient-text">
                Assistência Técnica Especializada
              </span>
              <br />
              <span className="text-white">em Eletrodomésticos</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              Conserto rápido, atendimento profissional e suporte técnico confiável
              em Praia Grande e região.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href={WHATSAPP_URL} size="lg">
                Solicitar orçamento
              </Button>
              <Button href={WHATSAPP_URL} variant="whatsapp" icon={FaWhatsapp} size="lg">
                Chamar no WhatsApp
              </Button>
            </div>

            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              {indicators.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <FaCheckCircle className="text-cyan-400 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
