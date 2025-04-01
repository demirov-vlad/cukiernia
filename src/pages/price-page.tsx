import { pricingImages } from '@/assets/images/prices/prices.ts'
import { FullScreenCarousel } from '@/components/full-screen-carousel.tsx'

export const PricePage = () => {
  return <FullScreenCarousel images={pricingImages} />
}
