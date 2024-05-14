'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import FadeInWrapper from '@/components/FadeInWrapper'
import GCSButton from '@/components/GCSButton'

import { IconStar } from '@/utils/vector-icons'

import { articles } from './data'

export default function Services() {
  const [currentArticle, setCurrentArticle] = useState<null | number>(null)
  const article = articles[currentArticle as number]

  const router = useRouter()

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-dark text-white">
      <div className="absolute left-0 top-0 h-full opacity-30">
        <FadeInWrapper animationKey={currentArticle as number}>
          <div
            className="h-full w-screen"
            style={{
              background: `url(${article?.image}) center center/cover no-repeat`,
            }}
          />
        </FadeInWrapper>
      </div>
      <div className="z-1 container flex h-full flex-col pt-[60px]">
        <h6 className="mb-4 text-xl">SERVICES</h6>
        <span className="mb-7 block h-[1px] bg-white/30" />
        <div className="flex flex-grow items-center justify-center">
          <div className="flex max-h-[400px] flex-grow -translate-y-[60px] justify-between">
            <div className="flex w-1/2 items-end">
              <FadeInWrapper animationKey={currentArticle as number}>
                <div>
                  <p className="mb-6 max-w-lg font-normal">{article?.text}</p>
                  {article?.button?.text && (
                    <GCSButton onClick={() => router.push(article.button.url)} isWhite>
                      {article?.button.text}
                    </GCSButton>
                  )}
                </div>
              </FadeInWrapper>
            </div>
            <div className="flex flex h-full w-1/2 flex-col items-center justify-between">
              <ul className="flex flex-col gap-y-10">
                {articles.map((item, i) => {
                  const activeColor = currentArticle === i ? '#E9E5DC' : '#e9e5dc99'

                  return (
                    <li key={i} className="flex cursor-pointer items-center gap-10">
                      <IconStar
                        fill={activeColor}
                        className={`transition-all duration-500
                       ${currentArticle === i ? 'rotate-180 scale-[1.3]' : 'rotate-none scale-1'}`}
                      />
                      <h3
                        onMouseEnter={() => setCurrentArticle(i)}
                        className="text-[80px]"
                        style={{
                          color: activeColor,
                        }}
                      >
                        {item.title}
                      </h3>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
