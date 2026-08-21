import { useState, useEffect } from 'react'
import logoImg from './assets/Logo.png'
import './App.css'

// Reception details
const RECEPTION_DETAILS = {
  groom: "Elanchezhiyan",
  bride: "Panimalar",
  // Reception Date: September 13, 2026 at 6:30 PM
  targetDate: new Date(2026, 8, 13, 18, 30, 0),
  event: {
    title: "Grand Wedding Reception",
    dateFormatted: "Sunday, September 13, 2026",
    timeFormatted: "6:30 PM Onwards",
    venueName: "Ashok Mahaal",
    mapsUrl: "https://www.google.com/maps/place/Ashok+Mahaal/@12.7526117,78.698805,63m/data=!3m1!1e3!4m6!3m5!1s0x3bad087c311ea8fd:0x5586ba87a7ca2b99!8m2!3d12.7526875!4d78.6989375!16s%2Fg%2F11cn94d6w1"
  }
}

export default function App() {
  const details = RECEPTION_DETAILS

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const calculateTime = () => {
      const difference = +details.targetDate - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [details.targetDate])

  // Interactive Flower Petal Shower
  const showerBlessings = () => {
    const icons = ['🌸', '🌺', '🌼', '✨', '💛', '🌹', '🪷']
    const newPetals = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 95,
      animationDuration: 2.2 + Math.random() * 2,
      size: 18 + Math.random() * 14,
    }))

    setPetals((prev) => [...prev, ...newPetals])

    setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.includes(p)))
    }, 4500)
  }

  // Google Calendar helper for Reception
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`${details.groom} & ${details.bride} - Wedding Reception`)
    const desc = encodeURIComponent(`You are cordially invited to celebrate the Wedding Reception of ${details.groom} & ${details.bride} at ${details.event.venueName}.\n\nLocation: ${details.event.mapsUrl}`)
    const location = encodeURIComponent(details.event.venueName)
    // 20260913T183000 / 20260913T220000
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260913T183000/20260913T223000&details=${desc}&location=${location}`
  }

  // WhatsApp Share text
  const shareMessage = encodeURIComponent(
    `✨ *Wedding Reception Invitation* ✨\n\nWe warmly invite you with your family and friends to celebrate the Grand Wedding Reception of:\n\n🤵 *${details.groom}* & 👰 *${details.bride}*\n\n📅 *Date:* ${details.event.dateFormatted}\n⏰ *Time:* ${details.event.timeFormatted}\n📍 *Venue:* ${details.event.venueName}\n🗺️ *Location:* ${details.event.mapsUrl}\n\nLooking forward to celebrating with you! 🌸`
  )

  return (
    <div className="mobile-app-wrapper">
      {/* Falling Blessing Petals */}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            fontSize: `${petal.size}px`,
          }}
        >
          {petal.icon}
        </span>
      ))}

      {/* Auspicious Top Bar */}
      <header className="festive-top-bar">
        <span>॥</span>
        <span>ஸ்ரீ மஹா கணபதியே நம:</span>
        <span>॥</span>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="toran-border">
          <span>🪷</span>
          <span className="toran-dot" />
          <span>🪷</span>
          <span className="toran-dot" />
          <span>🪷</span>
        </div>

        <span className="invitation-badge">Reception Invitation</span>

        {/* E & P Logo with bright festive aura */}
        <div className="logo-container" onClick={showerBlessings} title="Tap for blessings!">
          <div className="logo-sunburst" />
          <div className="logo-ring" />
          <img
            src={logoImg}
            alt="Elanchezhiyan & Panimalar Monogram Logo"
            className="app-logo"
            loading="eager"
          />
        </div>

        <p className="subtitle-text">Together with their families</p>

        <h1 className="couple-title">
          <span>{details.groom}</span>
          <span className="ampersand">&amp;</span>
          <span>{details.bride}</span>
        </h1>

        <p className="tagline">Wedding Reception</p>

        <p className="invitation-intro">
          Cordially invite you to celebrate the joyous occasion of our Wedding Reception.
        </p>
      </section>

      {/* Live Countdown to Reception */}
      <section className="countdown-container">
        <div className="countdown-label">
          <span>✨</span>
          <span>Countdown to the Reception</span>
          <span>✨</span>
        </div>
        <div className="countdown-grid">
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-unit">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-unit">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-unit">Mins</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-unit">Secs</div>
          </div>
        </div>
      </section>

      {/* Reception Details Section */}
      <section className="events-section">
        <h2 className="section-heading">Event Details</h2>

        <article className="event-card reception-card">
          <div className="event-badge">✨ Grand Reception</div>
          <h3 className="event-title">{details.event.title}</h3>

          <div className="event-row">
            <span className="event-icon">📅</span>
            <div>
              <div className="event-highlight">{details.event.dateFormatted}</div>
              <div className="event-subdetail">{details.event.timeFormatted}</div>
            </div>
          </div>

          <div className="event-row">
            <span className="event-icon">📍</span>
            <div>
              <div className="event-highlight">{details.event.venueName}</div>
              <div className="event-subdetail">Tap "View on Google Maps" below for directions</div>
            </div>
          </div>

          <div className="card-actions">
            <a
              href={details.event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn btn-primary"
            >
              <span>📍</span> View on Google Maps
            </a>
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn btn-secondary"
            >
              <span>📅</span> Add to Calendar
            </a>
          </div>
        </article>
      </section>

      {/* Floating Sticky Mobile Blessings & Share Bar */}
      <aside className="floating-actions">
        <div className="blessings-bar">
          <button className="blessing-btn" onClick={showerBlessings}>
            <span>🌸</span> Shower Blessings
          </button>
          <a
            href={`https://api.whatsapp.com/send?text=${shareMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-share-btn"
            title="Share on WhatsApp"
          >
            <span>💬</span> Share Invite
          </a>
        </div>
      </aside>

      {/* Footer */}
      <footer className="invitation-footer">
        <p className="footer-quote">Your gracious presence is the greatest gift</p>
        <p className="footer-credits">With Best Compliments From Family &amp; Friends</p>
      </footer>
    </div>
  )
}



