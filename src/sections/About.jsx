import { FaBullseye, FaAward, FaHandshake } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const cards = [
  {
    icon: FaBullseye,
    title: 'Missão',
    description:
      'Oferecer soluções técnicas eficientes e acessíveis, restaurando o funcionamento dos seus eletrodomésticos com agilidade e transparência.',
  },
  {
    icon: FaAward,
    title: 'Qualidade',
    description:
      'Utilizamos peças de qualidade e métodos profissionais em cada reparo, garantindo durabilidade e segurança no serviço prestado.',
  },
  {
    icon: FaHandshake,
    title: 'Compromisso',
    description:
      'Comprometidos com a satisfação do cliente, do primeiro contato até a entrega do equipamento em perfeito funcionamento.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sobre nós"
          title="Experiência e confiança em cada atendimento"
          subtitle="A Edy Micro é referência em assistência técnica de eletrodomésticos em Praia Grande, unindo experiência de mercado, qualidade nos reparos e um atendimento humanizado que coloca você em primeiro lugar."
        />

        <Reveal className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-slate-400 leading-relaxed text-lg">
            Com anos de experiência no setor, nossa equipe de técnicos especializados
            está preparada para diagnosticar e resolver os mais diversos problemas em
            microondas, geladeiras, máquinas de lavar, fornos e demais equipamentos
            residenciais. Oferecemos suporte técnico confiável, com orçamento claro e
            atendimento profissional do início ao fim.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={index * 0.1}>
                <article className="group glass rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-2xl text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{card.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
