import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | NAKATANI',
  description: 'kanazawa AI starter へのご相談・お問い合わせはこちら',
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 pt-24 pb-20 min-h-[40vh] flex flex-col justify-center">
        <p className="text-[#c8a951] text-sm tracking-[0.45em] uppercase mb-6">Contact</p>
        <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.6] tracking-wide">
          ご相談・お問い合わせ
        </h1>
        <p className="font-sans text-[#9a9889] text-[13px] md:text-[14px] leading-[1.9] tracking-wide max-w-lg mt-6">
          AI活用・業務自動化・Web制作に関するご相談はお気軽にどうぞ。
          <br />
          通常2営業日以内にご返信いたします。
        </p>
      </section>

      {/* Form */}
      <section className="bg-[#faf8f3] px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
