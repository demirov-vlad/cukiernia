import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
                src='https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/cukiernia-pavlova/logo'
                alt='Logo'
                className='h-16 rounded-full md:h-24'
              />
              <div className='flex flex-col'>
                <span className='uppercase'>CUKIERNIA</span>
                <span className='text-sm'>Miasto Tarnów</span>
              </div>
            </a>
          </div>
          <nav className='hidden space-x-8 text-lg md:flex'>
            <a
              href='#o-nas'
              className='font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            >
              O nas
            </a>
            <a
              href='#oferta'
              className='font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            >
              Oferta
            </a>
            <a
              href='#galeria'
              className='font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            >
              Galeria
            </a>
            <a
              href='#kontakt'
              className='font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            >
              Kontakt
            </a>
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
        <nav className='container mx-auto flex flex-col items-center space-y-2 px-4 py-4'>
          <a
            href='#start'
            className='py-2 font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            onClick={() => setIsMenuOpen(false)}
          >
            Start
          </a>
          <a
            href='#o-nas'
            className='py-2 font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            onClick={() => setIsMenuOpen(false)}
          >
            O nas
          </a>
          <a
            href='#oferta'
            className='py-2 font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            onClick={() => setIsMenuOpen(false)}
          >
            Oferta
          </a>
          <a
            href='#galeria'
            className='py-2 font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            onClick={() => setIsMenuOpen(false)}
          >
            Galeria
          </a>
          <a
            href='#kontakt'
            className='py-2 font-medium text-[#2C2C2C] hover:text-[#C4A484]'
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  )
}
