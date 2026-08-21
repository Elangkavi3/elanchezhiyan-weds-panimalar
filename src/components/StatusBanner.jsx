import { ClockIcon } from './svgs/Icons'

/**
 * Dynamic Status Banner:
 * - UPCOMING: Royal gold-rimmed countdown dials
 * - ONGOING: Live celebration banner during 5-hour event
 * - COMPLETED: Thank You card after the reception ends
 */
export default function StatusBanner({ eventStatus, timeLeft, t, lang }) {
  if (eventStatus === 'UPCOMING') {
    return (
      <section className="countdown-container">
        <div className={`countdown-label ${lang === 'ta' ? 'tamil-font' : ''}`}>
          <ClockIcon className="clock-icon" />
          <span>{t.countdownTitle}</span>
          <span>✨</span>
        </div>

        <div className="countdown-grid">
          {/* Days */}
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>
              {t.days}
            </div>
          </div>

          {/* Hours */}
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>
              {t.hours}
            </div>
          </div>

          {/* Minutes */}
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>
              {t.mins}
            </div>
          </div>

          {/* Seconds */}
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>
              {t.secs}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (eventStatus === 'ONGOING') {
    return (
      <section className="ongoing-container">
        <div className={`status-badge ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.ongoing.badge}
        </div>
        <h2 className={`status-title ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.ongoing.title}
        </h2>
        <p className={`status-desc ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.ongoing.desc}
        </p>
      </section>
    )
  }

  if (eventStatus === 'COMPLETED') {
    return (
      <section className="thankyou-container">
        <div className={`status-badge ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.thankyou.badge}
        </div>
        <h2 className={`status-title ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.thankyou.title}
        </h2>
        <p className={`status-desc ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.thankyou.desc}
        </p>
      </section>
    )
  }

  return null
}
