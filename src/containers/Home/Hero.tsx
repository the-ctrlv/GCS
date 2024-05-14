'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen text-white">
      <Image src="/images/hero.jpg" alt="hero" fill />
      <div className="z-1 absolute h-full w-full bg-[#1B1B1E]/80" />

      <div className="container flex h-full flex-col justify-between">
        <h1
          className="heading-underline relative block pt-[87px] text-center text-[141px] font-normal
            uppercase after:-bottom-5 after:bg-white/30"
        >
          Gulf Coast Screens
        </h1>
        <div className="pb-14 text-2xl">
          <p className="max-w-sm">Elevate Your Outdoor Experience with Gulf Coast Screens Custom Enclosures</p>
        </div>
      </div>
      <div className="absolute bottom-14 left-1/2 h-[102px] -translate-x-1/2">
        <div className="relative mb-2 h-full w-[2px] overflow-hidden rounded-md bg-[#E9E5DC]/20">
          <div className="scroll-down absolute -top-[100%] block h-full w-full bg-white" />
        </div>
      </div>
    </section>
  )
}
