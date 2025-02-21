import { Footer } from './components/footer.tsx'
import { Header } from './components/header.tsx'
import { HeroSection } from './components/hero.tsx'
import { ProductsSection } from './components/products.tsx'
import { Wyroznia } from './components/wyroznia.tsx'
import { About } from './components/about.tsx'
import { Gallery } from './components/gallery.tsx'
import { Contact } from './components/contact.tsx'

export function App() {
  return (
    <div className='font-nunito bg-white'>
      <Header />
      <HeroSection />
      <ProductsSection />
      <Wyroznia />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
