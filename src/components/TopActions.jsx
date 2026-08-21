import { MAPS_URL } from '../constants/content'
import { LocationPinIcon } from './svgs/Icons'

/**
 * Top Actions Header: Location Pin on the Left, Compact Language Toggle on the Right
 */
export default function TopActions({ lang, setLang }) {
  return (
    <header className="top-actions-bar">
      {/* Trending Animated Location Pin (Far Left) */}
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
  )
}
