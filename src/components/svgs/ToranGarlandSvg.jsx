/**
 * Sacred Festive Toran with Mango Leaves (மாவிலை) & Marigold Flowers (சாமந்தி)
 */
export default function ToranGarlandSvg({ className = "w-full max-w-xs h-10" }) {
  return (
    <svg
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="60%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>

      {/* Main Hanging Garland String */}
      <path
        d="M0 6 Q80 18 160 6 Q240 18 320 6"
        stroke="#b45309"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Mango Leaves (5 Leaves) */}
      {[35, 95, 160, 225, 285].map((x, i) => (
        <path
          key={`leaf-${i}`}
          d={`M${x - 8} 10 C${x - 12} 24 ${x} 34 ${x} 34 C${x} 34 ${x + 12} 24 ${x + 8} 10 Z`}
          fill="url(#mangoLeaf)"
          stroke="#14532d"
          strokeWidth="0.8"
        />
      ))}

      {/* Marigold Flower Blossoms (6 Flowers) */}
      {[10, 65, 125, 195, 255, 310].map((x, i) => (
        <g key={`flower-${i}`} transform={`translate(${x}, 8)`}>
          <circle cx="0" cy="0" r="7" fill="url(#marigoldGrad)" />
          <circle cx="0" cy="0" r="4.5" fill="#f59e0b" />
          <circle cx="0" cy="0" r="2.5" fill="#dc2626" />
        </g>
      ))}

      {/* Auspicious Golden Bells (Center) */}
      <circle cx="160" cy="36" r="2" fill="#f59e0b" />
    </svg>
  )
}
