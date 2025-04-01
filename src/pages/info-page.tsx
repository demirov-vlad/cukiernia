import { FullScreenCarousel } from '@/components/full-screen-carousel.tsx'
import { infoImages } from '@/assets/images/info/info.ts'

export const InfoPage = () => {
  return <FullScreenCarousel images={infoImages} />
}
