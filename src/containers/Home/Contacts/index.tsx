import Form from './ContactForm'

export default function Contacts() {
  return (
    <section className="h-screen min-h-[700px] bg-dark text-white">
      <div className="container pt-[60px]">
        <h6 className="mb-4 text-xl">CONTACTS</h6>
        <span className="mb-7 block h-[1px] bg-white/30" />
        <div className="relative flex justify-between">
          <h2 className="heading-underline relative relative w-full text-[80px] after:bg-white/30">
            Start Your Outdoor
            <br />
            Transformation Today
          </h2>
          <p className="absolute bottom-0 right-12 text-[15px] font-normal">
            Reach out to us for a consultation or with any questions.
            <br />
            We’re here to bring your outdoor dreams to life.
          </p>
        </div>
        <div className="flex w-full justify-end">
          <Form />
        </div>
      </div>
    </section>
  )
}
