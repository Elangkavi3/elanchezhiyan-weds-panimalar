import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * KaviModal: An elegant, tilted model-shot gallery frame pop-up.
 * Triggered by clicking "Elangkavi" in the footer.
 * Clicking anywhere on screen closes the modal smoothly.
 * No "click to close" text displayed per requirements.
 */
export default function KaviModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  // Handle closing with smooth exit transition
  const triggerClose = () => {
    if (isClosing) return
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 280)
  }

  // Keyboard accessibility (Escape key to dismiss)
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        triggerClose()
      }
    }

    // Prevent body scrolling while modal is active
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, isClosing])

  if (!isOpen && !isClosing) return null

  return createPortal(
    <div
      className={`kavi-modal-backdrop ${isClosing ? 'kavi-modal-closing' : ''}`}
      onClick={triggerClose}
      role="dialog"
      aria-modal="true"
      aria-label="Elangkavi"
    >
      <div
        className={`kavi-frame-container ${isClosing ? 'kavi-frame-closing' : ''}`}
        onClick={triggerClose}
      >
        {/* Luxury gallery picture frame */}
        <div className="kavi-gallery-frame">
          <div className="kavi-frame-matte">
            <div className="kavi-frame-inner-border">
              <picture className="kavi-picture">
                <source srcSet="/Kavi_opt.webp" type="image/webp" />
                <img
                  src="/Kavi_opt.jpg"
                  alt="Elangkavi"
                  className="kavi-portrait-image"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              {/* Subtle glass reflection overlay */}
              <div className="kavi-glass-reflection" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
