import type { ApartmentSpec } from '@/data/apartments'

interface Props {
  specs: ApartmentSpec[]
  title?: string
  dark?: boolean
}

export default function AptSpecs({ specs, title = 'Fakta', dark = false }: Props) {
  const label = dark ? 'text-white/40' : 'text-[var(--color-stone)]'
  const value = dark ? 'text-white' : 'text-[var(--color-charcoal)]'
  const divider = dark ? 'border-white/10' : 'border-[var(--color-sand)]'
  const heading = dark ? 'text-white/40' : 'text-[var(--color-stone)]'
  const border = dark ? 'border-white/10' : 'border-[var(--color-sand)]'

  return (
    <div className={`border ${border} p-6`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${heading} mb-5`}>
        {title}
      </p>
      <dl className={`divide-y ${divider}`}>
        {specs.map(({ label: l, value: v }) => (
          <div key={l} className="flex items-baseline justify-between py-3 gap-4">
            <dt className={`text-sm ${label}`}>{l}</dt>
            <dd className={`text-sm font-medium ${value} text-right`}>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
