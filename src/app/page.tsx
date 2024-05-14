import Faq from '@/components/Faq'

import Blog from '@/containers/Home/Blog'
import Contacts from '@/containers/Home/Contacts'
import Gallery from '@/containers/Home/Gallery'
import Hero from '@/containers/Home/Hero'
import Reviews from '@/containers/Home/Reviews'
import Services from '@/containers/Home/Services'
import WhoWeAre from '@/containers/Home/WhoWeAre'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <Gallery />
      <Reviews />
      <Blog />
      <Contacts />
      <Faq />
    </>
  )
}
