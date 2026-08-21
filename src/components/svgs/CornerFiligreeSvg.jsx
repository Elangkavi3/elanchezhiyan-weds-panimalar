/**
 * Traditional Indian Royal Paisley / Kalka Corner Filigree Vector SVG
 * Designed to hug the 4 corners of the Grand Wedding Reception card
 */
export default function CornerFiligreeSvg({ position = "top-left", className = "" }) {
  const getPositionClass = () => {
    switch (position) {
      case 'top-right':
        return 'top-right'
      case 'bottom-left':
        return 'bottom-left'
      case 'bottom-right':
        return 'bottom-right'
      default:
        return 'top-left'
    }
  }

  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`corner-filigree-svg ${getPositionClass()} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`goldCornerGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Outer Corner Frame Lines */}
      <path
        d="M4 56V12C4 7.58 7.58 4 12 4H56"
        stroke={`url(#goldCornerGrad-${position})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Inner Delicate Dashed Border */}
      <path
        d="M12 50V18C12 14.69 14.69 12 18 12H50"
        stroke={`url(#goldCornerGrad-${position})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="3 2"
        opacity="0.8"
      />

      {/* Royal Paisley / Manga Motif */}
      <path
        d="M14 14C14 14 26 16 32 26C35 31 33 37 27 39C21 41 16 36 18 30C20 25 28 22 28 22"
        stroke={`url(#goldCornerGrad-${position})`}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sacred Floral Sprout & Petals */}
      <path
        d="M18 18C22 15 28 15 32 18"
        stroke={`url(#goldCornerGrad-${position})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M18 18C15 22 15 28 18 32"
        stroke={`url(#goldCornerGrad-${position})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Decorative Auspicious Accent Dots */}
      <circle cx="9" cy="9" r="2.5" fill={`url(#goldCornerGrad-${position})`} />
      <circle cx="38" cy="9" r="2" fill={`url(#goldCornerGrad-${position})`} />
      <circle cx="9" cy="38" r="2" fill={`url(#goldCornerGrad-${position})`} />
      <circle cx="23" cy="23" r="1.5" fill={`url(#goldCornerGrad-${position})`} />
    </svg>
  )
}
