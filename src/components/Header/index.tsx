'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import GCSButton from '@/components/GCSButton'

import { IconGCS, IconFacebook, IconInstagram, IconTwitter } from '@/utils/vector-icons'

import { menuNavList } from '@/shared/constants'
import { INavItem } from '@/shared/types'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed left-0 top-0 z-10 w-full transition duration-500 ease-in-out
    ${isMenuOpen ? 'bg-dark/90' : 'h-[87px]'}`}
    >
      <div className="z-2 container relative flex items-center justify-between border-b border-white/30 py-5">
        <Link href="/">
          <IconGCS />
        </Link>
        <div
          className="flex-center absolute left-1/2 h-full w-14 -translate-x-1/2 cursor-pointer flex-col gap-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-[2px] w-full rounded-full bg-white transition-transform duration-500 ease-in-out
            ${isMenuOpen ? 'translate-y-[calc(0.5rem+1px)] rotate-45' : 'translate-y-0'}`}
          />

          <span
            className={`block h-[2px] w-full rounded-full bg-white transition-transform duration-500 ease-in-out
            ${isMenuOpen ? '-translate-y-[calc(0.5rem+1px)] -rotate-45' : 'translate-y-0'}`}
          />
        </div>

        <GCSButton isWhite>Get free estimate today</GCSButton>
      </div>
      <div
        className={`z-1 container fixed top-0 flex h-[calc(100vh-87px)] items-center text-white
        transition-all duration-500 ease-in-out
      ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
      `}
        style={{
          transform: `translate3d(0, ${isMenuOpen ? '0' : '-100%'}, 0)`,
        }}
      >
        <div className="flex w-full justify-between">
          <div className="grid w-full max-w-[50vw] grid-cols-2 gap-x-4 gap-y-6">
            {menuNavList.map((item: INavItem) => (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => setIsMenuOpen(false)}
                className="link-underline text-[80px]
              "
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-grow flex-col items-end justify-between py-8">
            <div className="flex flex-col gap-4">
              <a href="/" rel="noreferrer" target="_blank">
                <IconFacebook />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <IconInstagram />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <IconTwitter />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-y-4 text-end">
              <div>
                <span className="mb-1 block text-base font-normal text-white/60">Email us anytime</span>
                <a href="mailto:support@GCS.com" className="text-base font-bold">
                  support@GCS.com
                </a>
              </div>
              <div>
                <span className="mb-1 block text-base font-normal text-white/60">Call or text us</span>
                <a href="tel:+19171234567" className="text-base font-bold">
                  +1 917 1234567
                </a>
              </div>
              <div className="col-span-2">
                <span className="mb-1 block text-base font-normal text-white/60">Visit us</span>
                <p className="text-lg font-bold">20312 N Florida Ave, Unit B, Tampa FL 67890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
