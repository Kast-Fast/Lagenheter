'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import type { ApartmentPhoto } from '@/data/apartments'

interface GalleryProps {
  photos: ApartmentPhoto[]
}

export default function Gallery({ photos }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const openAt = useCallback((i: number) => {
    setStartIndex(i)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  // Scroll to clicked image when lightbox opens
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    // Small delay to let the DOM render before scrolling
    const t = setTimeout(() => {
      itemRefs.current[startIndex]?.scrollIntoView({ block: 'start' })
    }, 30)
    return () => clearTimeout(t)
  }, [open, startIndex])

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, close])

  if (!photos.length) return null

  return (
    <>
      {/* ── Thumbnail grid ──────────────────────────── */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => openAt(i)}
            className="relative aspect-square overflow-hidden group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brass)] cursor-zoom-in"
            aria-label={`Visa bild ${i + 1}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-85"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
            />
          </button>
        ))}
      </div>

      {/* ── Lightbox — vertical scroll ───────────────── */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95">
          {/* Close button */}
          <button
            onClick={close}
            className="fixed top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Stäng"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Scrollable image stack */}
          <div
            ref={scrollRef}
            className="h-full overflow-y-auto"
            onClick={close}
          >
            <div
              className="flex flex-col gap-2 px-4 py-16 max-w-4xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((photo, i) => (
                <div
                  key={photo.src}
                  ref={(el) => { itemRefs.current[i] = el }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1600}
                    height={1200}
                    className="w-full h-auto"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority={i === startIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
