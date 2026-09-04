import { useState } from 'react'
import FloralDividerSvg from './svgs/FloralDividerSvg'
import KaviModal from './KaviModal'

/**
 * Footer: Blessings quote, family compliments, divider SVG, and copyright line
 */
export default function Footer({ t, lang }) {
  const currentYear = new Date().getFullYear()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="invitation-footer">
        <p className={`footer-quote ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.footerQuote}
        </p>
        <p className={`footer-credits ${lang === 'ta' ? 'tamil-font' : ''}`}>
          {t.footerCredits}
        </p>

        {/* Floral Divider SVG */}
        <div className="footer-divider-wrapper">
          <FloralDividerSvg className="footer-divider-svg" />
        </div>

        {/* Copyright line */}
        <div className="copyright-section">
          <p className="copyright-text">
            © {currentYear} • Created by{' '}
            <span
              className="copyright-author"
              role="button"
              tabIndex={0}
              onClick={() => setIsModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIsModalOpen(true)
                }
              }}
              title="Elangkavi"
            >
              Elangkavi
            </span>
          </p>
          <p className="copyright-subtext">
            All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Model-shot gallery picture frame modal */}
      <KaviModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
