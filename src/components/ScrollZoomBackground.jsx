import { useEffect, useState, useRef, useCallback } from 'react'

/**
 * ScrollZoomBackground: Replaces card.png with the mobile-first vertical Heartlayout image.
 * Features a scroll-driven zoom-out animation:
 * - Starts tightly focused on the center heart hand gesture (scale ~2.6)
 * - Smoothly zooms out to reveal the full beach composition as the user scrolls
 */
export default function ScrollZoomBackground() {
  const [zoomScale, setZoomScale] = useState(1.85)
  const [translateY, setTranslateY] = useState(-36)
  const rafIdRef = useRef(null)

  const handleScroll = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current)
    }

    rafIdRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY || window.pageYOffset || 0
      // Smoothly zoom out over the first 500px of scroll
      const maxScroll = 500
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll))
      
      // More zoomed out initial state (1.85) zooming out to full view (0.96)
      const currentScale = 1.85 - progress * 0.89
      // Reduce top empty space by gently adjusting vertical offset
      const currentY = -36 + progress * 20

      setZoomScale(currentScale)
      setTranslateY(currentY)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [handleScroll])

  return (
    <div className="scroll-zoom-bg-wrapper" aria-hidden="true">
      <div className="scroll-zoom-bg-container">
        <picture className="scroll-zoom-bg-picture">
          <source srcSet="/Heartlayout_mobile.webp" type="image/webp" />
          <img
            src="/Heartlayout_mobile.jpg"
            alt="Wedding Couple Heart Background"
            className="scroll-zoom-bg-img"
            style={{
              transformOrigin: '48% 34%',
              transform: `scale(${zoomScale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`,
            }}
          />
        </picture>

        {/* Soft Watercolor Translucent Gradient Overlay for readability */}
        <div className="scroll-zoom-bg-overlay" />
      </div>
    </div>
  )
}

