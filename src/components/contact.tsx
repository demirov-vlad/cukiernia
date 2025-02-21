import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export const Contact = () => (
  <section id='kontakt' className='pt-10 pb-2'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-10 text-center text-4xl font-bold text-[#2C2C2C]'>
        Kontakt
      </h2>
      <div className='flex items-center justify-center'>
        <div>
          <div className='flex flex-col flex-wrap justify-center gap-10 space-y-4 sm:flex-row'>
            <div className='flex min-w-[287px] items-center'>
              <MapPin className='mr-4 h-6 w-6 text-[#C4A484]' />
              <div>
                <p className='font-medium'>Adres</p>
                <a
                  href='https://www.google.com/maps/search/?q=ul.+Kilińskiego+18,+33-100+Tarnów'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='transition duration-300 hover:text-[#C4A484]'>
                    ul. Kilińskiego 18, 33-100 Tarnów
                  </span>
                </a>
              </div>
            </div>
            <div className='flex min-w-[287px] items-center'>
              <Phone className='mr-4 h-6 w-6 text-[#C4A484]' />
              <div>
                <p className='font-medium'>Telefon</p>
                <a href='tel:+48575384230'>
                  <span className='transition duration-300 hover:text-[#C4A484]'>
                    +48 57 538 42 30
                  </span>
                </a>
              </div>
            </div>
            <div className='flex min-w-[287px] items-center'>
              <Mail className='mr-4 h-6 w-6 text-[#C4A484]' />
              <div>
                <p className='font-medium'>Email</p>
                <a href='mailto:example@email.com'>
                  <span className='transition duration-300 hover:text-[#C4A484]'>
                    example@email.com
                  </span>
                </a>
              </div>
            </div>
            <div className='flex min-w-[287px] items-center'>
              <Clock className='mr-4 h-6 w-6 text-[#C4A484]' />
              <div>
                <p className='font-medium'>Godziny otwarcia</p>
                <p>Poniedziałek - Piątek: 6:00 - 19:00</p>
                <p>Sobota: 7:00 - 15:00</p>
                <p>Niedziela: nieczynne</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center gap-5 py-10 text-[#C4A484]'>
            <a
              href='https://www.instagram.com/pavlova.cakes.pl?igsh=bDFseDJrZ3RuaGF6'
              target='_blank'
              className='transition duration-300 hover:scale-125'
            >
              <Instagram className='h-10 w-10 cursor-pointer' />
            </a>
            <a
              href='https://www.facebook.com/share/1GppKM23EA/?mibextid=qi2Omg'
              target='_blank'
              className='transition duration-300 hover:scale-125'
            >
              <Facebook className='h-10 w-10 cursor-pointer' />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
