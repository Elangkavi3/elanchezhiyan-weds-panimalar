import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Authentic Festive Helium Balloon Color Palettes (Realistic 3D Latex Shading)
 */
const BALLOON_THEMES = [
  {
    name: 'gold',
    highlight: '#fef08a',
    main: '#f59e0b',
    shadow: '#92400e',
    dropShadow: 'rgba(217, 119, 6, 0.4)',
    stringColor: '#b45309',
    sparkles: ['#ffd700', '#f59e0b', '#fff', '#fde047', '#d97706']
  },
  {
    name: 'ruby',
    highlight: '#fda4af',
    main: '#e11d48',
    shadow: '#881337',
    dropShadow: 'rgba(190, 18, 60, 0.45)',
    stringColor: '#be123c',
    sparkles: ['#f43f5e', '#be123c', '#ffe4e6', '#ffd700', '#fff']
  },
  {
    name: 'rose',
    highlight: '#fff1f2',
    main: '#fb7185',
    shadow: '#9f1239',
    dropShadow: 'rgba(244, 63, 94, 0.4)',
    stringColor: '#e11d48',
    sparkles: ['#fda4af', '#f43f5e', '#ffd700', '#ffffff']
  },
  {
    name: 'rani-pink',
    highlight: '#f5d0fe',
    main: '#d946ef',
    shadow: '#701a75',
    dropShadow: 'rgba(192, 38, 211, 0.4)',
    stringColor: '#a21caf',
    sparkles: ['#f472b6', '#e879f9', '#c026d3', '#ffd700', '#ffffff']
  }
]

let balloonCounter = 0
let particleCounter = 0

/**
 * Creates a natural, distortion-free vector balloon object
 */
function createNewBalloon(initialY = null) {
  const id = ++balloonCounter
  const theme = BALLOON_THEMES[Math.floor(Math.random() * BALLOON_THEMES.length)]
  // Width 34px to 40px for natural mobile proportions
  const width = Math.floor(Math.random() * 6) + 34
  const x = Math.floor(Math.random() * 68) + 16
  const y = initialY !== null ? initialY : Math.floor(Math.random() * 70) + 15
  const floatSpeed = 0.05 + Math.random() * 0.06
  const swaySpeed = 1.2 + Math.random() * 1.2
  const swayAmount = 5 + Math.random() * 7
  const wobbleAngle = (Math.random() - 0.5) * 10

  return {
    id,
    theme,
    width,
    x,
    y,
    floatSpeed,
    swaySpeed,
    swayAmount,
    wobbleAngle,
    time: Math.random() * 10,
    isDragging: false
  }
}

/**
 * Generates pop burst sparkle particles
 */
function generatePopParticles(balloon, clientX, clientY) {
  const particleCount = 12
  const particles = []
  const baseId = ++particleCounter

  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * 2 * Math.PI + (Math.random() - 0.5) * 0.5
    const distance = Math.floor(Math.random() * 30) + 24 // 24px to 54px radius
    const pColor = balloon.theme.sparkles[i % balloon.theme.sparkles.length]
    const pSize = Math.floor(Math.random() * 5) + 4
    const isStar = i % 3 === 0

    particles.push({
      id: `${baseId}-${i}`,
      x: clientX,
      y: clientY,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      color: pColor,
      size: pSize,
      isStar,
      rotation: Math.random() * 360
    })
  }

  return particles
}

/**
 * Synthesizes a soft cheerful balloon pop sound
 */
function playPopSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    if (ctx.state === 'suspended') {
      ctx.resume()
    }
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(620, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.06)

    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.07)
  } catch {
    // Audio context may be blocked by browser policy until interaction
  }
}

/**
 * FloatingBalloons: Natural vector helium balloons with realistic 3D latex shading
 * - Authentic non-distorted balloon curvature with tied knot & curled ribbon
 * - Touch-draggable and single-tap pop burst with golden sparkles
 */
