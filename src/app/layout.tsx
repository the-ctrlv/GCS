import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

import '@/shared/globals.scss'

export const metadata: Metadata = {
  title: 'GCS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-screen">
      <SmoothScrollProvider>
        <Header />
        {children}
        <Footer />
      </SmoothScrollProvider>
    </html>
  )
}
