'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/kastanjegarden', label: 'Kastanjegården' },
  { href: '/sjostorp', label: 'Sjöstorp' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      {/* Tall soft gradient behind header — only when not scrolled */}
      {!scrolled && (
        <div
          aria-hidden
          className="fixed top-0 inset-x-0 z-40 pointer-events-none h-48"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)' }}
        />
      )}

      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 text-white',
          scrolled
            ? 'bg-[var(--color-charcoal)]/95 backdrop-blur-sm border-b border-white/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[72px]">

          {/* Logo + Wordmark */}
          <Link
            href="/"
            aria-label="KastFast hem"
            className="flex items-center gap-3"
          >
            <div className="relative w-8 h-8 brightness-0 invert">
              <Image src="/images/logo.png" alt="KastFast logotyp" fill className="object-contain" sizes="32px" />
            </div>
            <span className="font-display text-xl font-semibold tracking-[-0.01em] !text-white transition-colors duration-500">
              KastFast
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide !text-white/85 hover:!text-white transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--color-brass-light)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="text-sm font-medium border border-white/60 !text-white px-5 py-2.5 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Kontakta oss
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col gap-[5px] w-8 items-end"
          >
            <span className={cn('block h-px bg-white transition-all duration-300', menuOpen ? 'w-6 translate-y-[9px] rotate-45' : 'w-6')} />
            <span className={cn('block h-px bg-white transition-all duration-300', menuOpen ? 'opacity-0 w-6' : 'w-4')} />
            <span className={cn('block h-px bg-white transition-all duration-300', menuOpen ? 'w-6 -translate-y-[9px] -rotate-45' : 'w-6')} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-500',
          menuOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn('absolute inset-0 bg-[var(--color-charcoal)]/50 transition-opacity duration-500', menuOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-72 bg-[var(--color-cream)] flex flex-col transition-transform duration-500',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-8 h-[72px] border-b border-[var(--color-sand)]">
            <span className="font-display text-lg font-semibold">KastFast</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Stäng" className="text-2xl leading-none text-[var(--color-stone)]">×</button>
          </div>
          <nav className="flex flex-col px-8 py-10 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl font-medium py-3 border-b border-[var(--color-sand-light)] text-[var(--color-charcoal)] hover:text-[var(--color-brass)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-8 block text-center text-sm font-medium bg-[var(--color-charcoal)] text-white py-4 hover:bg-[var(--color-brass)] transition-colors duration-300"
            >
              Kontakta oss
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
