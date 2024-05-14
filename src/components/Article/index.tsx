import Image from 'next/image'

import { IArticle } from '@/shared/types'

export default function Article({ article }: { article: IArticle }) {
  return (
    <article className="flex h-full flex-col">
      <div className="flex h-full flex-col justify-start">
        <div className="relative mb-4 h-full max-h-[40vh] w-full">
          {article.badge && (
            <div className="bg-primary absolute left-0 top-0 z-10 flex h-[60px] w-[60px] items-center justify-center">
              <span className="text-[14px] font-semibold uppercase text-white">{article.badge}</span>
            </div>
          )}
          <Image
            src={article.image}
            alt={article.alt || `image-${article.title}`}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <h6 className="text-2xl font-normal uppercase text-dark">{article.title}</h6>
      </div>
    </article>
  )
}
