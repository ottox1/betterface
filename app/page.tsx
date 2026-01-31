import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Process />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
