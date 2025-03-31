export const About = () => (
  <section id='o-nas' className='bg-[#F5F5F5] pt-10 pb-16'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-10 text-center text-4xl font-bold text-[#2C2C2C]'>
        O nas
      </h2>
      <div className='grid md:grid-cols-2 md:gap-10'>
        <div>
          <img
            src='https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/cukiernia-pavlova/about'
            alt='Nasze wypieki'
            className='hidden w-full items-center rounded-xl object-cover opacity-90 shadow-xl md:block md:h-90 lg:h-80'
          />
        </div>
        <div className='space-y-6 self-center'>
          <h3 className='text-2xl font-semibold text-[#2C2C2C]'>
            Anastasiia Pavlova
          </h3>
          <p className='leading-relaxed text-gray-700'>
            Cześć! Nazywam się Anastasiia i witam Cię na mojej stronie! Tworzę
            wyjątkowe torty i desery na każdą okazję – urodziny, wesela,
            chrzciny, jubileusze i inne ważne chwile. Każde moje wypieki
            powstają z pasją i dbałością o każdy detal. Używam wyłącznie
            naturalnych składników, aby zapewnić nie tylko piękny wygląd, ale
            przede wszystkim doskonały smak. Jeśli szukasz tortu, który zachwyci
            Twoich gości – jesteś we właściwym miejscu! Zapraszam do kontaktu i
            wspólnego stworzenia słodkiej niespodzianki!
          </p>
        </div>
      </div>
    </div>
  </section>
)
