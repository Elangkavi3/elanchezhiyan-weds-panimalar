/**
 * Royal Indian Gold Filigree Floral Center Divider Vector SVG
 */
export default function FloralDividerSvg({ className = "w-48 h-6 text-amber-500" }) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* Left Line */}
      <line x1="10" y1="12" x2="80" y2="12" stroke="url(#divGold)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="80" cy="12" r="2" fill="url(#divGold)" />
      
      {/* Right Line */}
      <line x1="120" y1="12" x2="190" y2="12" stroke="url(#divGold)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="120" cy="12" r="2" fill="url(#divGold)" />

      {/* Center Lotus / Diamond Motif */}
      <g transform="translate(100, 12)">
        <polygon points="0,-7 7,0 0,7 -7,0" fill="url(#divGold)" />
        <circle cx="0" cy="0" r="2" fill="#fffbeb" />
        {/* Flanking Petals */}
        <circle cx="-11" cy="0" r="1.5" fill="url(#divGold)" />
        <circle cx="11" cy="0" r="1.5" fill="url(#divGold)" />
      </g>
    </svg>
  )
}
