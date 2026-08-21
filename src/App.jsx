import { useState } from 'react'
import { CONTENT } from './constants/content'
import { useEventStatus } from './hooks/useEventStatus'
import { usePetalShower } from './hooks/usePetalShower'
import TopActions from './components/TopActions'
import HeroSection from './components/HeroSection'
import StatusBanner from './components/StatusBanner'
import EventCard from './components/EventCard'
import FloatingBar from './components/FloatingBar'
import PetalShower from './components/PetalShower'
import FloatingBalloons from './components/FloatingBalloons'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = CONTENT[lang]

  const { eventStatus, timeLeft } = useEventStatus()
  const { petals, showerBlessings } = usePetalShower()

  return (
    <div className={`mobile-app-wrapper ${lang === 'ta' ? 'tamil-mode' : ''}`}>
      {/* Interactive Floating Celebration Balloons (Move & Single-Touch Pop) */}
      <FloatingBalloons />

      {/* Falling Flower Petals & Sparkles */}
      <PetalShower petals={petals} />

      {/* Top Header Actions (Location Pin on Left & Language Toggle on Right) */}
      <TopActions lang={lang} setLang={setLang} />

      {/* Royal Hero Section with Jharokha Arch & Monogram */}
      <HeroSection t={t} lang={lang} onLogoClick={showerBlessings} />

      {/* Dynamic Lifecycle Banner (Countdown / Happening Now / Thank You) */}
      <StatusBanner eventStatus={eventStatus} timeLeft={timeLeft} t={t} lang={lang} />

      {/* Reception Details & Navigation Actions */}
      <EventCard t={t} lang={lang} />

      {/* Sticky Floating Mobile Blessings & Share Bar */}
      <FloatingBar t={t} lang={lang} onShowerBlessings={showerBlessings} />

      {/* Footer & Copyright */}
      <Footer t={t} lang={lang} />
    </div>
  )
}
