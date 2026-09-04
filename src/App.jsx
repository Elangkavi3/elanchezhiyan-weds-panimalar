import { useState, useCallback } from 'react'
import { CONTENT } from './constants/content'
import { useEventStatus } from './hooks/useEventStatus'
import { usePetalShower } from './hooks/usePetalShower'
import { useBackgroundAudio } from './hooks/useBackgroundAudio'
import CinematicVideoIntro from './components/CinematicVideoIntro'
import TopActions from './components/TopActions'
import HeroSection from './components/HeroSection'
import ScrollZoomBackground from './components/ScrollZoomBackground'
import StatusBanner from './components/StatusBanner'
import EventCard from './components/EventCard'
import FloatingBar from './components/FloatingBar'
import PetalShower from './components/PetalShower'
import FloatingBalloons from './components/FloatingBalloons'
import Footer from './components/Footer'
import GalleryModal from './components/GalleryModal'
import './App.css'

export default function App() {
  const [lang, setLang] = useState('en')
  const [introCompleted, setIntroCompleted] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const t = CONTENT[lang]

  const { eventStatus, timeLeft } = useEventStatus()
  const { petals, showerBlessings } = usePetalShower()
  const { isPlaying, startAudio, toggleAudio } = useBackgroundAudio('/transtion.mp4')

  // Called when video transition concludes to unlock the invitation page & celebrate
  const handleIntroComplete = useCallback(() => {
    setIntroCompleted(true)
    showerBlessings()
    startAudio()
  }, [showerBlessings, startAudio])

  return (
    <>
      {/* Cinematic 4-Scene Video Flow: Opening Video (Loop) -> User Click -> Transition Video -> Invitation */}
      {!introCompleted && (
        <CinematicVideoIntro onComplete={handleIntroComplete} lang={lang} />
      )}

      {/* Main Wedding Reception Invitation Page */}
      <div
        className={`mobile-app-wrapper ${lang === 'ta' ? 'tamil-mode' : ''} ${
          introCompleted ? 'invitation-page-revealed' : 'invitation-page-hidden'
        }`}
      >
        {/* Dynamic Scroll-to-Zoom Background (Replaces card.png) */}
        <ScrollZoomBackground />

        {/* Interactive Floating Celebration Balloons (Move & Single-Touch Pop) */}
        {introCompleted && <FloatingBalloons />}

        {/* Falling Flower Petals & Sparkles */}
        <PetalShower petals={petals} />

        {/* Top Header Actions (Location, Audio, Flower Blessings, Photo Gallery, WhatsApp, Language) */}
        <TopActions
          lang={lang}
          setLang={setLang}
          isPlaying={isPlaying}
          toggleAudio={toggleAudio}
          t={t}
          onShowerBlessings={showerBlessings}
          onOpenGallery={() => setGalleryOpen(true)}
        />

        {/* Royal Hero Section with Jharokha Arch & Monogram */}
        <HeroSection t={t} lang={lang} onLogoClick={showerBlessings} />

        {/* Dynamic Lifecycle Banner (Countdown / Happening Now / Thank You) */}
        <StatusBanner eventStatus={eventStatus} timeLeft={timeLeft} t={t} lang={lang} />

        {/* Reception Details & Navigation Actions */}
        <EventCard t={t} lang={lang} />

        {/* 20% Visual Viewing Gap for Below View (Level Couple Photo) */}
        <div className="below-view-gap" aria-hidden="true" />

        {/* Sticky Floating Mobile Blessings & Share Bar */}
        <FloatingBar t={t} lang={lang} onShowerBlessings={showerBlessings} />

        {/* Footer & Copyright */}
        <Footer t={t} lang={lang} />

        {/* Wedding Photo Album Gallery Modal (Stacked Zigzag Cards) */}
        <GalleryModal
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          lang={lang}
          onShowerBlessings={showerBlessings}
        />
      </div>
    </>
  )
}
