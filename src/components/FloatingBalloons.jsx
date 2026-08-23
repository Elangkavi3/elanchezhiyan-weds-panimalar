import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Maximum total balloons on screen (strictly capped at 50)
 */
const MAX_BALLOONS = 50

/**
 * Multi-Tier Balloon Bounce Layers:
 * - Layer 1 (Ceiling Line): 62px - 68px
 * - Layer 2 (Under-Layer 2): 118px - 132px (bounces and rests directly below Layer 1)
 * - Layer 3 (Under-Layer 3): 175px - 193px (bounces and rests directly below Layer 2)
 */
function getLayerCeilingY() {
  const rand = Math.random()
  if (rand < 0.45) {
    // Layer 1: Top header line
    return 62 + Math.random() * 6
  } else if (rand < 0.80) {
    // Layer 2: One layer below top
    return 118 + Math.random() * 14
  } else {
    // Layer 3: Cascading layer below layer 2
    return 175 + Math.random() * 18
  }
}

/**
 * Festive Helium Balloon Color Palettes (Realistic 3D Latex Shading)
 */
const BALLOON_THEMES = [
  {
    name: 'antique-gold',
    highlight: '#fef08a',
    main: '#ca8a04',
    shadow: '#78350f',
    dropShadow: 'rgba(202, 138, 4, 0.45)',
    stringColor: '#b45309',
    sparkles: ['#ffd700', '#fde047', '#fff', '#eab308', '#ca8a04']
  },
  {
    name: 'peacock-teal',
    highlight: '#67e8f9',
    main: '#0f766e',
    shadow: '#042f2e',
    dropShadow: 'rgba(15, 118, 110, 0.5)',
    stringColor: '#0d9488',
    sparkles: ['#2dd4bf', '#0f766e', '#67e8f9', '#99f6e4', '#ffffff']
  },
  {
    name: 'gilded-gold-2',
    highlight: '#fffbeb',
    main: '#d97706',
    shadow: '#92400e',
    dropShadow: 'rgba(217, 119, 6, 0.45)',
    stringColor: '#b45309',
    sparkles: ['#ffd700', '#f59e0b', '#fef08a', '#ffffff', '#ca8a04']
  },
  {
    name: 'bright-peacock',
    highlight: '#a5f3fc',
    main: '#0e7490',
    shadow: '#083344',
    dropShadow: 'rgba(14, 116, 144, 0.5)',
    stringColor: '#074550',
    sparkles: ['#06b6d4', '#0891b2', '#2dd4bf', '#a5f3fc', '#ffffff']
  },
  {
    name: 'mint-seafoam',
    highlight: '#ccfbf1',
    main: '#0d9488',
    shadow: '#064e3b',
    dropShadow: 'rgba(13, 148, 136, 0.4)',
    stringColor: '#0f766e',
    sparkles: ['#14b8a6', '#0d9488', '#fef08a', '#ffd700', '#ffffff']
  }
]

let balloonCounter = 0
let particleCounter = 0

/**
 * Creates a helium balloon with silky-smooth continuous spring buoyancy
 */
function createHeliumBalloon(initialY = null, targetCorner = null, forcedCeilingY = null) {
  const id = ++balloonCounter
  const theme = BALLOON_THEMES[Math.floor(Math.random() * BALLOON_THEMES.length)]
  const width = Math.floor(Math.random() * 5) + 33 // 33px to 37px
  
  // Left corner 6-22% | Right corner 76-92%
  const isLeft = targetCorner !== null ? targetCorner === 'left' : Math.random() < 0.5
  const ceilingX = isLeft
    ? Math.floor(Math.random() * 16) + 6   // 6% to 22%
    : Math.floor(Math.random() * 16) + 76  // 76% to 92%
  
  const screenH = typeof window !== 'undefined' ? window.innerHeight : 800
  const y = initialY !== null ? initialY : screenH + 60
  const x = initialY !== null ? ceilingX : Math.floor(Math.random() * 68) + 16
  const ceilingY = forcedCeilingY !== null ? forcedCeilingY : getLayerCeilingY()
  
  return {
    id,
    theme,
    width,
    x,
    y,
    vy: initialY !== null ? 0 : -2.0, // initial upward rise
    ceilingX,
    ceilingY,
    swaySpeed: 0.9 + Math.random() * 0.6,
    swayAmount: 2.2 + Math.random() * 2.2,
    wobbleAngle: (Math.random() - 0.5) * 6,
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
    const distance = Math.floor(Math.random() * 32) + 24 // 24px to 56px radius
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
    // Audio context fallback
  }
}

