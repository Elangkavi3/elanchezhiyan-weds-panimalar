import logoImg from './assets/Logo.png'
import './App.css'

function App() {
  return (
    <main className="invitation-container">
      <div className="invitation-card">
        {/* Decorative borders & corner accents */}
        <div className="card-border-inner" />
        <span className="corner-ornament top-left" />
        <span className="corner-ornament top-right" />
        <span className="corner-ornament bottom-left" />
        <span className="corner-ornament bottom-right" />

        {/* Header subtitle */}
        <p className="sub-title">Together With Their Families</p>

        {/* E & P Logo with ambient golden glow */}
        <div className="logo-wrapper">
          <div className="logo-glow" />
          <img
            src={logoImg}
            alt="Elangkavi & Panimalar Monogram Logo"
            className="invitation-logo"
            loading="eager"
          />
        </div>

        {/* Couple names & invitation details */}
        <h1 className="couple-names">Elancheziyan &amp; Panimalar</h1>
        <p className="script-text">We are getting married</p>

        <div className="divider" role="separator">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>

        <p className="invitation-message">
          Cordially invite you to celebrate the joyous occasion of their wedding ceremony.
        </p>
      </div>
    </main>
  )
}

export default App

