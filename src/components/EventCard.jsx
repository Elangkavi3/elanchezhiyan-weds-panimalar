import { MAPS_URL } from '../constants/content'
import FloralVineFrameSvg from './svgs/FloralVineFrameSvg'
import FloralDividerSvg from './svgs/FloralDividerSvg'
import { CalendarIcon, LocationPinIcon } from './svgs/Icons'

/**
 * EventCard: Ashok Mahaal Reception details, continuous glowing Shrub Vines border, and direct navigation/calendar action buttons
 */
export default function EventCard({ t, lang }) {
  // Google Calendar helper for Reception
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`${t.groom} & ${t.bride} - ${t.tagline}`)
    const desc = encodeURIComponent(`${t.calendarDesc}\n\nLocation: ${MAPS_URL}`)
    const location = encodeURIComponent(t.venueName)
    // September 13, 2026: 18:30 to 23:30
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260913T183000/20260913T233000&details=${desc}&location=${location}`
  }

  return (
    <section className="events-section">
      {/* Section Heading with Floral Divider SVG */}
      <div className="section-heading-wrapper">
        <h2 className={`section-heading ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.eventSectionTitle}
        </h2>
        <FloralDividerSvg className="floral-divider-svg" />
      </div>

      {/* Royal Reception Card with Connected Glowing Shrub Vines Border Frame */}
      <article className="event-card">
        {/* Sacred Flowing Shrub Vines Border Frame SVG */}
        <FloralVineFrameSvg />

        {/* Card Content Container */}
        <div className="event-card-content">
          {/* Card Badge */}
          <div className="event-badge-wrapper">
            <span className={`event-badge ${lang === 'ta' ? 'tamil-font' : ''}`}>
              {t.eventBadge}
            </span>
          </div>

          {/* Event Title */}
          <h3 className={`event-title ${lang === 'ta' ? 'tamil-font' : ''}`}>
            {t.eventTitle}
          </h3>

          {/* Details Grid */}
          <div className="event-details-box">
            {/* Date & Time */}
            <div className="event-row">
              <div className="event-icon-badge">
                <CalendarIcon className="btn-svg" />
              </div>
              <div>
                <div className={`event-highlight ${lang === 'ta' ? 'tamil-font' : ''}`}>
                  {t.dateFormatted}
                </div>
                <div className={`event-subdetail ${lang === 'ta' ? 'tamil-font' : ''}`}>
                  {t.timeFormatted}
                </div>
              </div>
            </div>

            {/* Venue & Maps hint */}
            <div className="event-row">
              <div className="event-icon-badge">
                <LocationPinIcon className="btn-svg" />
              </div>
              <div>
                <div className={`event-highlight ${lang === 'ta' ? 'tamil-font' : ''}`}>
                  {t.venueName}
                </div>
                <div className={`event-subdetail ${lang === 'ta' ? 'tamil-font' : ''}`}>
                  {t.mapHint}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="card-actions">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn btn-primary ${lang === 'ta' ? 'tamil-font' : ''}`}
            >
              <LocationPinIcon className="btn-svg" />
              <span>{t.btnMap}</span>
            </a>
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn btn-secondary ${lang === 'ta' ? 'tamil-font' : ''}`}
            >
              <CalendarIcon className="btn-svg" />
              <span>{t.btnCalendar}</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
