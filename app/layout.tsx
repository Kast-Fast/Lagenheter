import type { Metadata } from 'next'
import { Urbanist, DM_Sans } from 'next/font/google'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { template: '%s – KastFast', default: 'KastFast' },
  description:
    'Bo nära naturen, känn lugnet. Två gårdar, olika karaktär – samma omtanke.',
  icons: { icon: '/images/favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${urbanist.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
