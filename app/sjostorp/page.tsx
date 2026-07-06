import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroVideo from '@/components/hero/HeroVideo'
import ScrollReveal from '@/components/sections/ScrollReveal'
import AvailabilityBlock from '@/components/sections/AvailabilityBlock'
import { getEstateApartments } from '@/data/apartments'
import { getEstate } from '@/data/estates'

export const metadata: Metadata = {
  title: 'Sjöstorp',
  description: 'Lund · Mitt i lugnet med goda kommunikationer.',
}

export default function SjostorpPage() {
  const estate = getEstate('sjostorp')!
  const apts = getEstateApartments('sjostorp').filter((a) => a.visible)

  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <HeroVideo
          videos={estate.heroVideos}
          poster={estate.heroPoster}
          eyebrow="Lund"
          title="Sjöstorp"
          subtitle="Mitt i lugnet med goda kommunikationer."
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 w-full">
          <nav className="flex items-center gap-3 text-xs text-[var(--color-stone)] mb-12" aria-label="Brödsmulor">
            <Link scroll={false} href="/" className="hover:text-[var(--color-charcoal)] transition-colors">Hem</Link>
            <span className="text-[var(--color-sand)]">—</span>
            <span className="text-[var(--color-charcoal)]">Sjöstorp</span>
          </nav>

          <div className="border-b border-[var(--color-sand)] pb-8 flex items-end justify-between gap-4">
            <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold text-[var(--color-charcoal)] leading-tight">
              Sjöstorp
            </h1>
            <p className="text-sm text-[var(--color-stone)] mb-1 flex-shrink-0">{apts.length} boende{apts.length !== 1 ? 'n' : ''}</p>
          </div>
        </div>

        <section id="boenden" className="max-w-7xl mx-auto px-6 sm:px-10 py-4 w-full">
          {apts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[var(--color-stone)]">Inga boenden tillgängliga just nu. Kontakta oss för mer information.</p>
              <Link scroll={false} href="/kontakt" className="mt-6 inline-block text-sm font-medium border-b border-[var(--color-charcoal)] pb-0.5 hover:text-[var(--color-brass)] hover:border-[var(--color-brass)] transition-all">Kontakta oss →</Link>
            </div>
          ) : (
            <div className="divide-y divide-[var(--color-sand)]">
              {apts.map((apt, i) => {
                const rent = apt.specs.find((s) => s.label === 'Hyra')?.value
                const size = apt.specs.find((s) => s.label === 'Storlek')?.value
                const rooms = apt.specs.find((s) => s.label === 'Antal rum')?.value
                return (
                  <ScrollReveal key={apt.slug} delay={i * 0.06}>
                    <Link
                      scroll={false}
                      href={`/sjostorp/${apt.slug}`}
                      className="group flex flex-col sm:flex-row items-stretch gap-0 py-8 hover:bg-[var(--color-sand-light)] -mx-6 sm:-mx-10 px-6 sm:px-10 transition-colors duration-300"
                    >
                      <div className="relative w-full sm:w-56 md:w-72 aspect-[4/3] sm:aspect-auto sm:h-44 overflow-hidden flex-shrink-0">
                        <Image
                          src={apt.coverPhoto}
                          alt={apt.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                          sizes="(max-width: 640px) 100vw, 280px"
                        />
                      </div>

                      <div className="flex flex-col justify-between sm:pl-10 py-2 sm:py-1 mt-4 sm:mt-0 flex-1">
                        <div>
                          <div className="flex items-start gap-3 flex-wrap">
                            <h2 className="font-display text-xl sm:text-2xl font-medium text-[var(--color-charcoal)]">
                              {apt.name}
                            </h2>
                            <AvailabilityBlock slug={`sjostorp/${apt.slug}`} variant="badge" />
                          </div>
                          <p className="text-xs text-[var(--color-stone)] mt-1">{apt.city}</p>
                          {(rent !== '—' || size !== '—') && (
                            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4">
                              {rent !== '—' && <span className="text-sm text-[var(--color-charcoal)] font-medium">{rent}</span>}
                              {size !== '—' && <span className="text-sm text-[var(--color-stone)]">{size}</span>}
                              {rooms !== '—' && <span className="text-sm text-[var(--color-stone)]">{rooms} rum</span>}
                            </div>
                          )}
                        </div>

                        <span className="mt-5 sm:mt-0 flex items-center gap-2 text-xs font-medium text-[var(--color-stone)] group-hover:text-[var(--color-brass)] transition-colors duration-300">
                          Se boende
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  )
}
