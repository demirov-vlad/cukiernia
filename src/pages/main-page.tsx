import { HeroSection } from '../components/hero.tsx'
import { ProductsSection } from '../components/products.tsx'
import { Wyroznia } from '../components/wyroznia.tsx'
import { About } from '../components/about.tsx'
import { Contact } from '../components/contact.tsx'

export const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <Wyroznia />
      <About />
      <Contact />
    </main>
  )
}
