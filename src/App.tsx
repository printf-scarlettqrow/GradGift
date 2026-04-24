import { useState } from 'react'
import './App.css'

function App() {
  const [isMainUnlocked, setIsMainUnlocked] = useState(false);
  const [mainPassword, setMainPassword] = useState('');
  const [mainError, setMainError] = useState(false);
  const [showMainPass, setShowMainPass] = useState(false);

  const [selectedChar, setSelectedChar] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const passwords: Record<string, string> = {
    isra: 'PANZONTEA2026',
    dylan: 'DISCODYLAN2026',
    vale: 'CAPIWEKA2026'
  };

  const handleMainLogin = () => {
    if (mainPassword.toUpperCase() === 'PAPUSGRADUADOS2026') {
      setIsMainUnlocked(true);
      setMainError(false);
    } else {
      setMainError(true);
      setTimeout(() => setMainError(false), 2000);
    }
  };

  const handleSelect = (char: string) => {
    setSelectedChar(char);
    setUnlocked(false);
    setPassword('');
    setError(false);
  };

  const checkPassword = () => {
    if (selectedChar && password === passwords[selectedChar]) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const videoSources: Record<string, string> = {
    isra: 'ID_DE_YOUTUBE_AQUÍ',
    dylan: 'zmjCOHgWQ4Y',
    vale: 'Ql_sOhZf2Ok'
  };

  if (!isMainUnlocked) {
    return (
      <div className="app-container main-lock-screen">
        <div className="film-grain"></div>
        
        <div className="main-login-card">
          <div className="system-header">
            <span className="blink">●</span> SECURE ACCESS SYSTEM v2.0
          </div>
          <h2>BIENVENID@</h2>
          <p>INGRESE LA CLAVE DE ACCESO PARA CONTINUAR</p>
          <div className="input-wrapper">
            <input 
              type={showMainPass ? "text" : "password"} 
              value={mainPassword} 
              onChange={(e) => setMainPassword(e.target.value)}
              placeholder="CLAVE DE ACCESO"
              className={mainError ? 'input-error' : ''}
              onKeyDown={(e) => e.key === 'Enter' && handleMainLogin()}
              autoFocus
            />
            <button 
              className="toggle-pass-btn" 
              onClick={() => setShowMainPass(!showMainPass)}
              type="button"
            >
              {showMainPass ? "OCULTAR" : "VER"}
            </button>
          </div>
          {mainError && <span className="error-msg">ACCESO DENEGADO - CLAVE INCORRECTA</span>}
          <button className="main-confirm-btn" onClick={handleMainLogin}>
            INICIAR SESIÓN
          </button>
        </div>

        <footer className="footer-credits">
          <p>IZZIWEBO • 2026</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="film-grain"></div>
      
      {!unlocked ? (
        <>
          <header className="header">
            <div className="header-content">
              <span className="header-dot"></span>
              <h1 className="logo">PAPUS GRADUADOS</h1>
              <span className="header-dot"></span>
            </div>
          </header>

          <main className="hero">
            <div className="video-background">
              <video autoPlay loop muted playsInline className="video-content bw-filter">
                <source src="/videos/Video Background.mp4" type="video/mp4" />
              </video>
              <div className="overlay"></div>
            </div>

            <div className="content">
              <h2 className="main-title">THE</h2>
              <div className="description">
                <p className="quote">¡LOS ESO BRAD EN LA DEFENSA DE LOS INDS!</p>
                <p className="quote highlight">LOS QUIERO MUCHO CHICOS, QUE SEA UN BUEN INICIO DE ESTA NUEVA ETAPA DE SU VIDA.</p>
              </div>
              <h2 className="main-title">END</h2>
            </div>
          </main>

          <section className="vertical-gallery">
            <div className="gallery-intro">
              <h2 className="gallery-title">THE INDS</h2>
              <p className="gallery-subtitle">CLASS OF 2026</p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-card" onClick={() => handleSelect('isra')}>
                <div className="card-media">
                  <img src="/photos/isra.png" alt="Isra" />
                </div>
                <div className="card-footer">
                  <span className="char-number">01</span>
                  <h3 className="char-name">ISRA</h3>
                </div>
              </div>

              <div className="gallery-card" onClick={() => handleSelect('dylan')}>
                <div className="card-media">
                  <img src="/photos/dylan.png" alt="Dylan" />
                </div>
                <div className="card-footer">
                  <span className="char-number">02</span>
                  <h3 className="char-name">DYLAN</h3>
                </div>
              </div>

              <div className="gallery-card" onClick={() => handleSelect('vale')}>
                <div className="card-media">
                  <img src="/photos/vale.png" alt="Vale" />
                </div>
                <div className="card-footer">
                  <span className="char-number">03</span>
                  <h3 className="char-name">VALE</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Modal de Contraseña */}
          {selectedChar && (
            <div className="modal-overlay">
              <div className="password-card">
                <button className="close-btn" onClick={() => setSelectedChar(null)}>×</button>
                <h3>ACCESO RESTRINGIDO</h3>
                <p>INGRESE CONTRASEÑA PARA {selectedChar.toUpperCase()}:</p>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className={error ? 'input-error' : ''}
                  onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                />
                {error && <span className="error-msg">CONTRASEÑA INCORRECTA</span>}
                <button className="confirm-btn" onClick={checkPassword}>DESBLOQUEAR</button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Pantalla de Victoria */
        <section className="unlocked-section">
          <div className="victory-content">
            <h2 className="victory-title">¡FELICIDADES!</h2>
            <h3 className="victory-subtitle">ESTE ES TU MOMENTO, {selectedChar?.toUpperCase()}</h3>
            
            <div className="video-container">
              {selectedChar && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoSources[selectedChar]}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="victory-video"
                ></iframe>
              )}
            </div>

            <button className="back-btn" onClick={() => { setUnlocked(false); setSelectedChar(null); }}>
              VOLVER AL INICIO
            </button>
          </div>
        </section>
      )}

      <footer className="footer-credits">
        <p>IZZIWEBO • 2026</p>
      </footer>
    </div>
  )
}

export default App
