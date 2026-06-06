import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/sections/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakta KastFast – vi återkommer snabbt.',
}

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 pt-[72px]">

        {/* ── Hero band ──────────────────────────────── */}
        <div className="bg-[var(--color-charcoal)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Kontakt</p>
              <h1
                className="font-display font-semibold text-white leading-[0.92] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.5rem,6vw,6rem)' }}
              >
                <span style={{ color: 'var(--color-brass-light)' }}>Känn lugnet.</span>
                <br />
                Vi hjälper dig hem.
              </h1>
              <p className="mt-6 text-white/50 text-base sm:text-lg max-w-sm leading-relaxed">
                Vi återkommer snabbt. Ring, skicka ett SMS eller mejla oss direkt.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Contact details ────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 w-full">

          <div className="grid sm:grid-cols-2 gap-0 border border-[var(--color-sand)]">
            {/* Phone & email */}
            <ScrollReveal>
              <div className="p-10 border-b sm:border-b-0 sm:border-r border-[var(--color-sand)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)] mb-8">
                  Direktkontakt
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs text-[var(--color-stone)] mb-2">Telefon</p>
                    <a
                      href="tel:+46721818200"
                      className="font-display text-3xl sm:text-4xl font-medium text-[var(--color-charcoal)] hover:text-[var(--color-brass)] transition-colors duration-300"
                    >
                      072-18 18 200
                    </a>
                  </div>
                  <div className="w-8 h-px bg-[var(--color-sand)]" />
                  <div>
                    <p className="text-xs text-[var(--color-stone)] mb-2">E-post</p>
                    <a
                      href="mailto:kast_fast@outlook.com"
                      className="font-display text-xl sm:text-2xl font-medium text-[var(--color-charcoal)] hover:text-[var(--color-brass)] transition-colors duration-300 break-all"
                    >
                      kast_fast@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Estates */}
            <ScrollReveal delay={0.08}>
              <div className="p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)] mb-8">
                  Våra gårdar
                </p>
                <div className="space-y-0 divide-y divide-[var(--color-sand)]">
                  {[
                    { href: '/kastanjegarden', name: 'Kastanjegården', loc: 'Staffanstorp' },
                    { href: '/sjostorp', name: 'Sjöstorp', loc: 'Lund' },
                  ].map((e) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      className="group flex items-center justify-between py-5"
                    >
                      <div>
                        <p className="font-display text-xl font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-brass)] transition-colors duration-300">
                          {e.name}
                        </p>
                        <p className="text-xs text-[var(--color-stone)] mt-0.5">{e.loc}</p>
                      </div>
                      <span className="text-[var(--color-stone)] group-hover:text-[var(--color-brass)] transition-all duration-300 group-hover:translate-x-1 inline-block">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom note */}
          <ScrollReveal delay={0.12}>
            <p className="mt-12 text-xs text-[var(--color-stone)] max-w-sm leading-relaxed">
              Vi är ett privat fastighetsbolag. Vi svarar normalt samma dag på mejl och SMS. Välkommen att höra av dig.
            </p>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
