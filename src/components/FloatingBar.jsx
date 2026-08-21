import { WhatsAppIcon, FlowerIcon } from './svgs/Icons'

/**
 * FloatingBar: Sticky mobile blessings button and WhatsApp share button
 */
export default function FloatingBar({ t, lang, onShowerBlessings }) {
  const shareMessage = encodeURIComponent(t.shareMsg)

  return (
    <aside className="floating-actions">
      <div className="blessings-bar">
        {/* Shower Blessings Button */}
        <button
          type="button"
          className={`blessing-btn ${lang === 'ta' ? 'tamil-font' : ''}`}
          onClick={onShowerBlessings}
        >
          <FlowerIcon className="btn-svg" />
          <span>{t.btnBlessings}</span>
        </button>

        {/* WhatsApp Share Button */}
        <a
          href={`https://api.whatsapp.com/send?text=${shareMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`whatsapp-share-btn ${lang === 'ta' ? 'tamil-font' : ''}`}
          title="Share on WhatsApp"
        >
          <WhatsAppIcon className="btn-svg" />
          <span>{t.btnShare}</span>
        </a>
      </div>
    </aside>
  )
}
