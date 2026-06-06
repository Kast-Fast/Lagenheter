import { resolveAvailability } from '@/lib/availability'
import { cn } from '@/lib/utils'

interface Props {
  slug: string
  variant?: 'full' | 'badge' | 'strip'
}

export default function AvailabilityBlock({ slug, variant = 'full' }: Props) {
  const { label, detail, color } = resolveAvailability(slug)

  const dot = cn(
    'w-2 h-2 rounded-full flex-shrink-0',
    color === 'green' && 'bg-[var(--color-ledig)]',
    color === 'yellow' && 'bg-[var(--color-uthyrd)]',
    color === 'gray' && 'bg-[var(--color-stone)]'
  )

  const badge = cn(
    'inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5',
    color === 'green' && 'bg-[#EBF5EF] text-[#1A5235]',
    color === 'yellow' && 'bg-[#FEF3DC] text-[#5C3D00]',
    color === 'gray' && 'bg-[var(--color-sand-light)] text-[var(--color-stone)]'
  )

  if (variant === 'badge') {
    return (
      <span className={badge}>
        <span className={dot} aria-hidden />
        {label}
      </span>
    )
  }

  if (variant === 'strip') {
    const showDetail = detail && detail !== label
    return (
      <div className="flex items-center gap-3">
        <span className={dot} aria-hidden />
        <span className="text-sm font-medium text-white">{label}</span>
        {showDetail && <span className="text-white/50 text-sm">{detail}</span>}
      </div>
    )
  }

  // full
  return (
    <div className="border border-[var(--color-sand)] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-stone)] mb-4">
        Tillgänglighet
      </p>
      <div className={badge}>
        <span className={dot} aria-hidden />
        {label}
      </div>
      <p className="mt-3 text-[var(--color-earth)] text-sm leading-relaxed">{detail}</p>
    </div>
  )
}
