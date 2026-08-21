/**
 * Sacred Indian Mandala Watermark Vector SVG
 */
export default function MandalaWatermarkSvg({ className = "w-72 h-72 text-festive-gold/10" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="4" fill="currentColor" />
      
      {/* 8-Petal Outer Rosette */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x = 100 + 75 * Math.cos(angle)
        const y = 100 + 75 * Math.sin(angle)
        return (
          <circle
            key={`outer-${i}`}
            cx={x}
            cy={y}
            r="7"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        )
      })}

      {/* 16 Radial Rays */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180
        const x1 = 100 + 32 * Math.cos(angle)
        const y1 = 100 + 32 * Math.sin(angle)
        const x2 = 100 + 82 * Math.cos(angle)
        const y2 = 100 + 82 * Math.sin(angle)
        return (
          <line
            key={`ray-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.75"
          />
        )
      })}
    </svg>
  )
}
