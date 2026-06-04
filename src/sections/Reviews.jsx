import { FaStar, FaGoogle } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { SITE } from '../constants/site'

const reviews = [
  {
    text: 'Excelente atendimento e serviço rápido.',
    author: 'Cliente Google',
    date: 'Avaliação recente',
  },
  {
    text: 'Técnico muito profissional.',
    author: 'Maria S.',
    date: 'Praia Grande',
  },
  {
    text: 'Atendimento rápido e preço justo.',
    author: 'Carlos R.',
    date: 'Praia Grande',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-sm" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Avaliações"
          title="O que nossos clientes dizem"
          subtitle={`Nota ${SITE.rating.toFixed(1)} no Google — confiança construída com cada serviço realizado.`}
        />

        <Reveal className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-6 py-4">
            <FaGoogle className="text-2xl text-blue-400" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">{SITE.rating.toFixed(1)}</span>
                <Stars />
              </div>
              <p className="text-sm text-slate-400">
                Baseado em {SITE.reviewCount} avaliação no Google
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Reveal key={review.text} delay={index * 0.1}>
              <article className="glass rounded-2xl p-7 h-full flex flex-col hover:border-amber-500/20 transition-colors duration-300">
                <Stars />
                <p className="text-slate-200 leading-relaxed my-5 flex-grow italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-semibold text-white text-sm">{review.author}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{review.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
