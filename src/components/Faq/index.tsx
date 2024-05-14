import Accordion from '../Accordion'
import { faqData } from './data'

export default function Faq() {
  return (
    <section className="h-screen min-h-[700px] bg-white">
      <div className="container pt-[60px]">
        <h6 className="mb-4 text-xl">FAQ</h6>
        <span className="mb-7 block h-[1px] bg-dark/30" />
        <div className="flex justify-between">
          <h2 className="text-[80px]">
            Frequently
            <br />
            Asked
            <br />
            Question
          </h2>
          <ul className="w-full max-w-[880px]">
            {faqData.map((item, i) => (
              <Accordion key={i} question={item.q} answer={item.a} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
