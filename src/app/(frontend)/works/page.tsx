'use client'

import { useState } from 'react'

const works = [
  { title: 'hakuan-lp',        category: 'LP制作' },
  { title: '絶対そうしよナイト', category: 'LP制作' },
  { title: '街スキャン',        category: 'Web・アプリ' },
  { title: 'n8n自動化フロー',   category: '業務自動化' },
  { title: 'Lumiere Clinic',   category: 'LP制作' },
  { title: 'PatchLens',        category: 'Web・アプリ' },
]

const filters = ['すべて', 'LP制作', '業務自動化', 'Web・アプリ', 'セミナー'] as const

export default function WorksPage() {
  const [active, setActive] = useState<string>('すべて')

  const filtered = active === 'すべて'
    ? works
    : works.filter((w) => w.category === active)

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-[#0a0a0c] px-8 md:px-16 lg:px-24 pt-24 pb-20">
        <p className="text-[#c8a951] text-sm tracking-[0.45em] uppercase mb-6">
          Works / 制作実績
        </p>
        <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.55] tracking-wide">
          これまでに手がけた仕事。
        </h1>
      </section>

      {/* Filter bar */}
      <div className="bg-white border-b border-[#2a2820] px-8 md:px-16 lg:px-24 sticky top-16 z-40">
        <div className="flex gap-8 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                'py-4 text-[11px] tracking-widest whitespace-nowrap transition-colors duration-200 shrink-0',
                active === f
                  ? 'text-[#c8a951] border-b-2 border-[#c8a951]'
                  : 'text-[#9a9889] hover:text-[#0a0a0c] border-b-2 border-transparent',
              ].join(' ')}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-[#faf8f3] px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(({ title, category }) => (
            <div
              key={title}
              className="group relative bg-[#2a2820] border border-[#2a2820] overflow-hidden cursor-pointer flex flex-col"
              style={{ aspectRatio: '4 / 3' }}
            >
              {/* Gold top line on hover */}
              <div
                className="group-hover:bg-[#c8a951] transition-colors duration-300"
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: 'transparent' }}
              />

              {/* Push label to bottom */}
              <div style={{ flex: 1 }} />

              {/* Bottom label */}
              <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  className="font-sans uppercase"
                  style={{ color: '#c8a951', fontSize: '10px', letterSpacing: '0.15em' }}
                >
                  {category}
                </span>
                <p className="font-serif" style={{ color: '#ffffff', fontSize: '14px' }}>
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
