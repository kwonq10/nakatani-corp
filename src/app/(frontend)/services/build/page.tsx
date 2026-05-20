import Link from 'next/link'

const painPoints = [
  'サイトはあるけど問い合わせが来ない',
  'LP制作を頼みたいが相場がわからない',
  'スマホで見やすいサイトにしたい',
]

const offerings = [
  {
    title: 'スワイプ型LP制作',
    price: '59,800円〜',
    desc: '1画面ずつ納得を積み上げる構成で、モバイルファーストの縦スクロールLPを制作。ヒアリングからコーディングまで一人で完結します。',
  },
  {
    title: '通常LP・コーポレートサイト制作',
    price: '応相談',
    desc: 'サービス紹介・採用・会社案内など。既存サイトのリニューアルにも対応。',
  },
  {
    title: 'Web・API開発',
    price: '応相談',
    desc: 'Next.js を中心に、PWA・Chrome拡張・外部API連携など。要件によって柔軟に対応します。',
  },
]

export default function BuildPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 pt-16 pb-20 min-h-[70vh] flex flex-col justify-center">
        <Link
          href="/services"
          className="inline-block font-sans text-[#9a9889] text-[10px] tracking-[0.35em] uppercase mb-12 hover:text-[#c8a951] transition-colors duration-200"
        >
          ← Services
        </Link>
        <p className="text-[#c8a951] text-sm tracking-[0.45em] uppercase mb-6">
          壱 / 制作系
        </p>
        <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.55] tracking-wide">
          成果物を納品する仕事
        </h1>
      </section>

      {/* Pain points */}
      <section className="bg-white px-8 md:px-16 lg:px-24" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <p className="text-[#9a9889] text-sm tracking-[0.45em] uppercase mb-10">
          こんな悩みはありませんか
        </p>
        <ul className="flex flex-col max-w-2xl">
          {painPoints.map((point, i) => (
            <li key={point} className={i !== 0 ? 'mt-12' : ''}>
              <div className="w-8 h-px bg-[#c8a951] mb-4" />
              <p className="font-sans text-[#0a0a0c] text-2xl leading-relaxed tracking-wide">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-[#c8a951]" />

      {/* Offerings */}
      <section className="bg-[#faf8f3] px-8 md:px-16 lg:px-24 pb-20" style={{ paddingTop: '24px' }}>
        <p className="text-[#9a9889] text-sm tracking-[0.45em] uppercase mb-10">提供内容</p>
        <div className="flex flex-col divide-y divide-[#2a2820]/30 max-w-3xl border border-[#2a2820]/30">
          {offerings.map(({ title, price, desc }) => (
            <div key={title} className="p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-5">
                <p className="font-serif text-[#0a0a0c] text-3xl tracking-wide">{title}</p>
                <span className="font-sans text-[#c8a951] text-[11px] tracking-widest">{price}</span>
              </div>
              <p className="font-sans text-[#9a9889] text-[13px] leading-[1.9] tracking-wide max-w-xl">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 py-20">
        <p className="text-[#c8a951] text-[10px] tracking-[0.45em] uppercase mb-6">Contact</p>
        <h2 className="font-serif text-white text-2xl md:text-3xl tracking-wide mb-10">
          まずは話してみませんか
        </h2>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#c8a951] text-[#0a0a0c] font-sans text-[12px] tracking-[0.2em] font-medium hover:bg-[#d4b96a] transition-colors duration-200"
        >
          無料相談
        </Link>
      </section>
    </main>
  )
}
