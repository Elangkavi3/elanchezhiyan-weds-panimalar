import { useState, useEffect } from 'react'
import { TARGET_DATE, EVENT_END_DATE } from '../constants/content'

/**
 * Custom Hook to track event lifecycle status & real-time countdown
 * Returns: { eventStatus: 'UPCOMING' | 'ONGOING' | 'COMPLETED', timeLeft: { days, hours, minutes, seconds } }
 */
export function useEventStatus() {
  const [eventStatus, setEventStatus] = useState('UPCOMING')
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

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

  return { eventStatus, timeLeft }
}
