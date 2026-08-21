/**
 * Sacred Glowing Kolam (கோலம்) Border Frame Vector SVG
 * Continuous joint wires with flowing electric gold glow effect surrounding the Reception Card
 */
export default function KolamFrameSvg({ className = "" }) {
  return (
    <svg
      className={`kolam-frame-svg ${className}`}
      viewBox="0 0 400 320"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Base Traditional Gold Gradient */}
        <linearGradient id="kolamGoldBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.75" />
          <stop offset="30%" stopColor="#d97706" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#b45309" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.75" />
        </linearGradient>

        {/* Dynamic Electric Flowing Glow Beam Gradient */}
        <linearGradient id="kolamGlowBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="35%" stopColor="#fbbf24" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="65%" stopColor="#fbbf24" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
        </linearGradient>

        {/* Outer Glow Filter */}
        <filter id="kolamNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. Base Connected Kolam Perimeter Line (Joint Wires) */}
      <path
        d="M 28 6 
           H 372 
           C 388 6 394 12 394 28 
           V 292 
           C 394 308 388 314 372 314 
           H 28 
           C 12 314 6 308 6 292 
           V 28 
           C 6 12 12 6 28 6 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* 2. Inner Dashed Auspicious Kolam Thread */}
      <path
        d="M 32 14 
           H 368 
           C 380 14 386 20 386 32 
           V 288 
           C 386 300 380 306 368 306 
           H 32 
           C 20 306 14 300 14 288 
           V 32 
           C 14 20 20 14 32 14 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1"
        strokeDasharray="4 3"
        strokeLinecap="round"
        opacity="0.65"
        vectorEffect="non-scaling-stroke"
      />

      {/* 3. Top-Left Kolam Corner Suzhi / Loop Knot */}
      <path
        d="M 6 42 C 6 22 22 6 42 6 C 24 16 16 24 6 42 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.6"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 12 12 C 16 22 22 16 26 26 C 20 26 16 20 12 12 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.2"
        fill="#fef3c7"
        fillOpacity="0.4"
        vectorEffect="non-scaling-stroke"
      />

      {/* 4. Top-Right Kolam Corner Suzhi / Loop Knot */}
      <path
        d="M 394 42 C 394 22 378 6 358 6 C 376 16 384 24 394 42 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.6"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 388 12 C 384 22 378 16 374 26 C 380 26 384 20 388 12 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.2"
        fill="#fef3c7"
        fillOpacity="0.4"
        vectorEffect="non-scaling-stroke"
      />

      {/* 5. Bottom-Right Kolam Corner Suzhi / Loop Knot */}
      <path
        d="M 394 278 C 394 298 378 314 358 314 C 376 304 384 296 394 278 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.6"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 388 308 C 384 298 378 304 374 294 C 380 294 384 300 388 308 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.2"
        fill="#fef3c7"
        fillOpacity="0.4"
        vectorEffect="non-scaling-stroke"
      />

      {/* 6. Bottom-Left Kolam Corner Suzhi / Loop Knot */}
      <path
        d="M 6 278 C 6 298 22 314 42 314 C 24 304 16 296 6 278 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.6"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 12 308 C 16 298 22 304 26 294 C 20 294 16 300 12 308 Z"
        stroke="url(#kolamGoldBase)"
        strokeWidth="1.2"
        fill="#fef3c7"
        fillOpacity="0.4"
        vectorEffect="non-scaling-stroke"
      />

      {/* 7. Sacred Corner & Edge Kolam Dots (புள்ளிகள்) */}
      <circle cx="18" cy="18" r="3" fill="#f59e0b" />
      <circle cx="382" cy="18" r="3" fill="#f59e0b" />
      <circle cx="382" cy="302" r="3" fill="#f59e0b" />
      <circle cx="18" cy="302" r="3" fill="#f59e0b" />

      <circle cx="200" cy="6" r="2.5" fill="#f59e0b" />
      <circle cx="200" cy="314" r="2.5" fill="#f59e0b" />
      <circle cx="6" cy="160" r="2.5" fill="#f59e0b" />
      <circle cx="394" cy="160" r="2.5" fill="#f59e0b" />

      {/* 8. ACTIVE FLOWING GLOW EFFECT PULSE BEAM (Continuous looping neon current around the entire joint wire frame) */}
      <path
        d="M 28 6 
           H 372 
           C 388 6 394 12 394 28 
           V 292 
           C 394 308 388 314 372 314 
           H 28 
           C 12 314 6 308 6 292 
           V 28 
           C 6 12 12 6 28 6 Z"
        stroke="url(#kolamGlowBeam)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="kolam-flow-beam"
      />
    </svg>
  )
}
