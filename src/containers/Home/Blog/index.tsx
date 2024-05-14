import Article from '@/components/Article'
import GCSButton from '@/components/GCSButton'

import { blogData } from './data'

export default function Gallery() {
  return (
    <section className="section-light">
      <div className="container flex h-full flex-col">
        <div className="z-1 container flex flex-col pt-[60px]">
          <h6 className="mb-4 text-xl">BLOG</h6>
          <span className="mb-7 block h-[1px] bg-dark/30" />
          <div className="relative flex justify-between">
            <h2 className="heading-underline relative relative w-full text-[80px] after:bg-dark/30">
              Insights and Tips for Your Outdoor Space
            </h2>
          </div>
        </div>

        <div className="relative grid flex-grow grid-cols-12 pt-16">
          <div className="col-span-8 grid grid-cols-12 gap-4">
            {blogData.map((blog, i) => (
              <div key={i} className="col-span-6">
                <Article article={blog} />
              </div>
            ))}
          </div>
          <div className="col-span-4 flex flex-col  items-start gap-y-7 ps-10">
            <p className="text-[15px]">
              From maintenance advice to design ideas, our blog is a treasure trove of information to help you make the
              most of your outdoor areas.
            </p>
            <GCSButton>READ ALL ARTICLES</GCSButton>
          </div>
        </div>
      </div>
    </section>
  )
}
