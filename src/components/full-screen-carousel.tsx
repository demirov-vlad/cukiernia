import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { useNavigate } from 'react-router-dom'

type FullScreenCarouselProps = {
  images: string[]
}

export const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({
  images,
}) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id='start'>
      <div className='relative container mx-auto max-w-xl py-10'>
        <Button
          className='absolute top-4 left-4 z-30 flex cursor-pointer items-center gap-2 !rounded-full bg-[#C4A484] px-4 py-2 text-xl text-white transition duration-300 hover:bg-[#A88A6C] md:-left-12'
          onClick={() => navigate('/')}
        >
          <ArrowLeft />
        </Button>
        <Carousel
          setApi={setApi}
          className='h-[calc(100dvh-155px)] md:h-[calc(100vh-185px)] md:max-w-xl'
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className='flex h-[70vh] max-w-full items-center justify-center md:h-[80vh]'
              >
                <iframe
                  src={`https://drive.google.com/file/d/${image}/preview`}
                  allow='autoplay'
                  className='h-full w-[90%]'
                ></iframe>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='!-bottom-4 left-6 cursor-pointer !rounded-full text-[#A88A6C] md:top-1/2 md:-left-12' />
          <CarouselNext className='right-6 !-bottom-4 cursor-pointer !rounded-full text-[#A88A6C] md:top-1/2 md:-right-12' />
          {/* Dot Indicator */}
          <div className='absolute !-bottom-4 left-1/2 flex -translate-1/2 justify-center space-x-2 md:bottom-1'>
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  current === index
                    ? 'w-4 bg-[#A88A6C]'
                    : 'bg-[#C4A484] opacity-75'
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
