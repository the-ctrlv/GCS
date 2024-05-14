export interface INavItem {
  name: string
  href: string
}

export interface IArticle {
  image: string
  alt?: string
  title: string
  badge?: string
}

export interface ISlide {
  title: string
  image: string
  alt?: string
}

export interface IReviewCard {
  image: string
  alt?: string
  author: string
  review: number
  description: string
}
