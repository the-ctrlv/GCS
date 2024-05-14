import Image from 'next/image'

import GCSButton from '@/components/GCSButton'

import { IconStar } from '@/utils/vector-icons'

export default function WhoWeAre() {
  return (
    <section className="flex h-screen min-h-[700px] items-center bg-white text-dark">
      <div className="container my-10 flex h-full h-screen max-h-[600px] border border-bGray/30">
        <div className="flex w-1/2 items-center justify-center">
          <div
            className="relative aspect-square w-[50%] translate-x-[15%] overflow-hidden rounded-full
          border border-bGray/30"
          >
            <Image src="/images/placeholder-img.jpg" alt="placeholder" className="rounded-full p-5" fill />
            <span className="absolute left-[63%] top-0 h-full w-full rounded-full bg-white" />
          </div>
          <div
            className="z-1 relative aspect-square w-[50%] -translate-x-[15%]
          overflow-hidden rounded-full border border-bGray/30 bg-white"
          >
            <Image src="/images/placeholder-img2.jpg" alt="placeholder" className="rounded-full p-5" fill />
          </div>
        </div>
        <span className="my-5 block w-[1px] bg-bGray/30" />
        <div className="w-1/2 px-6 py-10">
          <h5 className="mb-16 text-xl">Who we are</h5>
          <div className="flex w-full max-w-[540px] flex-col items-start gap-y-7">
            <h3 className="text-[60px] font-normal">
              Gulf Coast Screens:
              <br />
              Bringing Outdoor
              <br />
              Spaces in Tampa Bay.
            </h3>
            <p className="max-w-[80%] text-[15px]">
              With a commitment to quality and customer satisfaction, we specialize in transforming your pool and
              outdoor areas into stunning, functional spaces
            </p>
            <GCSButton>READ MORE</GCSButton>
          </div>
        </div>

        <div className="z-1 absolute -left-5 -top-5 bg-white p-4">
          <IconStar />
        </div>
        <div className="z-1 absolute -right-5 -top-5 bg-white p-4">
          <IconStar />
        </div>
        <div className="z-1 absolute -bottom-5 -left-5 bg-white p-4">
          <IconStar />
        </div>
        <div className="z-1 absolute -bottom-5 -right-5 bg-white p-4">
          <IconStar />
        </div>
      </div>
    </section>
  )
}
