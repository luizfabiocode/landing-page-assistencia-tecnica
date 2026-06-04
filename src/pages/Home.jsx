import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Differentials from '../sections/Differentials'
import ServiceArea from '../sections/ServiceArea'
import Reviews from '../sections/Reviews'
import CTA from '../sections/CTA'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <ServiceArea />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
