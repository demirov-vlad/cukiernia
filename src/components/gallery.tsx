import { gallery } from '../const/data.ts'

export const Gallery = () => (
  <section id='galeria' className='bg-[#F5F5F5] py-10'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-10 text-center text-4xl font-bold text-[#2C2C2C]'>
        Galeria
      </h2>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {gallery.map((image, index) => (
          <div
            key={index}
            className='aspect-square overflow-hidden rounded-lg shadow-lg'
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className='h-full w-full object-cover transition duration-300 hover:scale-110'
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)
