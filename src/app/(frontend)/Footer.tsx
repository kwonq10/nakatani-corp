import React from 'react'

export function Footer() {
  return (
    <footer className="mt-auto bg-[#0a0a0c] border-t border-[#c8a951]">
      <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-serif text-[#c8a951] tracking-[0.3em] text-[13px]">NAKATANI</span>
        <p className="text-[#9a9889] text-[11px] tracking-wide">
          © 2026 中谷健一 / kanazawa AI starter
        </p>
      </div>
    </footer>
  )
}
