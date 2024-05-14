'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import useWindowSize from '@/hooks/useWindowSize'

import { ISlide } from '@/shared/types'

import { gallerySlides } from './data'

export default function ImageSlider() {
  const [dynamicPadding, setDynamicPadding] = useState(0)
  const { width } = useWindowSize()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (width > 1420) {
      setDynamicPadding((width - 1320) / 2)
    } else {
      setDynamicPadding(50)
    }
    if (width < 768) {
      setDynamicPadding(24)
    }
  }, [width])

  return (
    <Swiper slidesPerView={2.9} spaceBetween={35} slidesOffsetBefore={dynamicPadding}>
      {gallerySlides.map((slide: ISlide, i) => (
        <SwiperSlide key={i}>
          <div className="flex h-full -translate-y-[10vh] flex-col justify-center">
            <div className="relative mb-4 h-full max-h-[40vh] w-full">
              <Image
                src={slide.image}
                alt={slide?.alt || `image-${i}`}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <span className="text-[14px] font-semibold uppercase text-dark">{slide.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
