import { useState, useRef, useCallback, useEffect } from 'react'

/**
 * Hook to manage background wedding music playback from video audio track
 */
export function useBackgroundAudio(audioSrc = '/transtion.mp4') {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Initialize audio element with loop
  useEffect(() => {
    const audio = new Audio(audioSrc)
    audio.loop = true
    audio.preload = 'auto'
    audioRef.current = audio

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.pause()
      audio.src = ''
    }
  }, [audioSrc])

  // Start audio playback (called when intro video completes)
  const startAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  // Toggle play/pause
  const toggleAudio = useCallback(() => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [])

  return {
    isPlaying,
    startAudio,
    toggleAudio
  }
}
