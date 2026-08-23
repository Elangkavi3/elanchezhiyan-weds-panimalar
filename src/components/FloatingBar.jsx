import { WhatsAppIcon, FlowerIcon } from './svgs/Icons'

/**
 * FloatingBar: Icon-only floating action dock for Flower Blessings and WhatsApp Share
 */
export default function FloatingBar({ t, onShowerBlessings }) {
  const shareMessage = encodeURIComponent(t.shareMsg)

  return (
    <aside className="floating-actions" aria-label="Quick Actions">
      <div className="blessings-bar">
        {/* Flower Petal Shower Blessings Button (Icon Only) */}
        <button
          type="button"
          className="blessing-btn icon-only-btn"
          onClick={onShowerBlessings}
          title={t.btnBlessings || 'Shower Flower Blessings'}
          aria-label={t.btnBlessings || 'Shower Flower Blessings'}
        >
          <FlowerIcon className="btn-svg" />
        </button>

        {/* WhatsApp Share Button (Icon Only) */}
        <a
          href={`https://api.whatsapp.com/send?text=${shareMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-share-btn icon-only-btn"
          title={t.btnShare || 'Share on WhatsApp'}
          aria-label={t.btnShare || 'Share on WhatsApp'}
        >
          <WhatsAppIcon className="btn-svg" />
        </a>
      </div>
    </aside>
  )
}
