import { products } from '../const/data'

export const ProductsSection = () => (
  <section id='oferta' className='py-10'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-10 text-center text-4xl font-bold text-[#2C2C2C]'>
        Nasza oferta
      </h2>
      <div className='grid gap-8 md:grid-cols-3'>
        {products.map((product, index) => (
          <div
            key={index}
            className='transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:scale-105'
          >
            <img
              src={product.image}
              alt={product.title}
              className='h-96 w-full object-cover md:h-48 lg:h-80 xl:h-96'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-semibold text-[#2C2C2C]'>
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