/**
 * FloatingBalloons:
 * - Strictly capped at 50 balloons total capacity
 * - Continuous spawning up to 50 balloons; every pop replenishes back up to 50
 * - Multi-Tier Layers (Layer 1, Layer 2, Layer 3) with continuous Hooke's Law spring buoyancy
 */
export default function FloatingBalloons() {
  // Initialize with cascading layers
  const [balloons, setBalloons] = useState(() => [
    // Layer 1 (Top header line)
    createHeliumBalloon(62, 'left', 62),
    createHeliumBalloon(64, 'right', 64),
    // Layer 2 (Right below Layer 1)
    createHeliumBalloon(118, 'left', 118),
    createHeliumBalloon(124, 'right', 124),
    // Layer 3 (Cascading tier below Layer 2)
    createHeliumBalloon(175, 'left', 175),
    createHeliumBalloon(182, 'right', 182),
    // Rising stream from bottom
    createHeliumBalloon(360),
    createHeliumBalloon(500),
    createHeliumBalloon(640),
    createHeliumBalloon(780)
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

  const lastSpawnTimeRef = useRef(0)
  const animFrameRef = useRef(null)

  // 60FPS fluid continuous spring physics with 50-balloon capacity cap
  useEffect(() => {
    lastSpawnTimeRef.current = Date.now()
    let lastTime = performance.now()

    const updatePhysics = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.04)
      lastTime = now

      setBalloons((prev) => {
        let current = [...prev]

        // Keep spawning until total balloon count reaches MAX_BALLOONS (50)
        if (current.length < MAX_BALLOONS && Date.now() - lastSpawnTimeRef.current > 500) {
          lastSpawnTimeRef.current = Date.now()
          current.push(createHeliumBalloon())
        }

        return current.map((b) => {
          if (b.isDragging) return b

          const newTime = b.time + delta * 1.5

          // 1. Continuous Hooke's Law Spring Buoyancy towards its target layer ceiling
          const distToCeiling = b.ceilingY - b.y

          const accelY = distToCeiling < -80
            ? -0.12
            : distToCeiling * 0.035 + Math.sin(newTime * b.swaySpeed) * 0.15

          // Air resistance / damping
          const damping = 0.94
          let newVy = (b.vy + accelY) * damping

          // Terminal upward speed limit for smooth visual pace
          newVy = Math.max(-2.5, Math.min(2.0, newVy))
          let newY = b.y + newVy

          // Hard floor safety: cannot go above 58px header line
          if (newY < 58) {
            newY = 58
            newVy = Math.abs(newVy) * 0.5 // soft bounce down
          }

          // 2. Continuous horizontal drift toward corner
          const targetX = b.ceilingX + Math.sin(newTime * 0.8) * b.swayAmount
          const newX = b.x + (targetX - b.x) * 0.035

          return {
            ...b,
            x: newX,
            y: newY,
            vy: newVy,
            time: newTime
          }
        })
      })

      animFrameRef.current = requestAnimationFrame(updatePhysics)
    }

    animFrameRef.current = requestAnimationFrame(updatePhysics)

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  // Trigger balloon POP effect
  const popBalloon = useCallback((balloon, clientX, clientY) => {
    playPopSound()

    const newParticles = generatePopParticles(balloon, clientX, clientY)
    setPoppedParticles((prev) => [...prev, ...newParticles])

    // Remove popped balloon immediately (count decreases by 1)
    setBalloons((prev) => prev.filter((b) => b.id !== balloon.id))

    // Clean up sparkle particles after animation finishes (750ms)
    setTimeout(() => {
      setPoppedParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      )
    }, 750)

    // Immediately spawn a replacement balloon from bottom up to the 50 limit!
    setTimeout(() => {
      setBalloons((prev) => {
        if (prev.length < MAX_BALLOONS) {
          return [...prev, createHeliumBalloon()]
        }
        return prev
      })
    }, 400)
  }, [])

  // --- TOUCH / MOUSE INTERACTION HANDLERS ---
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
      prev.map((b) => (b.id === balloon.id ? { ...b, isDragging: true, vy: 0 } : b))
    )
  }, [])

  const handlePointerMove = useCallback((e) => {
    if (!dragRef.current.activeId) return

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    const deltaX = clientX - dragRef.current.startX
    const deltaY = clientY - dragRef.current.startY

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      dragRef.current.hasMoved = true
    }

    const percentDeltaX = (deltaX / window.innerWidth) * 100

    setBalloons((prev) =>
      prev.map((b) => {
        if (b.id === dragRef.current.activeId) {
          const newX = Math.max(4, Math.min(92, dragRef.current.initialX + percentDeltaX))
          const newY = Math.max(58, dragRef.current.initialY + deltaY)
          return {
            ...b,
            x: newX,
            y: newY,
            ceilingX: newX
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
      if (balloon && (!hasMoved || duration < 220)) {
        const clientX = e.changedTouches
          ? e.changedTouches[0].clientX
          : e.clientX || dragRef.current.startX
        const clientY = e.changedTouches
          ? e.changedTouches[0].clientY
          : e.clientY || dragRef.current.startY
        popBalloon(balloon, clientX, clientY)
        return prev
      }

      // Dragged / released: Balloon gently floats back up to its layer ceiling with organic spring
      return prev.map((b) => {
        if (b.id === activeId) {
          return {
            ...b,
            ceilingX: b.x,
            vy: -1.2,
            isDragging: false
          }
        }
        return b
      })
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
      {/* Helium Balloons (Capped at 50 Balloons Total, 3-Layer Buoyancy) */}
      {balloons.map((balloon) => {
        const currentTilt = balloon.wobbleAngle + Math.cos(balloon.time * balloon.swaySpeed) * 3
        const height = balloon.width * 1.62

        return (
          <div
            key={balloon.id}
            className={`floating-balloon-item ${balloon.isDragging ? 'is-dragging' : ''}`}
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}px`,
              width: `${balloon.width}px`,
              height: `${height}px`,
              transform: `rotate(${currentTilt}deg)`,
              cursor: 'grab'
            }}
            onMouseDown={(e) => handlePointerDown(e, balloon)}
            onTouchStart={(e) => handlePointerDown(e, balloon)}
            title="Drag down or tap to pop!"
          >
            {/* 3D Latex Vector Balloon Graphic */}
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
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.88" />
                  <stop offset="25%" stopColor={balloon.theme.highlight} stopOpacity="1" />
                  <stop offset="65%" stopColor={balloon.theme.main} stopOpacity="1" />
                  <stop offset="100%" stopColor={balloon.theme.shadow} stopOpacity="1" />
                </radialGradient>

                {/* Soft Bottom Rim Glow */}
                <linearGradient id={`rimLight-${balloon.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="70%" stopColor={balloon.theme.main} stopOpacity="0" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.38" />
                </linearGradient>
              </defs>

              {/* Balloon Drop Shadow */}
              <ellipse
                cx="30"
                cy="36"
                rx="26"
                ry="30"
                fill={balloon.theme.dropShadow}
                opacity="0.28"
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

              {/* 3D Specular Light Reflections */}
              <ellipse
                cx="20"
                cy="18"
                rx="7"
                ry="13"
                transform="rotate(-28 20 18)"
                fill="#ffffff"
                opacity="0.6"
              />
              <ellipse
                cx="18"
                cy="14"
                rx="3"
                ry="6.5"
                transform="rotate(-28 18 14)"
                fill="#ffffff"
                opacity="0.92"
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
                opacity="0.8"
              />
            </svg>
          </div>
        )
      })}

      {/* Burst Pop Sparkle Particles Explosion */}
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
