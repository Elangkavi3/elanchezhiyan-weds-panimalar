import logoImg from '../assets/Logo.png'
import ToranGarlandSvg from './svgs/ToranGarlandSvg'
import DiyaLampSvg from './svgs/DiyaLampSvg'
import MandalaWatermarkSvg from './svgs/MandalaWatermarkSvg'

/**
 * Hero Section: Toran garland SVG, Jharokha arch frame with logo, glowing Diya SVGs, 3D gold-foil names, tagline & intro
 */
export default function HeroSection({ t, lang, onLogoClick }) {
  return (
    <section className="hero-section">
      {/* Background Sacred Mandala Watermark SVG */}
      <div className="mandala-bg-container">
        <MandalaWatermarkSvg className="mandala-svg" />
      </div>

      {/* Traditional Auspicious Toran Garland SVG */}
      <div className="toran-container" aria-hidden="true">
        <ToranGarlandSvg className="toran-svg" />
      </div>

      {/* Reception Badge */}
      <span
        className={`invitation-badge ${lang === 'ta' ? 'tamil-font' : ''}`}
      >
        {t.badge}
      </span>

      {/* Royal Jharokha Arch Framing with E & P Monogram Logo & Glowing Flanking Diya Lamp SVGs */}
      <div
        className="jharokha-frame"
        onClick={onLogoClick}
        title="Tap for blessings!"
      >
        <span className="arch-top-ornament" aria-hidden="true">🪷</span>
        
        {/* Flanking Traditional Diya Lamps */}
        <div className="flank-diya left" aria-hidden="true">
          <DiyaLampSvg className="diya-svg" />
        </div>
        <div className="flank-diya right" aria-hidden="true">
          <DiyaLampSvg className="diya-svg" />
        </div>

        {/* Ambient Ring & Sunburst */}
        <div className="logo-sunburst" />
        <div className="logo-ring" />

        {/* Logo Image */}
        <img
          src={logoImg}
          alt="Elanchezhiyan & Panimalar Monogram Logo"
          className="app-logo"
          loading="eager"
        />
      </div>

      {/* Subtitle */}
      <p
        className={`subtitle-text ${lang === 'ta' ? 'tamil-font' : ''}`}
      >
        {t.subtitle}
      </p>

      {/* Couple Names with 3D Gold Foil Sweep Typography */}
      <h1 className={`couple-title ${lang === 'ta' ? 'tamil-title' : ''}`}>
        <span>{t.groom}</span>
        <span className="ampersand">&amp;</span>
        <span>{t.bride}</span>
      </h1>

      {/* Tagline */}
      <p className={`tagline ${lang === 'ta' ? 'tamil-font' : ''}`}>
        {t.tagline}
      </p>

      {/* Invitation Intro Message */}
      <p
        className={`invitation-intro ${lang === 'ta' ? 'tamil-font' : ''}`}
      >
        {t.message}
      </p>
    </section>
  )
}
