import { FaWhatsapp, FaInstagram, FaFacebookF, FaPhone } from 'react-icons/fa'
import { NAV_LINKS, SITE, WHATSAPP_URL } from '../constants/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm">
                EM
              </div>
              <span className="text-lg font-bold text-white">{SITE.name}</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Assistência técnica especializada em eletrodomésticos. Qualidade,
              agilidade e transparência em Praia Grande e região.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links rápidos
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <FaPhone className="text-cyan-400 shrink-0" />
                <a href={`tel:+${SITE.phoneRaw}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Redes sociais
            </h4>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/30 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>{SITE.location}</p>
        </div>
      </div>
    </footer>
  )
}
