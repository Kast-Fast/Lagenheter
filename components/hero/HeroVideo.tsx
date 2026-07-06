'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { VideoSource } from '@/data/estates'

interface Props {
  videos: VideoSource[]
  poster: string
  title: string
  titleAccent?: string   // second line in brass color
  subtitle?: string
  eyebrow?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function HeroVideo({
  videos,
  poster,
  title,
  titleAccent,
  subtitle,
  eyebrow,
  ctaLabel,
  ctaHref = '#content',
}: Props) {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const h = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  return (
    <section className="relative w-full h-dvh min-h-[600px] -mt-[72px]">
      {/* ── Background ───────────────────────────────────── */}
      {!reduced ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {videos.map((v) => (
            <source key={v.src} src={v.src} type={v.type} />
          ))}
        </video>
      ) : (
        <Image src={poster} alt="" fill className="object-cover" priority sizes="100vw" />
      )}

      {/* Gradient: heavy at bottom, very light at top */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(28,25,23,0.88) 0%, rgba(28,25,23,0.30) 45%, rgba(28,25,23,0.08) 100%)',
        }}
      />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 sm:px-10 pb-14 sm:pb-20">
        {eyebrow && (
          <p className="text-white/50 text-xs font-medium tracking-[0.18em] uppercase mb-5">
            {eyebrow}
          </p>
        )}

        <h1
          className="font-display font-semibold text-white leading-[1.05] tracking-[-0.02em] pb-2"
          style={{ fontSize: 'clamp(1.5rem, 9vw, 9rem)' }}
        >
          {title}
          {titleAccent && (
            <span
              className="block"
              style={{ color: 'var(--color-brass-light)' }}
            >
              {titleAccent}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="mt-5 text-white/65 text-base sm:text-lg max-w-md leading-relaxed">
            {subtitle}
          </p>
        )}

        {ctaLabel && (
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="group flex items-center gap-3 text-sm font-medium text-white border-b border-white/40 pb-0.5 hover:border-[var(--color-brass-light)] hover:text-[var(--color-brass-light)] transition-all duration-300 w-fit"
            >
              {ctaLabel}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
