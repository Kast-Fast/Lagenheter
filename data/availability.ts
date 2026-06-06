export type AvailabilityStatus = 'available' | 'reserved' | 'occupied'

export interface Availability {
  status: AvailabilityStatus
  availableFrom: string // ISO date
  note?: string
}

// Keyed by apartment slug — single source of truth
const availabilityMap: Record<string, Availability> = {
  // Kastanjegården
  'kastanjegarden/apt-b': {
    status: 'occupied',
    availableFrom: '2025-01-01',
    note: 'Uthyrd',
  },
  'kastanjegarden/apt-c': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'kastanjegarden/apt-d': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'kastanjegarden/apt-e': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'kastanjegarden/apt-f': {
    status: 'occupied',
    availableFrom: '2025-01-01',
    note: 'Uthyrd',
  },
  'kastanjegarden/apt-g': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  // Sjöstorp
  'sjostorp/apt-a': {
    status: 'available',
    availableFrom: '2026-02-01',
  },
  'sjostorp/apt-b': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'sjostorp/apt-c': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'sjostorp/apt-d': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'sjostorp/apt-e': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'sjostorp/apt-f': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
  'sjostorp/apt-g': {
    status: 'available',
    availableFrom: '2025-01-01',
  },
}

export function getAvailability(slug: string): Availability {
  return (
    availabilityMap[slug] ?? {
      status: 'available',
      availableFrom: new Date().toISOString().slice(0, 10),
    }
  )
}