export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState(() => [
    createNewBalloon(28),
    createNewBalloon(72)
  ])
  const [poppedParticles, setPoppedParticles] = useState([])
  const dragRef = useRef({
    activeId: null,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    startTime: 0,
    hasMoved: false
  })

  // Gentle upward floating and horizontal swaying loop
  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prev) => {
        let current = [...prev]
        if (current.length < 3 && Math.random() < 0.12) {
          current.push(createNewBalloon(105))
        }

        return current
          .map((b) => {
            if (b.isDragging) return b
            const newY = b.y - b.floatSpeed
            const newTime = b.time + 0.03
            return {
              ...b,
              y: newY,
              time: newTime
            }
          })
          .filter((b) => b.y > -18)
      })
    }, 35)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Trigger balloon POP effect
  const popBalloon = useCallback((balloon, clientX, clientY) => {
    playPopSound()

    const newParticles = generatePopParticles(balloon, clientX, clientY)
    setPoppedParticles((prev) => [...prev, ...newParticles])

    // Remove popped balloon immediately
    setBalloons((prev) => prev.filter((b) => b.id !== balloon.id))

    // Remove sparkle particles after animation finishes (750ms)
    setTimeout(() => {
      setPoppedParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      )
    }, 750)

    // Respawn a fresh balloon from the bottom after 3 seconds
    setTimeout(() => {
      setBalloons((prev) => {
        if (prev.length < 3) {
          return [...prev, createNewBalloon(105)]
        }
        return prev
      })
    }, 3000)
  }, [])

  // --- TOUCH / MOUSE HANDLERS ---
  const handlePointerDown = useCallback((e, balloon) => {
    e.preventDefault()
    e.stopPropagation()

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    dragRef.current = {
      activeId: balloon.id,
      startX: clientX,
      startY: clientY,
      initialX: balloon.x,
      initialY: balloon.y,
      startTime: e.timeStamp || 0,
      hasMoved: false
    }

    setBalloons((prev) =>
      prev.map((b) => (b.id === balloon.id ? { ...b, isDragging: true } : b))
    )
  }, [])

  const handlePointerMove = useCallback((e) => {
    if (!dragRef.current.activeId) return

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    const deltaX = clientX - dragRef.current.startX
    const deltaY = clientY - dragRef.current.startY

    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      dragRef.current.hasMoved = true
    }

    const percentDeltaX = (deltaX / window.innerWidth) * 100
    const percentDeltaY = (deltaY / window.innerHeight) * 100

    setBalloons((prev) =>
      prev.map((b) => {
        if (b.id === dragRef.current.activeId) {
          return {
            ...b,
            x: Math.max(6, Math.min(88, dragRef.current.initialX + percentDeltaX)),
            y: dragRef.current.initialY + percentDeltaY
          }
        }
        return b
      })
    )
  }, [])

  const handlePointerUp = useCallback((e) => {
    const activeId = dragRef.current.activeId
    if (!activeId) return

    const duration = (e.timeStamp || 0) - dragRef.current.startTime
    const hasMoved = dragRef.current.hasMoved

    setBalloons((prev) => {
      const balloon = prev.find((b) => b.id === activeId)
      // Single tap / quick touch = POP
      if (balloon && (!hasMoved || duration < 240)) {
        const clientX = e.changedTouches
          ? e.changedTouches[0].clientX
          : e.clientX || dragRef.current.startX
        const clientY = e.changedTouches
          ? e.changedTouches[0].clientY
          : e.clientY || dragRef.current.startY
        popBalloon(balloon, clientX, clientY)
        return prev
      }

      return prev.map((b) => (b.id === activeId ? { ...b, isDragging: false } : b))
    })

    dragRef.current.activeId = null
  }, [popBalloon])

  return (
    <div
      className="floating-balloons-overlay"
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onTouchEnd={handlePointerUp}
      aria-hidden="true"
    >
      {/* 1. Authentic Vector 3D Latex Balloons */}
      {balloons.map((balloon) => {
        const swayOffset = Math.sin(balloon.time * balloon.swaySpeed) * balloon.swayAmount
        const currentTilt = balloon.wobbleAngle + Math.cos(balloon.time * balloon.swaySpeed) * 4
        const height = balloon.width * 1.62 // natural height ratio including tied ribbon

        return (
          <div
            key={balloon.id}
            className={`floating-balloon-item ${balloon.isDragging ? 'is-dragging' : ''}`}
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}%`,
              width: `${balloon.width}px`,
              height: `${height}px`,
              transform: `translate3d(${swayOffset}px, 0, 0) rotate(${currentTilt}deg)`,
              cursor: 'grab'
            }}
            onMouseDown={(e) => handlePointerDown(e, balloon)}
            onTouchStart={(e) => handlePointerDown(e, balloon)}
            title="Tap to pop or drag around!"
          >
            {/* Authentic SVG Vector Balloon with 3D Spherical Latex Volume */}
            <svg
              viewBox="0 0 60 98"
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="balloon-svg-graphic"
            >
              <defs>
                {/* 3D Radial Latex Gradient */}
                <radialGradient id={`balloonShading-${balloon.id}`} cx="35%" cy="30%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="25%" stopColor={balloon.theme.highlight} stopOpacity="1" />
                  <stop offset="65%" stopColor={balloon.theme.main} stopOpacity="1" />
                  <stop offset="100%" stopColor={balloon.theme.shadow} stopOpacity="1" />
                </radialGradient>

                {/* Soft Bottom Rim Glow */}
                <linearGradient id={`rimLight-${balloon.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="70%" stopColor={balloon.theme.main} stopOpacity="0" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              {/* Balloon Drop Shadow */}
              <ellipse
                cx="30"
                cy="36"
                rx="26"
                ry="30"
                fill={balloon.theme.dropShadow}
                opacity="0.25"
                transform="translate(0, 4)"
              />

              {/* Natural Oval Latex Balloon Body */}
              <path
                d="M 30 4 
                   C 46 4, 57 16, 57 34 
                   C 57 48, 44 58, 33 63 
                   L 33 64 
                   L 35 68 
                   L 25 68 
                   L 27 64 
                   L 27 63 
                   C 16 58, 3 48, 3 34 
                   C 3 16, 14 4, 30 4 Z"
                fill={`url(#balloonShading-${balloon.id})`}
              />

              {/* Rim Light Overlay */}
              <path
                d="M 30 4 
                   C 46 4, 57 16, 57 34 
                   C 57 48, 44 58, 33 63 
                   L 33 64 
                   L 35 68 
                   L 25 68 
                   L 27 64 
                   L 27 63 
                   C 16 58, 3 48, 3 34 
                   C 3 16, 14 4, 30 4 Z"
                fill={`url(#rimLight-${balloon.id})`}
              />

              {/* 3D Specular Light Reflection */}
              <ellipse
                cx="20"
                cy="18"
                rx="7"
                ry="13"
                transform="rotate(-28 20 18)"
                fill="#ffffff"
                opacity="0.55"
              />
              <ellipse
                cx="18"
                cy="14"
                rx="3"
                ry="6.5"
                transform="rotate(-28 18 14)"
                fill="#ffffff"
                opacity="0.9"
              />

              {/* Tied Balloon Knot */}
              <polygon points="26,63 34,63 36,68 24,68" fill={balloon.theme.shadow} />

              {/* Hanging Curled Ribbon String */}
              <path
                d="M 30 68 Q 23 76, 32 84 T 27 96"
                stroke={balloon.theme.stringColor}
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
              />
            </svg>
          </div>
        )
      })}

      {/* 2. Burst Pop Sparkle Particles Explosion */}
      {poppedParticles.map((p) => (
        <div
          key={p.id}
          className="balloon-pop-sparkle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isStar ? 'transparent' : p.color,
            boxShadow: p.isStar ? 'none' : `0 0 6px ${p.color}`,
            borderRadius: p.isStar ? '0' : '50%',
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--rot': `${p.rotation}deg`
          }}
        >
          {p.isStar && (
            <span style={{ color: p.color, fontSize: `${p.size * 1.5}px`, lineHeight: 1 }}>
              ✨
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
