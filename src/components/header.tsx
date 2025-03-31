import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ScrollLink from '@/lib/helpers/scroll-link.tsx'
import logo from '/src/assets/images/logo.jpg'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='sticky top-0 z-50 overflow-visible bg-white shadow-md'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-bold text-[#2C2C2C] md:text-3xl'>
            <a href='/' className='flex items-center gap-5'>
              <img
                src={logo}
                alt='Logo'
                className='h-16 w-16 rounded-full object-cover md:h-24 md:w-24'
              />
              <div className='flex flex-col'>
                <span className='text-lg uppercase md:text-xl'>
                  DOMOWA CUKIERNIA
                </span>
                <span className='text-sm'>Miasto Tarnów</span>
              </div>
            </a>
          </div>
          <nav className='hidden space-x-8 text-lg md:flex'>
            <ScrollLink to='#o-nas'>O nas</ScrollLink>
            <ScrollLink to='#oferta'>Oferta</ScrollLink>
            <ScrollLink to='#galeria'>Cennik</ScrollLink>
            <ScrollLink to='#kontakt'>Kontakt</ScrollLink>
          </nav>
          <button
            className='text-[#2C2C2C] hover:text-[#C4A484] md:hidden'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-18 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className='container mx-auto flex flex-col items-center gap-5 space-y-2 px-4 py-4'>
          <ScrollLink to='#o-nas'>
            <span onClick={() => setIsMenuOpen(false)}>O nas</span>
          </ScrollLink>
          <ScrollLink to='#oferta'>
            <span onClick={() => setIsMenuOpen(false)}>Oferta</span>
          </ScrollLink>
          <ScrollLink to='#galeria'>
            <span onClick={() => setIsMenuOpen(false)}>Cennik</span>
          </ScrollLink>
          <ScrollLink to='#kontakt'>
            <span onClick={() => setIsMenuOpen(false)}>Kontakt</span>
          </ScrollLink>
        </nav>
      </div>
    </header>
  )
}
