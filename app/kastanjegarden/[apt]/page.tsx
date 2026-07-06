import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Gallery from '@/components/sections/Gallery'
import AptSpecs from '@/components/sections/AptSpecs'
import AvailabilityBlock from '@/components/sections/AvailabilityBlock'
import ScrollReveal from '@/components/sections/ScrollReveal'
import { getApartment, getEstateApartments } from '@/data/apartments'

interface Params { apt: string }

export async function generateStaticParams() {
  return getEstateApartments('kastanjegarden').map((a) => ({ apt: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { apt } = await params
  const a = getApartment('kastanjegarden', apt)
  if (!a) return {}
  return { title: a.name, description: a.description }
}

export default async function KastanjeAptPage({ params }: { params: Promise<Params> }) {
  const { apt } = await params
  const apartment = getApartment('kastanjegarden', apt)
  if (!apartment) notFound()

  const slug = `kastanjegarden/${apt}`
  const rent = apartment.specs.find((s) => s.label === 'Hyra')?.value
  const size = apartment.specs.find((s) => s.label === 'Storlek')?.value
  const rooms = apartment.specs.find((s) => s.label === 'Antal rum')?.value
  const moveIn = apartment.specs.find((s) => s.label === 'Inflyttningsdatum')?.value

  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">

        {/* ── Full-viewport cover ─────────────────────── */}
        <div className="relative w-full h-dvh min-h-[560px] overflow-hidden">
          <Image
            src={apartment.coverPhoto}
            alt={apartment.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.85) 0%, rgba(28,25,23,0.25) 50%, rgba(28,25,23,0.05) 100%)' }}
          />
          <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 sm:px-10 pb-14 sm:pb-20">
            <p className="text-white/50 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">Kastanjegården</p>
            <h1
              className="font-display font-semibold text-white leading-[1.05] pb-2 tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem,7vw,7rem)' }}
            >
              {apartment.name}
            </h1>
            <p className="text-white/60 text-sm mt-3">{apartment.city}</p>
          </div>
        </div>

        {/* ── Dark facts strip ────────────────────────── */}
        <div className="bg-[var(--color-charcoal)] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-16">
            {rent && rent !== '—' && (
              <div className="flex-shrink-0">
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Hyra</p>
                <p className="font-display text-lg sm:text-2xl font-medium text-white">{rent}</p>
              </div>
            )}
            {size && size !== '—' && (
              <div className="flex-shrink-0">
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Storlek</p>
                <p className="font-display text-lg sm:text-2xl font-medium text-white">{size}</p>
              </div>
            )}
            {rooms && rooms !== '—' && (
              <div className="flex-shrink-0">
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Rum</p>
                <p className="font-display text-lg sm:text-2xl font-medium text-white">{rooms}</p>
              </div>
            )}
            {moveIn && moveIn !== '—' && (
              <div className="flex-shrink-0">
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Inflyttning</p>
                <p className="font-display text-lg sm:text-2xl font-medium text-white">{moveIn}</p>
              </div>
            )}
            <div className="sm:ml-auto flex-shrink-0">
              <AvailabilityBlock slug={slug} variant="strip" />
            </div>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 w-full flex flex-col gap-16">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-xs text-[var(--color-stone)]" aria-label="Brödsmulor">
            <Link scroll={false} href="/" className="hover:text-[var(--color-charcoal)] transition-colors">Hem</Link>
            <span className="text-[var(--color-sand)]">—</span>
            <Link scroll={false} href="/kastanjegarden" className="hover:text-[var(--color-charcoal)] transition-colors">Kastanjegården</Link>
            <span className="text-[var(--color-sand)]">—</span>
            <span className="text-[var(--color-charcoal)]">{apartment.name}</span>
          </nav>

          {/* ── Description + specs ──────────────────── */}
          <ScrollReveal>
            <div className="grid sm:grid-cols-[1fr_auto] gap-10 sm:gap-20 items-start">
              {/* Text */}
              <section>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)] mb-6">Om boendet</p>
                <div
                  className="font-display text-xl sm:text-2xl font-medium text-[var(--color-charcoal)] leading-snug mb-6"
                  style={{ maxWidth: '36ch' }}
                >
                  {apartment.description}
                </div>
                {apartment.descriptionFull && (
                  <div className="text-[var(--color-earth)] text-sm leading-[1.85] space-y-4 max-w-2xl">
                    {apartment.descriptionFull.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
              </section>

              {/* Specs + Availability */}
              <div className="flex flex-col gap-0 sm:min-w-[260px]">
                <AvailabilityBlock slug={slug} variant="full" />
                <AptSpecs specs={apartment.specs} />
                <AptSpecs specs={apartment.features} title="Egenskaper" />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Gallery ──────────────────────────────── */}
          {apartment.photos.length > 0 && (
            <ScrollReveal>
              <section>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)] mb-6">Galleri</p>
                <Gallery photos={apartment.photos} />
              </section>
            </ScrollReveal>
          )}

          {/* ── Map ──────────────────────────────────── */}
          <ScrollReveal>
            <section>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)] mb-6">Hitta hit</p>
              <div className="aspect-video overflow-hidden border border-[var(--color-sand)]">
                <iframe
                  src={apartment.mapSrc}
                  title="Karta"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </section>
          </ScrollReveal>

          {/* ── Contact ──────────────────────────────── */}
          <ScrollReveal>
            <div className="bg-[var(--color-charcoal)] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">Kontakt</p>
                <p className="font-display text-xl font-medium text-white mb-1">KastFast</p>
                <p className="text-sm text-white/50">Hör av dig via telefon, SMS eller e-post</p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+46721818200"
                  className="group flex items-center gap-3 text-sm font-medium text-white border border-white/15 px-5 py-3 hover:border-[var(--color-brass-light)] hover:text-[var(--color-brass-light)] transition-all duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="flex-shrink-0">
                    <path d="M2 1h3l1.5 3.5L5 6a9 9 0 003 3l1.5-1.5L13 9v3c-6 0-11-5-11-11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  072-18 18 200
                </a>
                <a
                  href="mailto:kast_fast@outlook.com"
                  className="group flex items-center gap-3 text-sm font-medium text-white border border-white/15 px-5 py-3 hover:border-[var(--color-brass-light)] hover:text-[var(--color-brass-light)] transition-all duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="flex-shrink-0">
                    <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 3.5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  kast_fast@outlook.com
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </main>
      <Footer />
    </>
  )
}
