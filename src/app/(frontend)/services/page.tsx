import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-[#0a0a0c]">
      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-24 pt-28 pb-20">
        <p className="text-[#c8a951] text-[10px] tracking-[0.45em] uppercase mb-6">
          Services
        </p>
        <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.55] tracking-wide mb-8">
          二つの提供形態
        </h1>
        <p className="font-sans text-[#9a9889] text-[13px] md:text-[14px] leading-[1.9] tracking-wide max-w-lg">
          「作る仕事」と「動かし続ける仕事」。<br />
          それぞれの形態に合わせたサービスを用意しています。
        </p>
      </section>

      {/* Divider */}
      <div className="mx-8 md:mx-16 lg:mx-24 h-px bg-[#2a2820]" />

      {/* Cards */}
      <section className="px-8 md:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {/* Build */}
        <Link
          href="/services/build"
          className="group border border-[#c8a951] p-10 md:p-12 flex flex-col gap-8 hover:bg-[#c8a951]/5 transition-colors duration-300"
        >
          <div className="flex flex-col gap-3">
            <span className="font-serif text-[#c8a951] text-4xl leading-none">壱</span>
            <p className="text-[#9a9889] text-[10px] tracking-[0.4em] uppercase mt-1">制作系</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-serif text-white text-xl tracking-wide">LP制作・Web開発</p>
            <p className="font-sans text-[#9a9889] text-[12px] leading-relaxed tracking-wide">
              スワイプ型LP・コーポレートサイト・<br />
              Next.js / PWA / Chrome拡張
            </p>
          </div>
          <span className="font-sans text-[#c8a951] text-[11px] tracking-[0.3em] mt-auto group-hover:translate-x-1 transition-transform duration-200">
            詳しく見る →
          </span>
        </Link>

        {/* Operate */}
        <Link
          href="/services/operate"
          className="group border border-[#c8a951] p-10 md:p-12 flex flex-col gap-8 hover:bg-[#c8a951]/5 transition-colors duration-300"
        >
          <div className="flex flex-col gap-3">
            <span className="font-serif text-[#c8a951] text-4xl leading-none">弐</span>
            <p className="text-[#9a9889] text-[10px] tracking-[0.4em] uppercase mt-1">運用・コンサル系</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-serif text-white text-xl tracking-wide">業務自動化・セミナー</p>
            <p className="font-sans text-[#9a9889] text-[12px] leading-relaxed tracking-wide">
              n8n / Make / Dify による自動化・<br />
              経営者向け生成AI研修
            </p>
          </div>
          <span className="font-sans text-[#c8a951] text-[11px] tracking-[0.3em] mt-auto group-hover:translate-x-1 transition-transform duration-200">
            詳しく見る →
          </span>
        </Link>
      </section>
    </main>
  )
}
