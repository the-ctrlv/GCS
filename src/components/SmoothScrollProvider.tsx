'use client'

import { useEffect, useMemo, useRef } from 'react'
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll'

import { Inter, Genos } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'

import { GsapScrollTrigger } from '@/shared/context'
import '@/shared/locomotive-scroll.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const genos = Genos({
  subsets: ['latin'],
  variable: '--font-genos',
})

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!gsap) return
    gsap.registerPlugin(ScrollTrigger)
  }, [pathname])

  const contextValueProvider = useMemo(() => ({ gsap, ScrollTrigger }), [])

  return (
    <RLSProvider
      options={{
        smooth: true,
        lerp: 0.1,
        multiplier: 0.5,
      }}
      // watch={
      //   [
      //     //...all the dependencies you want to watch to update the scroll EXCEPT the location one
      //   ]
      // }
      location={pathname}
      containerRef={containerRef}
      onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0 })}
      // onUpdate={() => console.log('Updated, but not on location change!')}
    >
      <GsapScrollTrigger.Provider value={contextValueProvider}>
        <body className={`text-dark ${inter.variable} ${genos.variable}`} data-scroll-container ref={containerRef}>
          {children}
        </body>
      </GsapScrollTrigger.Provider>
    </RLSProvider>
  )
}
