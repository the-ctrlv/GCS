import Image from 'next/image'

import { IconStar } from '@/utils/vector-icons'

import { IReviewCard } from '@/shared/types'

import StarReview from './StarReview'

export default function Card({ review }: { review: IReviewCard }) {
  return (
    <article className="flex aspect-square h-full w-[460px] bg-white text-dark">
      <div className="relative m-6 border border-bGray/30 p-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative h-[90px] w-[90px]">
            <Image src={review.image} alt="placeholder" className="rounded-full" fill />
          </div>
          <div className="flex flex-col gap-2">
            <StarReview rating={review.review} />
            <span className="font-semibold uppercase">{review.author}</span>
          </div>
        </div>
        <p className="text-base font-normal">{review.description}</p>
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
    </article>
  )
}
