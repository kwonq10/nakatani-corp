'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { cn } from '@/utilities/ui'

const navItems = [
  { label: 'services', href: '#services' },
  { label: 'works', href: '#works' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-16 bg-[#0a0a0c]">
      <div className="h-full max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[#c8a951] tracking-[0.35em] text-[17px] font-medium"
        >
          NAKATANI
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-[11px] tracking-widest uppercase hover:text-[#c8a951] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <span
            className={cn(
              'block w-5 h-px bg-white transition-all duration-300 origin-center',
              menuOpen && 'rotate-45 translate-y-[6px]',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-white transition-all duration-300',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-white transition-all duration-300 origin-center',
              menuOpen && '-rotate-45 -translate-y-[6px]',
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden absolute left-0 w-full bg-[#0a0a0c] border-t border-[#2a2820] overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col px-6 py-5 gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-[12px] tracking-widest uppercase hover:text-[#c8a951] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
