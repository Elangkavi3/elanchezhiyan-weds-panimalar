import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { GALLERY_ITEMS } from '../constants/galleryData'
import FloralDividerSvg from './svgs/FloralDividerSvg'

// Alternating zigzag rotation angles for stacked cards
const ZIGZAG_ANGLES = [-3.8, 3.4, -4.2, 3.8, -3.2, 4.0, -3.6, 3.2, -4.0, 3.6, -3.2, 3.8, -1.8]

/**
 * GalleryModal: Stacked Zigzag Photo Cards
 * - Tapping a card advances to the next photo with a card-slide animation.
 * - Does not loop: finishes on the End Card saying "We are awaiting for your blessings."
 * - Dedicated '✕' button on the card to exit anytime without continuing all photos.
 * - Clicking the backdrop or hitting Escape also dismisses the gallery.
 */
export default function GalleryModal({ isOpen, onClose, lang = 'en', onShowerBlessings }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [discardingIndex, setDiscardingIndex] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const isAnimatingRef = useRef(false)

  // Reset to first photo whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setDiscardingIndex(null)
      setIsClosing(false)
      isAnimatingRef.current = false
    }
  }, [isOpen])

  // Graceful exit transition
  const handleClose = useCallback(() => {
    if (isClosing) return
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 280)
  }, [isClosing, onClose])

  // Advance to next card
  const handleNextCard = useCallback(() => {
    // If on the End Card or already transitioning, do nothing
    if (currentIndex >= GALLERY_ITEMS.length || isAnimatingRef.current) return

    isAnimatingRef.current = true
    setDiscardingIndex(currentIndex)

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setDiscardingIndex(null)
      isAnimatingRef.current = false
    }, 280)
  }, [currentIndex])

  // Keyboard accessibility
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        handleNextCard()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, handleClose, handleNextCard])

  if (!isOpen && !isClosing) return null

  const totalPhotos = GALLERY_ITEMS.length
  const isEndCard = currentIndex >= totalPhotos

  // Prepare visible cards (current, next, and 3rd card for realistic deck depth)
  const visibleCards = []
  if (!isEndCard) {
    // Top card (could be currently discarding)
    visibleCards.push({
      item: GALLERY_ITEMS[currentIndex],
      index: currentIndex,
      isTop: true,
      isDiscarding: discardingIndex === currentIndex,
    })

    // Next card (peeking underneath)
    if (currentIndex + 1 < totalPhotos) {
      visibleCards.push({
        item: GALLERY_ITEMS[currentIndex + 1],
        index: currentIndex + 1,
        isNext: true,
      })
    }

    // 3rd card (deep peek underneath)
    if (currentIndex + 2 < totalPhotos) {
      visibleCards.push({
        item: GALLERY_ITEMS[currentIndex + 2],
        index: currentIndex + 2,
        isThird: true,
      })
    }
  }

  return createPortal(
    <div
      className={`gallery-modal-backdrop ${isClosing ? 'gallery-modal-closing' : ''}`}
      onClick={(e) => {
        // Clicking backdrop closes modal
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Gallery"
    >
      {/* Top Header Information Bar */}
      <div className="gallery-modal-topbar">
        <div className="gallery-counter-pill">
          {isEndCard ? (
            <span>✦ {lang === 'ta' ? 'ஆசீர்வாதம்' : 'Blessings'} ✦</span>
          ) : (
            <span>
              {lang === 'ta' ? 'புகைப்படம்' : 'Photo'} {currentIndex + 1} / {totalPhotos}
            </span>
          )}
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div className="gallery-cards-stack-wrapper">
        {isEndCard ? (
          /* ========================================================
             END CARD: "We are awaiting for your blessings"
             ======================================================== */
          <div
            className="gallery-frame-card gallery-end-card"
            style={{ transform: `rotate(${ZIGZAG_ANGLES[totalPhotos]}deg)` }}
          >
            {/* Close '✕' button on the card */}
            <button
              type="button"
              className="gallery-card-close-btn"
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              title="Close Gallery"
              aria-label="Close Gallery"
            >
              ✕
            </button>

            <div className="gallery-end-card-inner">
              {/* Royal Decorative Arch / Crest */}
              <div className="gallery-end-crest">
                <span className="gallery-crest-gem">✦</span>
              </div>

              <h3 className={`gallery-end-title ${lang === 'ta' ? 'tamil-font' : ''}`}>
                {lang === 'ta'
                  ? 'உங்கள் வருகை மற்றும் ஆசீர்வாதங்களை ஆவலுடன் எதிர்பார்க்கிறோம்'
                  : 'We are awaiting for your blessings.'}
              </h3>

              {lang === 'ta' && (
                <p className="gallery-end-sub-en">
                  We are awaiting for your blessings.
                </p>
              )}

              <div className="gallery-end-divider">
                <FloralDividerSvg className="gallery-divider-svg" />
              </div>

              <p className="gallery-end-couple-names">
                Elanchezhiyan &amp; Panimalar
              </p>

              {/* Action Buttons on End Card */}
              <div className="gallery-end-actions">
                {onShowerBlessings && (
                  <button
                    type="button"
                    className="gallery-blessings-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      onShowerBlessings()
                    }}
                  >
                    🌸 {lang === 'ta' ? 'ஆசீர்வாதம் தூவுக' : 'Shower Blessings'}
                  </button>
                )}

                <button
                  type="button"
                  className="gallery-close-text-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClose()
                  }}
                >
                  {lang === 'ta' ? 'மூடுக' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================
             STACKED PHOTO CARDS (ZIGZAG DISPLAY & ADVANCE ON TOUCH)
             ======================================================== */
          <div className="gallery-cards-deck">
            {/* Render 3rd card underneath if exists */}
            {visibleCards.find((c) => c.isThird) && (
              <div
                className="gallery-frame-card gallery-card-under-2"
                style={{
                  transform: `rotate(${ZIGZAG_ANGLES[currentIndex + 2]}deg) scale(0.91) translateY(16px)`,
                }}
                aria-hidden="true"
              >
                <div className="gallery-card-inner-frame">
                  <div className="gallery-img-placeholder" />
                </div>
              </div>
            )}

            {/* Render next card underneath */}
            {visibleCards.find((c) => c.isNext) && (
              <div
                className="gallery-frame-card gallery-card-under-1"
                style={{
                  transform: `rotate(${ZIGZAG_ANGLES[currentIndex + 1]}deg) scale(0.955) translateY(8px)`,
                }}
                aria-hidden="true"
              >
                <div className="gallery-card-inner-frame">
                  <picture className="gallery-picture">
                    <source
                      srcSet={visibleCards.find((c) => c.isNext).item.webp}
                      type="image/webp"
                    />
                    <img
                      src={visibleCards.find((c) => c.isNext).item.jpg}
                      alt="Next photo in stack"
                      className="gallery-card-image"
                      loading="eager"
                    />
                  </picture>
                  <div className="gallery-glass-reflection" />
                </div>
              </div>
            )}

            {/* Render active top card */}
            {visibleCards.find((c) => c.isTop) && (() => {
              const topCard = visibleCards.find((c) => c.isTop)
              const discardDirection = currentIndex % 2 === 0 ? 'discard-right' : 'discard-left'
              const angle = ZIGZAG_ANGLES[currentIndex]

              return (
                <div
                  key={topCard.item.id}
                  className={`gallery-frame-card gallery-card-active ${
                    topCard.isDiscarding ? `gallery-card-${discardDirection}` : ''
                  }`}
                  style={{
                    '--card-angle': `${angle}deg`,
                    transform: topCard.isDiscarding
                      ? undefined
                      : `rotate(${angle}deg) scale(1) translateY(0)`,
                  }}
                  onClick={handleNextCard}
                >
                  {/* Close '✕' button on the pic card per user instruction */}
                  <button
                    type="button"
                    className="gallery-card-close-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClose()
                    }}
                    title="Close Gallery"
                    aria-label="Close Gallery"
                  >
                    ✕
                  </button>

                  <div className="gallery-card-inner-frame">
                    <picture className="gallery-picture">
                      <source srcSet={topCard.item.webp} type="image/webp" />
                      <img
                        src={topCard.item.jpg}
                        alt={`Photo ${currentIndex + 1}`}
                        className="gallery-card-image"
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                    <div className="gallery-glass-reflection" aria-hidden="true" />
                  </div>

                  {/* Elegant gold foil bottom accent */}
                  <div className="gallery-card-footer">
                    <span className="gallery-card-monogram">✦ EP ✦</span>
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
