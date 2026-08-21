import { useState, useEffect } from 'react'
import logoImg from './assets/Logo.png'
import './App.css'

// Target Reception Date: September 13, 2026 at 6:30 PM
const TARGET_DATE = new Date(2026, 8, 13, 18, 30, 0)
const EVENT_DURATION_HOURS = 5
const EVENT_END_DATE = new Date(TARGET_DATE.getTime() + EVENT_DURATION_HOURS * 60 * 60 * 1000)

const MAPS_URL = "https://www.google.com/maps/place/Ashok+Mahaal/@12.7526117,78.698805,63m/data=!3m1!1e3!4m6!3m5!1s0x3bad087c311ea8fd:0x5586ba87a7ca2b99!8m2!3d12.7526875!4d78.6989375!16s%2Fg%2F11cn94d6w1"

// Bilingual Content Dictionary
const CONTENT = {
  en: {
    badge: "Reception Invitation",
    subtitle: "With our family",
    groom: "Elanchezhiyan",
    bride: "Panimalar",
    tagline: "Wedding Reception",
    message: "Cordially invite you to celebrate the joyous occasion of our Wedding Reception.",
    countdownTitle: "Countdown to the Reception",
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    ongoing: {
      badge: "🎉 Happening Now",
      title: "Wedding Reception in Progress",
      desc: "The celebration has begun! We warmly welcome you to Ashok Mahaal to celebrate with us."
    },
    thankyou: {
      badge: "💐 Thank You",
      title: "Thank You for Your Visit & Blessings",
      desc: "We heartfeltly thank you for joining us and making our Wedding Reception memorable with your gracious presence and blessings."
    },
    eventSectionTitle: "Event Details",
    eventBadge: "✨ Grand Reception",
    eventTitle: "Grand Wedding Reception",
    dateFormatted: "Sunday, September 13, 2026",
    timeFormatted: "6:30 PM Onwards",
    venueLabel: "Venue",
    venueName: "Ashok Mahaal",
    mapHint: "Tap \"View on Google Maps\" below for directions",
    btnMap: "View on Google Maps",
    btnCalendar: "Add to Calendar",
    btnBlessings: "Shower Blessings",
    btnShare: "Share Invite",
    footerQuote: "Your gracious presence is the greatest gift",
    footerCredits: "With Best Compliments From Family & Friends",
    calendarDesc: "You are cordially invited to celebrate the Wedding Reception of Elanchezhiyan & Panimalar at Ashok Mahaal.",
    shareMsg: `✨ *Wedding Reception Invitation* ✨\n\nWe warmly invite you with your family and friends to celebrate the Grand Wedding Reception of:\n\n🤵 *Elanchezhiyan* & 👰 *Panimalar*\n\n📅 *Date:* Sunday, September 13, 2026\n⏰ *Time:* 6:30 PM Onwards\n📍 *Venue:* Ashok Mahaal\n🗺️ *Location:* ${MAPS_URL}\n\nLooking forward to celebrating with you! 🌸`
  },
  ta: {
    badge: "வரவேற்பு அழைப்பிதழ்",
    subtitle: "எங்கள் குடும்பத்தினரின் நல்வாழ்த்துகளுடன்",
    groom: "இளஞ்செழியன்",
    bride: "பனிமலர்",
    tagline: "திருமண வரவேற்பு நல்விழா",
    message: "எங்கள் திருமண வரவேற்பு நல்விழாவிற்கு தங்களை குடும்ப சமேதராக வருகை தந்து வாழ்த்துமாறு அன்புடன் அழைக்கிறோம்.",
    countdownTitle: "வரவேற்பு விழாவுக்கான கவுண்ட்டவுன்",
    days: "நாட்கள்",
    hours: "மணிகள்",
    mins: "நிமிடங்கள்",
    secs: "நொடிகள்",
    ongoing: {
      badge: "🎉 விழா நடைபெறுகிறது",
      title: "திருமண வரவேற்பு நல்விழா இனிதே நடைபெறுகிறது",
      desc: "வரவேற்பு விழா தொடங்கியது! அசோக் மஹாலில் தங்களை குடும்ப சமேதராக அன்புடன் வரவேற்கிறோம்."
    },
    thankyou: {
      badge: "💐 மனமார்ந்த நன்றிகள்",
      title: "வருகை தந்து வாழ்த்தியமைக்கு நன்றி",
      desc: "எங்கள் திருமண வரவேற்பு நல்விழாவில் கலந்து கொண்டு எங்களை ஆசீர்வதித்து சிறப்பித்த அனைத்து நல்நெஞ்சங்களுக்கும் எங்கள் குடும்பத்தின் மனமார்ந்த நன்றிகள்."
    },
    eventSectionTitle: "நிகழ்ச்சி விவரங்கள்",
    eventBadge: "✨ மங்கல வரவேற்பு",
    eventTitle: "மங்கலத் திருமண வரவேற்பு",
    dateFormatted: "ஞாயிற்றுக்கிழமை, செப்டம்பர் 13, 2026",
    timeFormatted: "மாலை 6:30 மணி முதல்",
    venueLabel: "இடம்",
    venueName: "அசோக் மஹால்",
    mapHint: "வழி அறிய கீழே உள்ள \"கூகிள் மேப்\" பொத்தானை அழுத்தவும்",
    btnMap: "கூகிள் மேப் பார்க்க",
    btnCalendar: "கேலெண்டரில் சேர்க்க",
    btnBlessings: "ஆசி வழங்குக",
    btnShare: "பகிரவும்",
    footerQuote: "தங்களின் வருகையே எங்களுக்குப் பெருமை",
    footerCredits: "உற்றார், உறவினர் மற்றும் நண்பர்களின் நல்வாழ்த்துகளுடன்",
    calendarDesc: "இளஞ்செழியன் & பனிமலர் அவர்களின் திருமண வரவேற்பு நல்விழா - அசோக் மஹால்.",
    shareMsg: `✨ *திருமண வரவேற்பு அழைப்பிதழ்* ✨\n\nஎங்கள் திருமண வரவேற்பு நல்விழாவிற்கு தாங்களும் தங்களது குடும்பத்தினரும் வருகை தந்து எங்களை ஆசீர்வதிக்க அன்புடன் அழைக்கிறோம்!\n\nமணமக்கள்:\n🤵 *இளஞ்செழியன்* & 👰 *பனிமலர்*\n\n📅 *நாள்:* ஞாயிற்றுக்கிழமை, செப்டம்பர் 13, 2026\n⏰ *நேரம்:* மாலை 6:30 மணி முதல்\n📍 *இடம்:* அசோக் மஹால்\n🗺️ *கூகிள் மேப்:* ${MAPS_URL}\n\nதங்கள் வரவை நாடும் அன்புக் குடும்பத்தினர்! 🌸`
  }
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = CONTENT[lang]

  // Status state: 'UPCOMING' | 'ONGOING' | 'COMPLETED'
  const [eventStatus, setEventStatus] = useState('UPCOMING')
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const checkStatusAndTime = () => {
      const now = new Date().getTime()
      const start = TARGET_DATE.getTime()
      const end = EVENT_END_DATE.getTime()

      if (now < start) {
        setEventStatus('UPCOMING')
        const difference = start - now
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else if (now >= start && now <= end) {
        setEventStatus('ONGOING')
      } else {
        setEventStatus('COMPLETED')
      }
    }

    checkStatusAndTime()
    const timer = setInterval(checkStatusAndTime, 1000)
    return () => clearInterval(timer)
  }, [])

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
    const title = encodeURIComponent(`${CONTENT[lang].groom} & ${CONTENT[lang].bride} - ${CONTENT[lang].tagline}`)
    const desc = encodeURIComponent(`${t.calendarDesc}\n\nLocation: ${MAPS_URL}`)
    const location = encodeURIComponent(t.venueName)
    // 20260913T183000 / 20260913T233000
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260913T183000/20260913T233000&details=${desc}&location=${location}`
  }

  // WhatsApp Share text
  const shareMessage = encodeURIComponent(t.shareMsg)

  return (
    <div className={`mobile-app-wrapper ${lang === 'ta' ? 'tamil-mode' : ''}`}>
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

      {/* Top Actions Bar (Location Icon on Left, Compact Language Toggle on Right) */}
      <div className="top-actions-bar">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="trending-location-btn"
          title={lang === 'ta' ? "அசோக் மஹால் கூகிள் மேப்" : "Ashok Mahaal Google Map"}
          aria-label={lang === 'ta' ? "அசோக் மஹால் கூகிள் மேப்" : "Ashok Mahaal Google Map"}
        >
          <span className="location-pulse-ring" />
          <svg
            className="location-svg-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="currentColor"
            />
          </svg>
        </a>

        <div className="lang-toggle-pill" role="tablist" aria-label="Language Selection">
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
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="toran-border">
          <span>🪷</span>
          <span className="toran-dot" />
          <span>🪷</span>
          <span className="toran-dot" />
          <span>🪷</span>
        </div>

        <span className={`invitation-badge ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.badge}</span>

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

        <p className={`subtitle-text ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.subtitle}</p>

        <h1 className={`couple-title ${lang === 'ta' ? 'tamil-title' : ''}`}>
          <span>{t.groom}</span>
          <span className="ampersand">&amp;</span>
          <span>{t.bride}</span>
        </h1>

        <p className={`tagline ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.tagline}</p>

        <p className={`invitation-intro ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.message}
        </p>
      </section>

      {/* Dynamic Lifecycle Card: Upcoming Countdown / Ongoing Live Event / Thank You After Event */}
      {eventStatus === 'UPCOMING' && (
        <section className="countdown-container">
          <div className={`countdown-label ${lang === 'ta' ? 'tamil-font' : ''}`}>
            <span>✨</span>
            <span>{t.countdownTitle}</span>
            <span>✨</span>
          </div>
          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.days}</div>
              <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.days}</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.hours}</div>
              <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.hours}</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.minutes}</div>
              <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.mins}</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.seconds}</div>
              <div className={`countdown-unit ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.secs}</div>
            </div>
          </div>
        </section>
      )}

      {eventStatus === 'ONGOING' && (
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
      )}

      {eventStatus === 'COMPLETED' && (
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
      )}

      {/* Reception Details Section */}
      <section className="events-section">
        <h2 className={`section-heading ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.eventSectionTitle}</h2>

        <article className="event-card reception-card">
          <div className={`event-badge ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.eventBadge}</div>
          <h3 className={`event-title ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.eventTitle}</h3>

          <div className="event-row">
            <span className="event-icon">📅</span>
            <div>
              <div className={`event-highlight ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.dateFormatted}</div>
              <div className={`event-subdetail ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.timeFormatted}</div>
            </div>
          </div>

          <div className="event-row">
            <span className="event-icon">📍</span>
            <div>
              <div className={`event-highlight ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.venueName}</div>
              <div className={`event-subdetail ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.mapHint}</div>
            </div>
          </div>

          <div className="card-actions">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn btn-primary ${lang === 'ta' ? 'tamil-font' : ''}`}
            >
              <span>📍</span> {t.btnMap}
            </a>
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`action-btn btn-secondary ${lang === 'ta' ? 'tamil-font' : ''}`}
            >
              <span>📅</span> {t.btnCalendar}
            </a>
          </div>
        </article>
      </section>

      {/* Floating Sticky Mobile Blessings & Share Bar */}
      <aside className="floating-actions">
        <div className="blessings-bar">
          <button className={`blessing-btn ${lang === 'ta' ? 'tamil-font' : ''}`} onClick={showerBlessings}>
            <span>🌸</span> {t.btnBlessings}
          </button>
          <a
            href={`https://api.whatsapp.com/send?text=${shareMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-share-btn ${lang === 'ta' ? 'tamil-font' : ''}`}
            title="Share on WhatsApp"
          >
            <span>💬</span> {t.btnShare}
          </a>
        </div>
      </aside>

      {/* Footer */}
      <footer className="invitation-footer">
        <p className={`footer-quote ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.footerQuote}</p>
        <p className={`footer-credits ${lang === 'ta' ? 'tamil-font' : ''}`}>{t.footerCredits}</p>

        <div className="footer-divider" />

        <div className="copyright-section">
          <p className="copyright-text">
            © {new Date().getFullYear()} • Created by <span className="copyright-author">Elangkavi</span>
          </p>
          <p className="copyright-subtext">All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}





