/**
 * Traditional Indian Diya / Agal Vilakku Oil Lamp Vector SVG with Glowing Flame
 */
export default function DiyaLampSvg({ className = "w-6 h-6 text-amber-500" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Glow Filter */}
      <defs>
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
          <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lampBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* Diya Base / Oil Bowl */}
      <path
        d="M6 24C6 24 10 33 20 33C30 33 34 24 34 24C34 24 28 26 20 26C12 26 6 24 6 24Z"
        fill="url(#lampBody)"
        stroke="#b45309"
        strokeWidth="1"
      />

      {/* Lamp Rim */}
      <ellipse
        cx="20"
        cy="24"
        rx="14"
        ry="2.5"
        fill="#fbbf24"
        stroke="#d97706"
        strokeWidth="0.8"
      />

      {/* Flame Glow Ambient Aura */}
      <circle cx="20" cy="14" r="8" fill="url(#flameGlow)" opacity="0.85" />

      {/* Teardrop Flame */}
      <path
        d="M20 6C20 6 15 13 15 17C15 19.76 17.24 22 20 22C22.76 22 25 19.76 25 17C25 13 20 6 20 6Z"
        fill="#fde047"
        stroke="#f59e0b"
        strokeWidth="0.8"
      />

      {/* Flame Inner Core */}
      <path
        d="M20 11C20 11 17.5 15 17.5 17.5C17.5 18.88 18.62 20 20 20C21.38 20 22.5 18.88 22.5 17.5C22.5 15 20 11 20 11Z"
        fill="#ffffff"
      />
    </svg>
  )
}
