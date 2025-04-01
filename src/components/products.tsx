import { products } from '../const/data'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

export const ProductsSection = () => {
  const navigate = useNavigate()
  return (
    <section id='oferta' className='py-10'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-10 text-center text-4xl font-bold text-[#2C2C2C]'>
          Nasza oferta
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-8'>
          {products.map(product => (
            <Link
              to={`/produkt/${product.id}`}
              key={product.id}
              className='min-h-[384px] w-[343px] transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:scale-105 lg:w-[480px]'
            >
              <img
                src={product.image}
                alt={product.title}
                className='h-96 w-full object-cover'
              />
              <div className='flex items-center justify-between p-6'>
                <h3 className='text-2xl font-semibold text-[#2C2C2C]'>
                  {product.title}
                </h3>
                <Button
                  className='flex cursor-pointer items-center gap-2 !rounded-full bg-[#C4A484] px-4 py-2 text-xl text-white transition duration-300 hover:bg-[#A88A6C]'
                  onClick={() => navigate(`/produkt/${product.id}`)}
                >
                  <span className='text-sm'>Otwórz</span>
                  <ArrowRight />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
