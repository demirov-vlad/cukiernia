import React, { useState } from 'react'
import { products } from '../const/data.ts'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ArrowLeft } from 'lucide-react'

interface Props {
  className?: string
}

export const ProductGalleryPage: React.FC<Props> = ({ className }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id || ''))
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!product || !product.gallery) {
    return <p className='text-center text-2xl'>Galeria nie znaleziony</p>
  }

  return (
    <div className={className}>
      <section id='start' className='py-10'>
        <div className='relative container mx-auto px-4'>
          <Button
            className='absolute top-0 left-4 mb-6 flex cursor-pointer items-center gap-2 !rounded-full bg-[#C4A484] px-4 py-2 text-xl text-white transition duration-300 hover:bg-[#A88A6C]'
            onClick={() => navigate('/')}
          >
            <ArrowLeft />
            <span className='hidden md:block'>Powrót na główną</span>
          </Button>
          <h2 className='mb-6 text-center text-4xl font-bold text-[#2C2C2C]'>
            {product.title}
          </h2>
          <p className='mb-6'>{product.description}</p>
          <div className='grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4'>
            {product.gallery.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <img
                    src={image}
                    alt={`${product.title} - zdjęcie ${index + 1}`}
                    className='h-64 w-full cursor-pointer rounded-lg object-cover shadow-lg transition duration-300 hover:scale-105 md:h-[428px]'
                    onClick={() => setSelectedImage(image)}
                  />
                </DialogTrigger>
                <DialogContent
                  aria-describedby={undefined}
                  className='max-w-4xl border-none p-0 text-white'
                >
                  <DialogTitle></DialogTitle>
                  <img
                    src={selectedImage || image}
                    alt='Fullscreen preview'
                    className='h-auto w-full rounded-lg'
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
