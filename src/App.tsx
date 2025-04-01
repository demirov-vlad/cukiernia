import { Footer } from './components/footer.tsx'
import { Header } from './components/header.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main-page.tsx'
import { ProductGalleryPage } from './pages/product-gallery-page.tsx'
import ScrollToTop from '@/lib/helpers/scroll-to-top.tsx'
import { PricePage } from '@/pages/price-page.tsx'
import { InfoPage } from '@/pages/info-page.tsx'

export function App() {
  return (
    <BrowserRouter>
      <div className='font-nunito bg-white'>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/produkt/:id' element={<ProductGalleryPage />} />
          <Route path='/cennik' element={<PricePage />} />
          <Route path='/info' element={<InfoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
