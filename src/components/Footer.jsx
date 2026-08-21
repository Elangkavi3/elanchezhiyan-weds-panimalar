import FloralDividerSvg from './svgs/FloralDividerSvg'

/**
 * Footer: Blessings quote, family compliments, divider SVG, and copyright line
 */
export default function Footer({ t, lang }) {
  const currentYear = new Date().getFullYear()

  return (
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
          © {currentYear} • Created by <span className="copyright-author">Elangkavi</span>
        </p>
        <p className="copyright-subtext">
          All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
