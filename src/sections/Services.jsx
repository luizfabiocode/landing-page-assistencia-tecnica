import {
  MdMicrowave,
  MdKitchen,
  MdLocalLaundryService,
  MdOutlineMicrowave,
  MdHomeRepairService,
  MdBuild,
} from 'react-icons/md'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const services = [
  {
    icon: MdMicrowave,
    title: 'Conserto de Microondas',
    description:
      'Diagnóstico e reparo de microondas de todas as marcas, incluindo Electrolux, Brastemp, Panasonic e mais.',
  },
  {
    icon: MdKitchen,
    title: 'Geladeiras',
    description:
      'Manutenção e conserto de geladeiras e freezers — problemas de refrigeração, vazamentos e componentes elétricos.',
  },
  {
    icon: MdLocalLaundryService,
    title: 'Máquinas de lavar',
    description:
      'Reparo de máquinas de lavar roupa e lava e seca: motor, bomba, placa eletrônica e vedações.',
  },
  {
    icon: MdOutlineMicrowave,
    title: 'Fornos elétricos',
    description:
      'Assistência em fornos elétricos embutidos e de bancada, com foco em segurança e desempenho.',
  },
  {
    icon: MdHomeRepairService,
    title: 'Assistência residencial',
    description:
      'Atendimento completo para eletrodomésticos da sua casa, com visita técnica e suporte personalizado.',
  },
  {
    icon: MdBuild,
    title: 'Manutenção preventiva',
    description:
      'Inspeções periódicas para evitar panes, prolongar a vida útil dos equipamentos e reduzir custos.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Serviços"
          title="Soluções completas para seus eletrodomésticos"
          subtitle="Atendemos as principais necessidades de reparo e manutenção com técnicos qualificados e equipamentos adequados."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="group relative glass rounded-2xl p-7 h-full overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="text-2xl text-blue-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
