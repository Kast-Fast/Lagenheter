import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroVideo from '@/components/hero/HeroVideo'
import ScrollReveal from '@/components/sections/ScrollReveal'

export const metadata: Metadata = { title: 'Bo nära naturen – KastFast' }

const homeVideos = [{ src: '/videos/drone_shot.mp4', type: 'video/mp4' as const }]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">

        {/* ── Hero ───────────────────────────────────────── */}
        <HeroVideo
          videos={homeVideos}
          poster="/images/hero.png"
          title="Bo nära naturen"
          titleAccent="Känn lugnet"
          subtitle="Två gårdar, olika karaktär – samma omtanke."
        />

        {/* ── Intro strip ───────────────────────────────── */}
        <ScrollReveal id="gardens">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-[var(--color-sand)]">
            <p className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-charcoal)] max-w-md leading-snug">
              Lantliga lägen nära staden.
            </p>
            <p className="text-[var(--color-stone)] text-sm max-w-xs leading-relaxed">
              Vi hyr ut hem vi är stolta över, till hyresgäster vi litar på. Långsiktiga förhållanden, genomtänkta boenden.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Estates — full-bleed editorial panels ─────── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 w-full">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-stone)] mb-10">
              Våra gårdar
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-2">
            <EstatePanel
              href="/kastanjegarden"
              name="Kastanjegården"
              label="01"
              tagline="Staffanstorp · Lugnt område nära grönområden och service."
              cover="/images/kastanjegarden/cover.jpg"
              delay={0}
            />
            <EstatePanel
              href="/sjostorp"
              name="Sjöstorp"
              label="02"
              tagline="Lund · Mitt i lugnet med goda kommunikationer."
              cover="/images/sjostorp/cover.jpg"
              delay={0.08}
            />
          </div>
        </section>

        {/* ── Dark manifesto ────────────────────────────── */}
        <section className="bg-[var(--color-charcoal)]">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-32 grid sm:grid-cols-[1fr_auto] items-end gap-12">
              <blockquote
                className="font-display font-medium text-white leading-[1.1] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
              >
                Vi hyr ut boenden vi är stolta över,
                <br />
                till hyresgäster vi litar på.
              </blockquote>
              <Link
                href="/kontakt"
                className="group flex-shrink-0 flex items-center gap-3 text-sm font-medium text-white/60 border-b border-white/20 pb-0.5 hover:text-[var(--color-brass-light)] hover:border-[var(--color-brass-light)] transition-all duration-300 whitespace-nowrap"
              >
                Kontakta oss
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}

function EstatePanel({
  href, name, label, tagline, cover, delay,
}: {
  href: string; name: string; label: string; tagline: string; cover: string; delay: number
}) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        href={href}
        className="group relative flex flex-col sm:flex-row items-stretch border border-[var(--color-sand)] hover:border-[var(--color-charcoal)] transition-colors duration-500 overflow-hidden"
      >
        {/* Image */}
        <div className="relative w-full sm:w-[55%] aspect-[16/9] sm:aspect-auto sm:min-h-[340px] overflow-hidden flex-shrink-0">
          <Image
            src={cover}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 55vw"
          />
        </div>

        {/* Text panel */}
        <div className="flex flex-col justify-between p-8 sm:p-12 bg-[var(--color-cream)] group-hover:bg-[var(--color-charcoal)] transition-colors duration-500 flex-1">
          <div>
            <h2
              className="font-display font-semibold text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-500 leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              {name}
            </h2>
            <p className="mt-3 text-sm text-[var(--color-stone)] group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
              {tagline}
            </p>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-brass-light)] transition-all duration-500">
            Se boenden
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}
