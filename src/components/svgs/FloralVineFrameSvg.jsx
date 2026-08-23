/**
 * Royal Peacock & Temple Vine Kolam Border Masterpiece (மயில் வண்ண மங்கல பூங்கொடி & கோல அமைப்பு)
 * Color-matched to card.png watercolor peacock palette: Deep Peacock Teal, Turquoise Mint, Sage Foliage, and Antique Gold.
 */
export default function FloralVineFrameSvg({ className = "" }) {
  return (
    <svg
      className={`floral-vine-frame-svg ${className}`}
      viewBox="0 0 500 400"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Peacock Teal & Antique Gold Primary Vine Gradient */}
        <linearGradient id="peacockVineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="25%" stopColor="#0f766e" />
          <stop offset="50%" stopColor="#c99a3e" />
          <stop offset="75%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>

        {/* Secondary Crossing Vine Gradient */}
        <linearGradient id="peacockVineSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="40%" stopColor="#074550" />
          <stop offset="75%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        {/* Watercolor Sage & Mint Leaf Shading Gradient */}
        <linearGradient id="leafShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.45" />
        </linearGradient>

        {/* Primary Glowing Pulse Beam (Mint-Cyan & White Laser Stream) */}
        <linearGradient id="glowPulsePrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f766e" stopOpacity="0.05" />
          <stop offset="30%" stopColor="#2dd4bf" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#67e8f9" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.05" />
        </linearGradient>

        {/* Secondary Warm Gilded Bronze-Gold & Emerald Pulse Beam */}
        <linearGradient id="glowPulseSecondary" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.05" />
          <stop offset="30%" stopColor="#ca8a04" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#fef08a" stopOpacity="1" />
          <stop offset="70%" stopColor="#14b8a6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#074550" stopOpacity="0.05" />
        </linearGradient>

        {/* Radial Center Peacock Lotus Gem Glow */}
        <radialGradient id="gemGlow">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#67e8f9" />
          <stop offset="75%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#042f2e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ========================================================
          1. BRAIDED DOUBLE PEACOCK VINE STEM - PATH A (WINDING WAVE 1)
          ======================================================== */}
      <path
        d="M 45 10 
           Q 85 4, 125 14 T 205 10 T 285 14 T 365 10 T 455 10
           C 475 10 490 25 490 45
           Q 496 90, 484 135 T 490 215 T 484 295 T 490 355
           C 490 375 475 390 455 390
           Q 415 396, 375 386 T 295 390 T 215 386 T 135 390 T 45 390
           C 25 390 10 375 10 355
           Q 4 310, 16 265 T 10 185 T 16 105 T 10 45
           C 10 25 25 10 45 10 Z"
        stroke="url(#peacockVineGradient)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* ========================================================
          2. BRAIDED DOUBLE PEACOCK VINE STEM - PATH B (CROSSING WAVE 2)
          ======================================================== */}
      <path
        d="M 45 14 
           Q 85 20, 125 10 T 205 14 T 285 10 T 365 14 T 455 14
           C 472 14 486 28 486 45
           Q 482 90, 492 135 T 484 215 T 492 295 T 486 355
           C 486 372 472 386 455 386
           Q 415 380, 375 390 T 295 386 T 215 390 T 135 386 T 45 386
           C 28 386 14 372 14 355
           Q 18 310, 8 265 T 16 185 T 8 105 T 14 45
           C 14 28 28 14 45 14 Z"
        stroke="url(#peacockVineSecondary)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
        vectorEffect="non-scaling-stroke"
      />

      {/* ========================================================
          3. SPROUTING LEAF CLUSTERS WITH SAGE VENATION
          ======================================================== */}
      {/* Top Border Leaves */}
      <g stroke="url(#peacockVineGradient)" fill="url(#leafShade)" vectorEffect="non-scaling-stroke">
        {/* Leaf Cluster 1 (x=85) */}
        <path d="M 85 8 C 75 -4 95 -6 92 8 Z" strokeWidth="1.2" />
        <path d="M 87 2 L 89 6" strokeWidth="0.8" />
        <path d="M 85 12 C 75 22 95 24 92 12 Z" strokeWidth="1.2" />
        <path d="M 87 18 L 89 14" strokeWidth="0.8" />

        {/* Leaf Cluster 2 (x=165) */}
        <path d="M 165 8 C 155 -4 175 -6 172 8 Z" strokeWidth="1.2" />
        <path d="M 167 2 L 169 6" strokeWidth="0.8" />
        <path d="M 165 12 C 155 22 175 24 172 12 Z" strokeWidth="1.2" />
        <path d="M 167 18 L 169 14" strokeWidth="0.8" />

        {/* Leaf Cluster 3 (x=245 Center) */}
        <path d="M 245 7 C 235 -5 255 -7 252 7 Z" strokeWidth="1.2" />
        <path d="M 247 1 L 249 5" strokeWidth="0.8" />
        <path d="M 245 13 C 235 25 255 27 252 13 Z" strokeWidth="1.2" />
        <path d="M 247 19 L 249 15" strokeWidth="0.8" />

        {/* Leaf Cluster 4 (x=325) */}
        <path d="M 325 8 C 315 -4 335 -6 332 8 Z" strokeWidth="1.2" />
        <path d="M 327 2 L 329 6" strokeWidth="0.8" />
        <path d="M 325 12 C 315 22 335 24 332 12 Z" strokeWidth="1.2" />
        <path d="M 327 18 L 329 14" strokeWidth="0.8" />

        {/* Leaf Cluster 5 (x=405) */}
        <path d="M 405 8 C 395 -4 415 -6 412 8 Z" strokeWidth="1.2" />
        <path d="M 407 2 L 409 6" strokeWidth="0.8" />
        <path d="M 405 12 C 395 22 415 24 412 12 Z" strokeWidth="1.2" />
        <path d="M 407 18 L 409 14" strokeWidth="0.8" />

        {/* Bottom Border Leaves */}
        {/* Leaf Cluster 6 (x=85) */}
        <path d="M 85 392 C 75 404 95 406 92 392 Z" strokeWidth="1.2" />
        <path d="M 87 398 L 89 394" strokeWidth="0.8" />
        <path d="M 85 388 C 75 378 95 376 92 388 Z" strokeWidth="1.2" />
        <path d="M 87 382 L 89 386" strokeWidth="0.8" />

        {/* Leaf Cluster 7 (x=165) */}
        <path d="M 165 392 C 155 404 175 406 172 392 Z" strokeWidth="1.2" />
        <path d="M 167 398 L 169 394" strokeWidth="0.8" />
        <path d="M 165 388 C 155 378 175 376 172 388 Z" strokeWidth="1.2" />
        <path d="M 167 382 L 169 386" strokeWidth="0.8" />

        {/* Leaf Cluster 8 (x=245 Center) */}
        <path d="M 245 393 C 235 405 255 407 252 393 Z" strokeWidth="1.2" />
        <path d="M 247 399 L 249 395" strokeWidth="0.8" />
        <path d="M 245 387 C 235 375 255 373 252 387 Z" strokeWidth="1.2" />
        <path d="M 247 381 L 249 385" strokeWidth="0.8" />

        {/* Leaf Cluster 9 (x=325) */}
        <path d="M 325 392 C 315 404 335 406 332 392 Z" strokeWidth="1.2" />
        <path d="M 327 398 L 329 394" strokeWidth="0.8" />
        <path d="M 325 388 C 315 378 335 376 332 388 Z" strokeWidth="1.2" />
        <path d="M 327 382 L 329 386" strokeWidth="0.8" />

        {/* Leaf Cluster 10 (x=405) */}
        <path d="M 405 392 C 395 404 415 406 412 392 Z" strokeWidth="1.2" />
        <path d="M 407 398 L 409 394" strokeWidth="0.8" />
        <path d="M 405 388 C 395 378 415 376 412 388 Z" strokeWidth="1.2" />
        <path d="M 407 382 L 409 386" strokeWidth="0.8" />

        {/* Left Border Leaves */}
        <path d="M 8 90 C -4 80 -6 100 8 97 Z" strokeWidth="1.2" />
        <path d="M 12 90 C 22 80 24 100 12 97 Z" strokeWidth="1.2" />
        <path d="M 8 180 C -4 170 -6 190 8 187 Z" strokeWidth="1.2" />
        <path d="M 12 180 C 22 170 24 190 12 187 Z" strokeWidth="1.2" />
        <path d="M 8 270 C -4 260 -6 280 8 277 Z" strokeWidth="1.2" />
        <path d="M 12 270 C 22 260 24 280 12 277 Z" strokeWidth="1.2" />

        {/* Right Border Leaves */}
        <path d="M 492 90 C 504 80 506 100 492 97 Z" strokeWidth="1.2" />
        <path d="M 488 90 C 478 80 476 100 488 97 Z" strokeWidth="1.2" />
        <path d="M 492 180 C 504 170 506 190 492 187 Z" strokeWidth="1.2" />
        <path d="M 488 180 C 478 170 476 190 488 187 Z" strokeWidth="1.2" />
        <path d="M 492 270 C 504 260 506 280 492 277 Z" strokeWidth="1.2" />
        <path d="M 488 270 C 478 260 476 280 488 277 Z" strokeWidth="1.2" />
      </g>

      {/* ========================================================
          4. FOUR ORNATE CORNER LOTUS MANDALAS & SPIRAL TENDRILS
          ======================================================== */}
      {/* --- TOP-LEFT CORNER LOTUS MANDALA --- */}
      <g transform="translate(30, 30)">
        {/* Paisley Mango Flurry */}
        <path d="M 0 0 C -15 -5 -25 -25 -5 -25 C 10 -25 15 -10 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.4" />
        {/* Lotus Petals */}
        <path d="M 0 0 C 12 -12 24 -6 18 6 C 12 14 0 12 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        <path d="M 0 0 C -6 24 6 24 12 14 C 18 4 0 0 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        {/* Spiral Tendril */}
        <path d="M 5 5 Q 18 18 24 14 T 28 20" stroke="url(#peacockVineGradient)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Glowing Core Gem */}
        <circle cx="0" cy="0" r="5" fill="url(#gemGlow)" stroke="#2dd4bf" strokeWidth="1.2" />
      </g>

      {/* --- TOP-RIGHT CORNER LOTUS MANDALA --- */}
      <g transform="translate(470, 30)">
        {/* Paisley Mango Flurry */}
        <path d="M 0 0 C 15 -5 25 -25 5 -25 C -10 -25 -15 -10 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.4" />
        {/* Lotus Petals */}
        <path d="M 0 0 C -12 -12 -24 -6 -18 6 C -12 14 0 12 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        <path d="M 0 0 C 6 24 -6 24 -12 14 C -18 4 0 0 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        {/* Spiral Tendril */}
        <path d="M -5 5 Q -18 18 -24 14 T -28 20" stroke="url(#peacockVineGradient)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Glowing Core Gem */}
        <circle cx="0" cy="0" r="5" fill="url(#gemGlow)" stroke="#2dd4bf" strokeWidth="1.2" />
      </g>

      {/* --- BOTTOM-RIGHT CORNER LOTUS MANDALA --- */}
      <g transform="translate(470, 370)">
        {/* Paisley Mango Flurry */}
        <path d="M 0 0 C 15 5 25 25 5 25 C -10 25 -15 10 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.4" />
        {/* Lotus Petals */}
        <path d="M 0 0 C -12 12 -24 6 -18 -6 C -12 -14 0 -12 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        <path d="M 0 0 C 6 -24 -6 -24 -12 -14 C -18 -4 0 0 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        {/* Spiral Tendril */}
        <path d="M -5 -5 Q -18 -18 -24 -14 T -28 -20" stroke="url(#peacockVineGradient)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Glowing Core Gem */}
        <circle cx="0" cy="0" r="5" fill="url(#gemGlow)" stroke="#2dd4bf" strokeWidth="1.2" />
      </g>

      {/* --- BOTTOM-LEFT CORNER LOTUS MANDALA --- */}
      <g transform="translate(30, 370)">
        {/* Paisley Mango Flurry */}
        <path d="M 0 0 C -15 5 -25 25 -5 25 C 10 25 15 10 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.4" />
        {/* Lotus Petals */}
        <path d="M 0 0 C 12 12 24 6 18 -6 C 12 -14 0 -12 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        <path d="M 0 0 C -6 -24 6 -24 12 -14 C 18 -4 0 0 0 0 Z" fill="url(#leafShade)" stroke="url(#peacockVineGradient)" strokeWidth="1.2" />
        {/* Spiral Tendril */}
        <path d="M 5 -5 Q 18 -18 24 -14 T 28 -20" stroke="url(#peacockVineGradient)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Glowing Core Gem */}
        <circle cx="0" cy="0" r="5" fill="url(#gemGlow)" stroke="#2dd4bf" strokeWidth="1.2" />
      </g>

      {/* ========================================================
          5. AUSPICIOUS JASMINE & PEACOCK EYE NODES (DOTS)
          ======================================================== */}
      {/* Top & Bottom Nodes */}
      <circle cx="125" cy="12" r="3.5" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
      <circle cx="205" cy="12" r="3.5" fill="#2dd4bf" stroke="#c99a3e" strokeWidth="1.2" />
      <circle cx="285" cy="12" r="3.5" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
      <circle cx="365" cy="12" r="3.5" fill="#2dd4bf" stroke="#c99a3e" strokeWidth="1.2" />

      <circle cx="125" cy="388" r="3.5" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
      <circle cx="205" cy="388" r="3.5" fill="#2dd4bf" stroke="#c99a3e" strokeWidth="1.2" />
      <circle cx="285" cy="388" r="3.5" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
      <circle cx="365" cy="388" r="3.5" fill="#2dd4bf" stroke="#c99a3e" strokeWidth="1.2" />

      {/* Left & Right Nodes */}
      <circle cx="12" cy="135" r="3.5" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
      <circle cx="12" cy="225" r="3.5" fill="#2dd4bf" stroke="#c99a3e" strokeWidth="1.2" />
      <circle cx="488" cy="135" r="3.5" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
      <circle cx="488" cy="225" r="3.5" fill="#2dd4bf" stroke="#c99a3e" strokeWidth="1.2" />

      {/* ========================================================
          6. DUAL OUT-OF-PHASE FLOWING GLOW EFFECT PULSE BEAMS
          ======================================================== */}
      {/* Primary Mint-Cyan Laser Pulse (Clockwise Flow) */}
      <path
        d="M 45 10 
           Q 85 4, 125 14 T 205 10 T 285 14 T 365 10 T 455 10
           C 475 10 490 25 490 45
           Q 496 90, 484 135 T 490 215 T 484 295 T 490 355
           C 490 375 475 390 455 390
           Q 415 396, 375 386 T 295 390 T 215 386 T 135 390 T 45 390
           C 25 390 10 375 10 355
           Q 4 310, 16 265 T 10 185 T 16 105 T 10 45
           C 10 25 25 10 45 10 Z"
        stroke="url(#glowPulsePrimary)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="vine-glow-primary"
      />

      {/* Secondary Antique Gold Laser Pulse (Counter Flow / Staggered Wave) */}
      <path
        d="M 45 14 
           Q 85 20, 125 10 T 205 14 T 285 10 T 365 14 T 455 14
           C 472 14 486 28 486 45
           Q 482 90, 492 135 T 484 215 T 492 295 T 486 355
           C 486 372 472 386 455 386
           Q 415 380, 375 390 T 295 386 T 215 390 T 135 386 T 45 386
           C 28 386 14 372 14 355
           Q 18 310, 8 265 T 16 185 T 8 105 T 14 45
           C 14 28 28 14 45 14 Z"
        stroke="url(#glowPulseSecondary)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="vine-glow-secondary"
      />
    </svg>
  )
}
