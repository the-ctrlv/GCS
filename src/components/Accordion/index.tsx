'use client'

import { useRef, useState } from 'react'

import useClickOutside from '@/hooks/useClickOutside'

import { IconAccordionPlus } from '@/utils/vector-icons'

export default function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isActive, setIsActive] = useState(false)
  const clickRef = useRef(null)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  useClickOutside(clickRef, () => setIsActive(false))

  return (
    <div
      className={`w-full cursor-pointer overflow-hidden border-b border-bGrayLight ${isActive ? 'isActive' : ''}`}
      ref={clickRef}
    >
      <div className="flex items-center justify-between pb-5 pt-7" onClick={toggleActive}>
        <p className="text-lg font-medium">{question}</p>
        <IconAccordionPlus className={`transition-all duration-200 ease-in-out ${isActive ? 'rotate-90' : ''}`} />
      </div>
      <div className={`transition-all duration-200 ease-in-out ${isActive ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <p className="text-md max-w-xl px-5 pb-5">{answer}</p>
      </div>
    </div>
  )
}
