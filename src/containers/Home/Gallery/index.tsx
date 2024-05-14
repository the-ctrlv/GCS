import GCSButton from '@/components/GCSButton'

import ImageSlider from './ImageSlider'

export default function Gallery() {
  return (
    <section className="section-light flex flex-col">
      <div className="container">
        <div className="z-1 container flex h-full flex-col pt-[60px]">
          <h6 className="mb-4 text-xl">GALLERY</h6>
          <span className="mb-7 block h-[1px] bg-dark/30" />
          <div className="relative flex justify-between">
            <h2 className="heading-underline relative relative w-full text-[80px] after:bg-dark/30">
              Explore Our
              <br />
              Craftsmanship
            </h2>
            <div className="absolute bottom-0 right-3">
              <p className="mb-4 max-w-md text-[15px] font-normal">
                Dive into our portfolio to see the range and quality of our work. Each project showcases our dedication
                to creating beautiful, customizable, and durable outdoor spaces
              </p>
              <GCSButton>SEE ALL</GCSButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-grow pt-14">
        <ImageSlider />
      </div>
    </section>
  )
}
