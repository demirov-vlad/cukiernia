import ScrollLink from '@/lib/helpers/scroll-link.tsx'

export const HeroSection = () => (
  <section id='start' className='relative h-[60vh] md:h-[89vh]'>
    <img
      src='https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/cukiernia-pavlova/hero'
      alt='Piekarnia'
      className='h-full w-full object-cover opacity-85'
    />
    <div className='bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/50'>
      <div className='text-center text-white'>
        <h1 className='mb-6 text-5xl font-bold md:text-7xl'>
          Anastasiia Pavlova
        </h1>
        <p className='mb-8 text-xl md:text-2xl'>
          Domowa cukernia. Słodycze tworzone z miłością.
        </p>
        <ScrollLink to='#oferta'>
          <p className='inline-block rounded-full bg-[#C4A484] px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-[#A88A6C]'>
            Zobacz naszą ofertę
          </p>
        </ScrollLink>
      </div>
    </div>
  </section>
)
