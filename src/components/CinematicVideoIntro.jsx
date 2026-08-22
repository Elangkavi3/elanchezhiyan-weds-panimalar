import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * CinematicVideoIntro: Multi-Scene Interactive Invitation Flow
 * Scene 1: Opening Video (ideal card.mp4) playing in loop
 * Scene 2: User Click / Tap anywhere
 * Scene 3: Transition Video (transtion.mp4) connecting to the invitation
 * Scene 4: Smooth, seamless transition into the current invitation page
 */
export default function CinematicVideoIntro({ onComplete, lang = 'en' }) {
  // 'OPENING' | 'TRANSITION' | 'FADING_OUT' | 'DONE'
  const [stage, setStage] = useState('OPENING')
  const [isMuted, setIsMuted] = useState(true)

  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  // Ensure Video 1 starts playing automatically on mount
  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.play().catch(() => {
        // Autoplay policy fallback: already muted
      })
    }
  }, [])

  // Transition from Video 1 (Opening) to Video 2 (Transition)
  const handleUserClick = useCallback(() => {
    if (stage !== 'OPENING') return

    setStage('TRANSITION')

    if (video2Ref.current) {
      video2Ref.current.currentTime = 0
      // Unmute on user gesture if desired, or match current mute state
      video2Ref.current.muted = isMuted
      video2Ref.current.play().catch(() => {
        // Fallback with muted play
        video2Ref.current.muted = true
        video2Ref.current.play()
      })
    }

    // Pause Video 1 after crossfade begins
    setTimeout(() => {
      if (video1Ref.current) {
        video1Ref.current.pause()
      }
    }, 400)
  }, [stage, isMuted])

  // When Transition Video ends (or near end), smoothly reveal invitation page
  const handleTransitionEnded = useCallback(() => {
    setStage('FADING_OUT')

    // Trigger onComplete to start petal shower & unlock full invitation
    setTimeout(() => {
      onComplete()
      setStage('DONE')
    }, 600) // matches CSS crossfade transition duration
  }, [onComplete])

  // Skip directly to invitation page
  const handleSkip = useCallback((e) => {
    e.stopPropagation()
    setStage('FADING_OUT')
    setTimeout(() => {
      onComplete()
      setStage('DONE')
    }, 400)
  }, [onComplete])

  // Toggle Mute / Sound
  const toggleMute = useCallback((e) => {
    e.stopPropagation()
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (video1Ref.current) video1Ref.current.muted = nextMuted
    if (video2Ref.current) video2Ref.current.muted = nextMuted
  }, [isMuted])

  if (stage === 'DONE') {
    return null
  }

  return (
    <div
      className={`cinematic-intro-container ${stage === 'FADING_OUT' ? 'fade-out' : ''}`}
      onClick={handleUserClick}
      role="button"
      tabIndex={0}
      aria-label="Tap anywhere to open wedding invitation"
    >
      {/* Desktop Ambient Blurred Backdrop */}
      <div className="desktop-ambient-backdrop" aria-hidden="true" />

      {/* Main Video Presentation Stage */}
      <div className="cinematic-video-wrapper">
        {/* SCENE 3: Transition Video Layer (Underneath Video 1) */}
        <video
          ref={video2Ref}
          src="/transtion.mp4"
          className={`cinematic-video transition-video ${stage === 'TRANSITION' || stage === 'FADING_OUT' ? 'active' : ''}`}
          playsInline
          muted={isMuted}
          preload="auto"
          onEnded={handleTransitionEnded}
        />

        {/* SCENE 1: Opening Video Layer (Top Layer) */}
        <video
          ref={video1Ref}
          src="/ideal card.mp4"
          className={`cinematic-video opening-video ${stage === 'OPENING' ? 'active' : 'fading'}`}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        />

        {/* Cinematic Vignette & Lighting Filter */}
        <div className="cinematic-vignette" />

        {/* SCENE 1: Interactive Tap Prompt (Visible only during opening loop) */}
        {stage === 'OPENING' && (
          <div className="tap-prompt-overlay">
            <div className="tap-prompt-badge">
              <span className="tap-prompt-icon">✨</span>
              <span className="tap-prompt-text">
                {lang === 'ta' ? 'அழைப்பிதழைத் திறக்க தொடவும்' : 'Tap anywhere to open invitation'}
              </span>
              <span className="tap-prompt-icon">✨</span>
            </div>
            <div className="tap-pulse-ring" />
          </div>
        )}

        {/* SCENE 3: Skip Button during Transition Video */}
        {stage === 'TRANSITION' && (
          <button
            type="button"
            className="intro-skip-btn"
            onClick={handleSkip}
            aria-label="Skip video intro"
          >
            <span>{lang === 'ta' ? 'தவிர்க்க' : 'Skip'}</span>
            <span className="skip-arrow">→</span>
          </button>
        )}

        {/* Unmute / Sound Control Button */}
        <button
          type="button"
          className="intro-sound-btn"
          onClick={toggleMute}
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
