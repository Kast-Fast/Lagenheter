import { format, parseISO } from 'date-fns'
import { sv } from 'date-fns/locale'
import { getAvailability, type Availability } from '@/data/availability'

export interface AvailabilityDisplay {
  label: string
  detail: string
  color: 'green' | 'yellow' | 'gray'
}

export function resolveAvailability(slug: string): AvailabilityDisplay {
  const av: Availability = getAvailability(slug)
  const date = parseISO(av.availableFrom)
  const formatted = format(date, 'd MMMM yyyy', { locale: sv })

  switch (av.status) {
    case 'available':
      return {
        label: 'Ledig',
        detail: `Tillgänglig från ${formatted}`,
        color: 'green',
      }
    case 'reserved':
      return {
        label: 'Reserverad',
        detail: `Nästa tillgängliga: ${formatted}`,
        color: 'yellow',
      }
    case 'occupied':
      return {
        label: 'Uthyrd',
        detail: av.note ?? `Nästa tillgängliga: ${formatted}`,
        color: 'yellow',
      }
  }
}
