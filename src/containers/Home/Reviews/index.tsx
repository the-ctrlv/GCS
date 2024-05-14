import Card from './Card'
import { reviewData } from './data'

export default function Reviews() {
  return (
    <section className="relative flex h-screen min-h-[700px] flex-col overflow-hidden bg-dark text-white">
      <div className="z-1 container flex flex-col pt-[60px]">
        <h6 className="mb-4 text-xl">REVIEWS</h6>
        <span className="mb-7 block h-[1px] bg-white/30" />
      </div>
      <div
        className="absolute flex h-full w-full flex-grow
       items-center justify-center text-[185px] uppercase text-[#E9E5DC1A]"
      >
        <div className="text-center">
          <h2>Customer</h2>
          <h2>Satisfaction</h2>
          <h2>at Its Best</h2>
        </div>
      </div>
      {reviewData.map((review) => (
        <Card review={review} key={review.author} />
      ))}
    </section>
  )
}
