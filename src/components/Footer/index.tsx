import Image from 'next/image'
import Link from 'next/link'

import { IconFacebook, IconInstagram, IconTwitter } from '@/utils/vector-icons'

import { menuNavList } from '@/shared/constants'
import { INavItem } from '@/shared/types'

import Form from './Form'

export default function Footer() {
  return (
    <div className="text-white">
      <div className="bg-dark py-16">
        <ul className="container flex w-full justify-between">
          <li className="flex items-start gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src="/images/hero.jpg" className="" alt="logo" fill />
            </div>
            <h4 className="text-3xl uppercase">
              Gulf Coast
              <br />
              Screens
            </h4>
          </li>
          <li className="grid grid-cols-2 gap-x-6">
            {menuNavList.map((item: INavItem, i) => (
              <Link key={i} href={item.href} className="link-underline text-2xl uppercase tracking-wider">
                {item.name}
              </Link>
            ))}
          </li>
          <li className="flex flex-col justify-between gap-4">
            <div>
              <p className="text-base font-normal opacity-[0.6]">Call or text us</p>
              <a className="text-base font-bold" href="tel:+19171234567">
                +1 917 1234567
              </a>
            </div>
            <div>
              <p className="text-base font-normal opacity-[0.6]">Email us anytime</p>
              <a className="text-base font-bold" href="mailto:support@GCS.com">
                support@GCS.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="/" rel="noreferrer" target="_blank">
                <IconFacebook width={50} height={50} />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <IconInstagram width={50} height={50} />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <IconTwitter width={50} height={50} />
              </a>
            </div>
          </li>
          <li className="max-w-[340px]">
            <Form />
          </li>
        </ul>
      </div>
      <div className="bg-[#191920]">
        <div className="container flex items-center justify-between">
          <p className="py-5 text-sm opacity-[0.8]">2024 Copyright / Jan 7, 2024. GCS | All Rights Reserved</p>
          <div className="flex gap-10">
            <Link href="/terms-of-use" className="text-sm underline opacity-[0.8] hover:opacity-[1]">
              Terms of use
            </Link>
            <Link href="/privacy-policy" className="text-sm underline opacity-[0.8] hover:opacity-[1]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
