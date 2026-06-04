import { FaMapMarkerAlt, FaCity } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const cities = [
  'Praia Grande',
  'Santos',
  'São Vicente',
  'Guarujá',
  'Mongaguá',
  'Itanhaém',
  'Peruíbe',
]

export default function ServiceArea() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Área de atendimento"
          title="Atendimento em Praia Grande e proximidades"
          subtitle="Levamos assistência técnica especializada até você, com cobertura na Baixada Santista."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Região de cobertura</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Atendemos residências e comércios em Praia Grande e municípios
                    vizinhos da região litorânea de São Paulo, com deslocamento ágil
                    e horários flexíveis.
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-3">
                {cities.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2 text-sm text-slate-300 px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                  >
                    <FaCity className="text-blue-400 text-xs shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass glow-blue">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M80 180 Q120 120 180 100 T280 90 Q340 110 360 160 Q350 220 280 240 Q200 260 120 230 Z"
                  fill="url(#mapGrad)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                />
                <circle cx="200" cy="165" r="8" fill="#22d3ee" className="animate-pulse" />
                <circle cx="200" cy="165" r="20" fill="none" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <FaMapMarkerAlt className="text-4xl text-cyan-400 mb-3" />
                <p className="text-2xl font-bold text-white">Praia Grande</p>
                <p className="text-sm text-slate-400 mt-1">Baixada Santista — SP</p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-500">
                <span>Litoral SP</span>
                <span>Região metropolitana</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
