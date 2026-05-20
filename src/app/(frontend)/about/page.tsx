import Link from 'next/link'

const activities = [
  {
    label: 'kanazawa AI starter',
    desc: '金沢拠点のAIコンサルブランド',
  },
  {
    label: 'セミナー登壇',
    desc: '経営者向け生成AI研修・講師',
  },
]

const snsLinks = [
  {
    name: 'X',
    href: 'https://x.com/Kenichi_KNZW',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@ai_luminary',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.77a4.85 4.85 0 0 1-1.02-.08z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@kwonq1056',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Note',
    href: 'https://note.com/ai_portfolio',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M3.47 0A3.47 3.47 0 0 0 0 3.47v17.06A3.47 3.47 0 0 0 3.47 24h17.06A3.47 3.47 0 0 0 24 20.53V3.47A3.47 3.47 0 0 0 20.53 0zm4.23 6.17h1.98l4.09 6.09V6.17h1.99v11.66h-1.97l-4.1-6.09v6.09H7.7z" />
      </svg>
    ),
  },
  {
    name: 'Substack',
    href: 'https://substack.com/@vincocredo672433',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 pt-24 pb-20 min-h-[60vh] flex flex-col justify-center">
        <p className="text-[#c8a951] text-sm tracking-[0.45em] uppercase mb-6">
          About / 中谷健一について
        </p>
        <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.6] tracking-wide">
          ことばと実装を、
          <br />
          <span className="text-[#c8a951]">金沢から</span>つなぐ。
        </h1>
      </section>

      {/* Profile */}
      <section className="bg-white px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl justify-center mx-auto">
          <img
            src="/images/profile.jpg"
            alt="中谷健一"
            className="object-cover"
            style={{ width: '288px', flexShrink: 0 }}
          />
          <div>
            <h2 className="font-serif text-[#0a0a0c] text-4xl tracking-wide">
              中谷 健一
            </h2>
            <p className="font-sans text-[#c8a951] text-sm tracking-[0.2em] mt-2">
              生成AIコンサルタント / 業務自動化エンジニア
            </p>
            <div className="flex gap-5 mt-5">
              {snsLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-[#c8a951] hover:opacity-60 transition-opacity duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="font-sans text-[#2a2820] text-[14px] leading-loose tracking-wide mt-8">
              石川県金沢市を拠点に、AI活用・自動化・Web制作を行っています。
              <br /><br />
              強みと読み手の心理を整理し、行動につながる導線へ落とし込みます。
              <br /><br />
              「ことばと実装をつなぐ制作者」として、中小企業の業務改善を支援しています。
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-[#c8a951]" />

      {/* Activities */}
      <section className="bg-[#faf8f3] px-8 md:px-16 lg:px-24 py-16">
        <p className="text-[#9a9889] text-sm tracking-[0.45em] uppercase mb-10">活動エリア</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {activities.map(({ label, desc }) => (
            <div key={label} className="flex flex-col gap-3 border border-[#2a2820]/20 bg-white p-7">
              <span className="font-sans text-[#c8a951] text-lg tracking-wide uppercase">
                {label}
              </span>
              <p className="font-serif text-[#0a0a0c] text-[15px] tracking-wide leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 py-20">
        <p className="text-[#c8a951] text-[10px] tracking-[0.45em] uppercase mb-6">Contact</p>
        <h2 className="font-serif text-white text-3xl tracking-wide mb-10">
          一緒に仕事をしませんか
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
