import { MAPS_URL } from '../constants/content'
import { LocationPinIcon, WhatsAppIcon, FlowerIcon } from './svgs/Icons'

/**
 * Top Actions Navigation Bar (100% Fixed Header):
 * - Left Actions: Location Pin + Audio Music BGM + Flower Blessings Shower + WhatsApp Share
 * - Right: Compact Language Toggle Pill (EN | தமிழ்)
 */
export default function TopActions({
  lang,
  setLang,
  isPlaying,
  toggleAudio,
  t,
  onShowerBlessings
}) {
  const shareMessage = t ? encodeURIComponent(t.shareMsg) : ''

  return (
    <>
      <header className="top-actions-bar" aria-label="Main Navigation">
        {/* Top Left Action Icons: Location, Audio, Flower Shower, WhatsApp Share */}
        <div className="top-left-actions">
          {/* 1. Location Pin Button */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="trending-location-btn"
            title={lang === 'ta' ? 'அசோக் மஹால் கூகிள் மேப்' : 'Ashok Mahaal Google Map'}
            aria-label={lang === 'ta' ? 'அசோக் மஹால் கூகிள் மேப்' : 'Ashok Mahaal Google Map'}
          >
            <span className="location-pulse-ring" />
            <LocationPinIcon className="location-svg-icon" />
          </a>

          {/* 2. Audio BGM Toggle Button */}
          <button
            type="button"
            className={`trending-audio-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}
            onClick={toggleAudio}
            title={
              isPlaying
                ? lang === 'ta'
                  ? 'இசையை இடைநிறுத்து'
                  : 'Pause Background Music'
                : lang === 'ta'
                  ? 'இசையை இயக்கு'
                  : 'Play Background Music'
            }
            aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          >
            {isPlaying && <span className="audio-pulse-ring" />}
            {isPlaying ? (
              <span className="equalizer-bars" aria-hidden="true">
                <span className="eq-bar bar-1" />
                <span className="eq-bar bar-2" />
                <span className="eq-bar bar-3" />
              </span>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
                className="audio-svg-icon"
                aria-hidden="true"
              >
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            )}
          </button>

          {/* 3. Flower Petal Blessings Shower Button (Icon Only) */}
          {onShowerBlessings && (
            <button
              type="button"
              className="trending-flower-btn"
              onClick={onShowerBlessings}
              title={lang === 'ta' ? 'மலர் ஆசீர்வாதம் தூவுக' : 'Shower Flower Blessings'}
              aria-label={lang === 'ta' ? 'மலர் ஆசீர்வாதம் தூவுக' : 'Shower Flower Blessings'}
            >
              <FlowerIcon className="flower-svg-icon" />
            </button>
          )}

          {/* 4. WhatsApp Share Button (Icon Only) */}
          {shareMessage && (
            <a
              href={`https://api.whatsapp.com/send?text=${shareMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="trending-whatsapp-btn"
              title={lang === 'ta' ? 'வாட்ஸ்அப்பில் பகிருங்கள்' : 'Share on WhatsApp'}
              aria-label={lang === 'ta' ? 'வாட்ஸ்அப்பில் பகிருங்கள்' : 'Share on WhatsApp'}
            >
              <WhatsAppIcon className="whatsapp-svg-icon" />
            </a>
          )}
        </div>

        {/* Compact Language Toggle Pill (Far Right) */}
        <div
          className="lang-toggle-pill"
          role="tablist"
          aria-label="Language Selection"
        >
          <button
            type="button"
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
            aria-selected={lang === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn tamil-btn ${lang === 'ta' ? 'active' : ''}`}
            onClick={() => setLang('ta')}
            aria-selected={lang === 'ta'}
          >
            தமிழ்
          </button>
        </div>
      </header>

      {/* Spacer to prevent layout jump under fixed navigation bar */}
      <div className="top-actions-spacer" aria-hidden="true" />
    </>
  )
}
