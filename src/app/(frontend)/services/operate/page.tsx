import Link from 'next/link'

const painPoints = [
  '毎日の繰り返し作業に時間を取られている',
  'AIを導入したいが何から始めればいいかわからない',
  '社員にAIの使い方を教えたい',
]

const offerings = [
  {
    label: '自動化',
    title: '業務自動化コンサル',
    price: '応相談',
    desc: 'n8n・Make・Difyで業務を仕組みに変える。現状の洗い出しから設計・構築まで伴走します。',
  },
  {
    label: '顧問',
    title: '月額顧問契約',
    price: '月額30,000円〜',
    desc: '継続的な改善サポートで伴走する。月1回のMTG＋Slackでの随時相談に対応します。',
  },
  {
    label: '研修',
    title: '経営者向け生成AI研修',
    price: '応相談',
    desc: '社内研修・セミナー登壇。現場で使えるプロンプト設計から業務活用まで実践的に伝えます。',
  },
]

export default function OperatePage() {
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
          弐 / 運用・コンサル系
        </p>
        <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.55] tracking-wide">
          知見と仕組みを渡す仕事
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          {offerings.map(({ label, title, price, desc }) => (
            <div
              key={title}
              className="border border-[#2a2820] rounded-sm p-8 bg-white flex flex-col gap-4"
            >
              <span className="font-sans text-[#c8a951] text-[10px] tracking-[0.4em] uppercase">
                {label}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-[#0a0a0c] text-xl tracking-wide leading-snug">
                  {title}
                </p>
                <span className="font-sans text-[#c8a951] text-[11px] tracking-widest">
                  {price}
                </span>
              </div>
              <p className="font-sans text-[#9a9889] text-[12px] leading-[1.9] tracking-wide">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 py-14">
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
