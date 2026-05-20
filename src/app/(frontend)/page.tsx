import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0a0a0c] flex flex-col px-8 md:px-16 lg:px-24 pt-28 pb-16">

        {/* EST. badge — pt-28 で Header(64px) の下に十分な余白を確保 */}
        <p className="text-[#c8a951] text-[10px] tracking-[0.4em] uppercase">
          Est. 2024 — Kanazawa, Ishikawa
        </p>

        {/* Main content: copy + vertical label */}
        <div className="flex items-end justify-between mt-16 md:mt-24 lg:mt-32">

          {/* Left: copy block */}
          <div className="flex flex-col gap-10 max-w-2xl">

            {/* Main copy — clamp(40px, 6vw, 72px) */}
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.6] tracking-wider text-white">
              ことばと実装を、
              <br />
              <span className="text-[#c8a951]">金沢から</span>つなぐ。
            </h1>

            {/* Sub copy */}
            <p className="text-[#e8e6df] text-[14px] md:text-[15px] leading-[1.9] tracking-wide max-w-md font-sans">
              生成AI・業務自動化・Web制作。
              <br className="hidden md:block" />
              中小企業の「人がやらなくていい仕事」を、
              <br className="hidden md:block" />
              ことばで整理し、仕組みで動かす。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#c8a951] text-[#0a0a0c] text-[12px] tracking-[0.2em] font-medium hover:bg-[#d4b96a] transition-colors duration-200"
              >
                無料相談
              </Link>
              <Link
                href="#works"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#c8a951] text-[#c8a951] text-[12px] tracking-[0.2em] hover:bg-[#c8a951]/10 transition-colors duration-200"
              >
                実績を見る
              </Link>
            </div>
          </div>

          {/* Right: vertical label */}
          <div
            className="hidden lg:flex items-center justify-center ml-16 shrink-0"
            style={{ writingMode: 'vertical-rl' }}
          >
            <span className="text-[#9a9889] text-[10px] tracking-[0.35em] uppercase">
              Nakatani Kenichi — AI Consultant
            </span>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 md:mt-28 w-12 h-px bg-[#c8a951] opacity-60" />
      </section>

      {/* Section divider */}
      <div className="w-full h-px bg-[#c8a951]" />

      {/* Services */}
      <section id="services" className="bg-white px-8 md:px-16 lg:px-24 py-32 md:py-40">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#9a9889] mb-5">section 02</p>
          <h2 className="font-serif text-[#0a0a0c] text-3xl md:text-4xl tracking-wide mb-8">
            四つの仕事
          </h2>
          <p className="font-sans text-[#9a9889] text-[13px] md:text-[14px] leading-[1.9] tracking-wide max-w-xl">
            AIの導入から運用、そして社内の方へ教えるところまで。
            「導入して終わり」にしないために、長く伴走できる範囲だけを引き受けています。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-[#2a2820]">
          {[
            { num: '壱', title: 'スワイプ型LP制作', desc: '1画面ずつ納得を積み上げる制作' },
            { num: '弐', title: '業務自動化', desc: 'n8n・Make・Difyで仕組みを作る' },
            { num: '参', title: 'Web・API開発', desc: 'Next.js・PWA・Chrome拡張' },
            { num: '肆', title: 'セミナー登壇', desc: '経営者向け生成AI研修' },
          ].map(({ num, title, desc }) => (
            <div
              key={num}
              className="bg-white hover:bg-[#faf8f3] transition-colors duration-300 px-8 py-10 flex flex-col gap-6 group"
            >
              <span className="font-serif text-[#c8a951] text-5xl leading-none">{num}</span>
              <div className="flex flex-col gap-3">
                <p className="font-serif text-[#0a0a0c] text-[17px] tracking-wide leading-snug">
                  {title}
                </p>
                <p className="font-sans text-[#9a9889] text-[12px] leading-relaxed tracking-wide">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Works divider */}
      <div className="w-full h-px bg-[#c8a951]" />

      {/* Works */}
      <section id="works" className="bg-[#faf8f3] px-8 md:px-16 lg:px-24 py-32 md:py-40">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[#c8a951] text-[10px] tracking-[0.45em] uppercase mb-5">
            Section 03 / 制作実績
          </p>
          <h2 className="font-serif text-[#0a0a0c] text-3xl md:text-4xl tracking-wide mb-8">
            Works
          </h2>
          <p className="font-sans text-[#9a9889] text-[13px] md:text-[14px] leading-[1.9] tracking-wide">
            これまでに手がけた仕事の一部です。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { slug: 'hakuan-lp', label: 'hakuan-lp' },
            { slug: 'zettai-soshiyo-night', label: '絶対そうしよナイト' },
            { slug: 'machi-scan', label: '街スキャン' },
          ].map(({ slug, label }) => (
            <div
              key={slug}
              className="group relative aspect-[4/3] bg-[#2a2820] border border-[#2a2820] overflow-hidden cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#c8a951]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                <p className="font-sans text-white text-[11px] tracking-widest">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="mt-12">
          <a
            href="#works"
            className="font-sans text-[#c8a951] text-[12px] tracking-[0.2em] hover:underline underline-offset-4 transition-all duration-200"
          >
            すべての実績を見る →
          </a>
        </div>
      </section>
    </main>
  )
}
