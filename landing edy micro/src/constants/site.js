export const SITE = {
  name: 'Edy Micro',
  phone: '(13) 99687-4223',
  phoneRaw: '5513996874223',
  location: 'Praia Grande - SP',
  email: 'contato@edymicro.com.br',
  rating: 5.0,
  reviewCount: 1,
}

export const WHATSAPP_URL = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar um orçamento para assistência técnica.'
)}`

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]
