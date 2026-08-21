import { useState } from 'react'

/**
 * Custom Hook for triggering animated falling flower petals & sparkles
 */
export function usePetalShower() {
  const [petals, setPetals] = useState([])

  const showerBlessings = () => {
    const icons = ['🌸', '🌺', '🌼', '✨', '💛', '🌹', '🪷', '🎉']
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

  return { petals, showerBlessings }
}
