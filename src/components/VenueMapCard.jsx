import { MAPS_URL, MAPS_EMBED_URL } from '../constants/content'
import { LocationPinIcon } from './svgs/Icons'

/**
 * VenueMapCard: Embedded Google Map iframe card positioned below Grand Reception
 * Includes interactive Google Map, address subtitle, and direct GPS navigation button.
 */
export default function VenueMapCard({ t, lang }) {
  return (
    <article className="venue-map-card">
      {/* Decorative top accent line */}
      <div className="map-card-accent-strip" aria-hidden="true" />

      {/* Header Info */}
      <div className="map-card-header">
        <div className="map-badge-wrapper">
          <span className={`map-badge ${lang === 'ta' ? 'tamil-font' : ''}`}>
            {t.mapCardBadge}
          </span>
        </div>
        <h3 className={`map-card-title ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.mapCardTitle}
        </h3>
        <p className={`map-card-address ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.venueName} • Tirupattur
        </p>
      </div>

      {/* Embedded Google Map Iframe */}
      <div className="map-iframe-wrapper">
        <iframe
          src={MAPS_EMBED_URL}
          className="map-iframe"
          width="100%"
          height="240"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t.venueName ? `${t.venueName} Google Map` : 'Venue Google Map'}
        />
        {/* Subtle glass reflection overlay */}
        <div className="map-frame-reflection" aria-hidden="true" />
      </div>

      {/* Footer Navigation Action */}
      <div className="map-card-footer">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`map-direct-btn ${lang === 'ta' ? 'tamil-font' : ''}`}
          title={t.mapCardDirections}
        >
          <LocationPinIcon className="btn-svg" />
          <span>{t.mapCardDirections}</span>
        </a>
      </div>
    </article>
  )
}
