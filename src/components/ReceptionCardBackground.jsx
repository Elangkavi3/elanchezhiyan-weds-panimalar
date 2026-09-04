import { useState, useEffect } from 'react'

const CARD_BACKGROUND_IMAGES = [
  { id: 'cs1', webp: '/cs1.webp', fallback: '/cs1.JPG' },
  { id: 'cs2', webp: '/cs2.webp', fallback: '/cs2.JPG' },
  { id: 'cs3', webp: '/cs3.webp', fallback: '/cs3.JPG' },
  { id: 'cs4', webp: '/cs4.webp', fallback: '/cs4.JPG' },
  { id: 'cs5', webp: '/cs5.webp', fallback: '/cs5.JPG' },
]

/**
 * ReceptionCardBackground: Non-interactive crossfading photo background
 * Smoothly cycles through cs1 to cs5 behind the Grand Reception card content.
 */
export default function ReceptionCardBackground() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CARD_BACKGROUND_IMAGES.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="event-card-bg-slideshow" aria-hidden="true">
      {CARD_BACKGROUND_IMAGES.map((img, idx) => (
        <div
          key={img.id}
          className={`card-bg-slide ${idx === activeIdx ? 'active' : ''}`}
        >
          <picture>
            <source srcSet={img.webp} type="image/webp" />
            <img
              src={img.fallback}
              alt=""
              className="card-bg-img"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </picture>
        </div>
      ))}

      {/* Translucent Royal Frosted Overlay for high text legibility */}
      <div className="card-bg-overlay" />
    </div>
  )
}
