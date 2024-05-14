import { IconReviewStar, IconReviewStarFilled } from '@/utils/vector-icons'

export default function StarReview({ rating }: { rating: number }) {
  const starsQuantity = 5

  return (
    <div className="flex max-w-[76px] items-center justify-between">
      {[...Array(starsQuantity)].map((_, i) => (
        <div key={i}>{Math.round(rating) > i ? <IconReviewStarFilled /> : <IconReviewStar />}</div>
      ))}
    </div>
  )
}
