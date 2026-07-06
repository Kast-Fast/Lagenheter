import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-12 py-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-semibold tracking-[-0.01em] mb-3">KastFast</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Två gårdar, olika karaktär – samma omtanke. Lantliga lägen nära staden.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40 mb-5">Gårdar</p>
            <nav className="flex flex-col gap-3">
              <Link scroll={false} href="/kastanjegarden" className="text-sm text-white/70 hover:text-white transition-colors">Kastanjegården</Link>
              <Link scroll={false} href="/sjostorp" className="text-sm text-white/70 hover:text-white transition-colors">Sjöstorp</Link>
              <Link scroll={false} href="/kontakt" className="text-sm text-white/70 hover:text-white transition-colors">Kontakt</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40 mb-5">Kontakt</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+46721818200" className="text-sm text-white/70 hover:text-[var(--color-brass-light)] transition-colors">
                072-18 18 200
              </a>
              <a href="mailto:kast_fast@outlook.com" className="text-sm text-white/70 hover:text-[var(--color-brass-light)] transition-colors">
                kast_fast@outlook.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between py-6">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} KastFast. Alla rättigheter förbehållna.</p>
          <div className="w-8 h-px bg-[var(--color-brass)] opacity-60" />
        </div>
      </div>
    </footer>
  )
}
