import {
  FaClock,
  FaUserGraduate,
  FaHome,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const items = [
  {
    icon: FaClock,
    title: 'Atendimento rápido',
    description: 'Agilidade no diagnóstico e no reparo para você voltar à rotina logo.',
  },
  {
    icon: FaUserGraduate,
    title: 'Técnicos qualificados',
    description: 'Profissionais experientes e atualizados nas principais marcas.',
  },
  {
    icon: FaHome,
    title: 'Atendimento em domicílio',
    description: 'Comodidade de receber o técnico na sua residência quando necessário.',
  },
  {
    icon: FaShieldAlt,
    title: 'Garantia de serviço',
    description: 'Confiança no trabalho realizado com garantia nos reparos efetuados.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Orçamento transparente',
    description: 'Valores claros antes de iniciar qualquer intervenção no equipamento.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Praia Grande e região',
    description: 'Cobertura local ampla, com foco em Praia Grande e cidades próximas.',
  },
]

export default function Differentials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-cyan-950/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Diferenciais"
          title="Por que escolher a Edy Micro?"
          subtitle="Combinamos expertise técnica com um atendimento próximo e profissional."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300 group">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
