export interface VideoSource {
  src: string
  type: 'video/webm' | 'video/mp4'
}

export interface Estate {
  slug: string
  name: string
  tagline: string
  coverPhoto: string
  heroVideos: VideoSource[]
  heroPoster: string
}

export const estates: Estate[] = [
  {
    slug: 'kastanjegarden',
    name: 'Kastanjegården',
    tagline: 'Staffanstorp · Lugnt område nära grönområden och service.',
    coverPhoto: '/images/kastanjegarden/cover.jpg',
    // Add .webm sources when available — swap via config, no code change needed
    heroVideos: [{ src: '/videos/hero_kastanjegarden.mp4', type: 'video/mp4' }],
    heroPoster: '/images/kastanjegarden/cover.jpg',
  },
  {
    slug: 'sjostorp',
    name: 'Sjöstorp',
    tagline: 'Lund · Mitt i lugnet med goda kommunikationer.',
    coverPhoto: '/images/sjostorp/cover.jpg',
    heroVideos: [{ src: '/videos/hero_sjostorp.mp4', type: 'video/mp4' }],
    heroPoster: '/images/sjostorp/cover.jpg',
  },
]

export function getEstate(slug: string): Estate | undefined {
  return estates.find((e) => e.slug === slug)
}
