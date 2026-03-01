import React, { useState, useRef } from "react";

// =========================================================================
// 📸 POUR METTRE LA PHOTO DE VOTRE GALERIE EN BACKGROUND :
// =========================================================================
// 1. Prenez votre photo et glissez-la dans le dossier "src" de votre projet.
// 2. Renommez votre fichier photo en "wedding-photo.jpg".
// 3. ENLEVEZ les "//" au début des deux lignes "import" ci-dessous :

import weddingPhoto from "./wedding-photo.jpg";
import weddingSong from "./wedding-song.mp3";

// === COMPOSANT: Branche Botanique Luxueuse (Finition Or) ===
const BotanicalBranch = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BF953F" />
        <stop offset="25%" stopColor="#FCF6BA" />
        <stop offset="50%" stopColor="#B38728" />
        <stop offset="75%" stopColor="#FBF5B7" />
        <stop offset="100%" stopColor="#AA771C" />
      </linearGradient>
    </defs>
    {/* Tige principale courbée */}
    <path
      d="M -10,10 C 60,30 140,80 180,210"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Feuilles pleines et vides alternées pour un effet bijou */}
    <path
      d="M 20,24 C 35,10 50,15 45,30 C 35,35 20,30 20,24 Z"
      fill="url(#goldGrad)"
      opacity="0.8"
    />
    <path
      d="M 50,32 C 70,15 90,25 80,45 C 60,55 45,45 50,32 Z"
      fill="none"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M 85,50 C 110,30 125,45 115,65 C 90,75 75,60 85,50 Z"
      fill="url(#goldGrad)"
      opacity="0.7"
    />
    <path
      d="M 120,70 C 140,50 160,60 150,85 C 125,95 110,80 120,70 Z"
      fill="none"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M 145,105 C 170,90 185,110 170,130 C 145,140 130,120 145,105 Z"
      fill="url(#goldGrad)"
      opacity="0.85"
    />
    <path
      d="M 160,145 C 180,130 195,150 180,170 C 160,180 145,160 160,145 Z"
      fill="none"
      stroke="url(#goldGrad)"
      strokeWidth="1"
    />

    {/* Petites baies délicates */}
    <circle cx="60" cy="20" r="3" fill="url(#goldGrad)" />
    <circle cx="105" cy="35" r="2.5" fill="url(#goldGrad)" />
    <circle cx="150" cy="65" r="3.5" fill="url(#goldGrad)" />
    <circle cx="175" cy="110" r="2" fill="url(#goldGrad)" />
  </svg>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvitation = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio autoplay blocked"));
    }
  };

  return (
    <>
      <style>{`
        /* =========================================
           IMPORT DES POLICES (AJOUT DE NOUVELLES POLICES LUXE)
        ========================================= */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Great+Vibes&family=Montserrat:wght@300;400&family=Pinyon+Script&family=Cinzel:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .app-container {
          width: 100vw;
          min-height: 100vh;
          font-family: "Cormorant Garamond", serif;
          background-color: #111;
        }

        /* =========================================
           PAGE 1 : L'ACCUEIL
        ========================================= */
        .page-1-container {
          position: relative; width: 100%; height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          cursor: pointer; background-color: #5c0612; overflow: hidden;
        }
        .page-1-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover; opacity: 0.15; filter: blur(5px) grayscale(100%);
          mix-blend-mode: multiply; transform: scale(1.05); z-index: 1;
        }
        .page-1-text-top { position: relative; z-index: 2; text-align: center; margin-bottom: 60px; }
        .subtitle {
          font-family: "Montserrat", sans-serif; font-size: 1.2rem; font-weight: 300;
          color: #f1cfb3; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 15px;
        }
        .names-title {
          font-family: "Great Vibes", cursive; font-size: 5.5rem; color: #ffffff;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }
        .letter-content {
          position: relative; z-index: 2; display: flex; justify-content: center; align-items: center;
          background: #f0ebe1; border-radius: 4px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transition: all 0.6s ease-in-out; width: 350px; height: 220px;
        }
        .letter-content::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: #e6dfd3; border-radius: 4px; z-index: 0;
        }
        .letter-content::after {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: #fffdfc; border-radius: 4px; clip-path: polygon(0 0, 100% 0, 50% 55%);
          transition: all 0.6s ease-in-out; transform-origin: top; z-index: 2;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
        .letter-seal {
          position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%);
          width: 75px; height: 75px; 
          background: radial-gradient(circle at 30% 30%, #8a0c1f, #3b0008); 
          border-radius: 50%;
          color: #f1cfb3; display: flex; justify-content: center; align-items: center;
          font-family: "Great Vibes", cursive; font-size: 1.9rem;
          padding-top: 5px; 
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(0,0,0,0.4); z-index: 3;
          transition: all 0.6s ease-in-out; transform-origin: top;
        }
        .click-to-open {
          font-family: "Montserrat", sans-serif; font-size: 0.85rem; letter-spacing: 6px;
          color: #f1cfb3; text-transform: uppercase; margin-top: 50px;
          animation: pulse 2.5s infinite; z-index: 2;
        }
        .letter-content:hover { transform: translateY(-10px); }
        .letter-content:hover::after { transform: rotateX(160deg); opacity: 0; }
        .page-1-container:hover .letter-seal { transform: translate(-50%, -50%) rotateX(160deg); opacity: 0; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 0.6; } }

        /* =========================================
           PAGE 2 : LE CHEF D'ŒUVRE EN ARCHE
        ========================================= */
        .page-2-container {
          position: relative; width: 100%; height: 100vh;
          display: flex; justify-content: center; align-items: center;
          overflow: hidden; background-color: #000; 
        }
        .page-2-bg {
          position: absolute; width: 100%; height: 100%;
          object-fit: cover; /* Garde la photo en plein écran */
          
          /* ICI EST LA MAGIE : On décale le focus vers le haut (15% depuis le haut) pour voir les visages */
          object-position: center 15%; 
          
          opacity: 0; z-index: 1;
          animation: photoReveal 3s ease-out forwards; 
        }
        @keyframes photoReveal { 
          from { opacity: 0; transform: scale(1.05); } 
          to { opacity: 1; transform: scale(1); } 
        }
        .page-2-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 80%); z-index: 2;
          opacity: 0;
          animation: photoReveal 3s ease-out forwards 0.5s;
        }
        .content-wrapper {
          position: relative; z-index: 3; text-align: center; color: white;
          width: 95%; max-width: 650px;
        }
        .fade-in { opacity: 0; animation: fadeIn 1.5s ease-out forwards 1s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* --- LE CADRE EN ARCHE (ULTRA LUXE) --- */
        .elegant-frame {
          background-color: #FAF8F5;
          position: relative;
          width: 100%;
          max-width: 500px; 
          margin: 0 auto;
          border-top-left-radius: 250px; 
          border-top-right-radius: 250px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          padding: 95px 45px 55px; 
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255,255,255,0.8);
          overflow: visible;
        }

        .paper-texture {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit; opacity: 0.35;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 1;
        }

        .frame-inner-border {
          position: relative; z-index: 2;
          border-top-left-radius: 230px; 
          border-top-right-radius: 230px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 1.5px solid rgba(212, 196, 168, 0.8);
          padding: 35px 25px; 
          outline: 1px solid rgba(212, 196, 168, 0.3);
          outline-offset: -5px;
        }

        .botanical-branch {
          position: absolute;
          width: 200px; height: 200px;
          z-index: 10; pointer-events: none;
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.15));
        }
        .top-left { top: -25px; left: -25px; transform: rotate(10deg); }
        .bottom-right { bottom: -25px; right: -25px; transform: rotate(190deg); }

        .gold-foil-text {
          background: linear-gradient(to right, #BF953F 0%, #FCF6BA 25%, #b38728 50%, #fbf5b7 75%, #AA771C 100%);
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 6s linear infinite;
        }
        @keyframes shine { to { background-position: 200% center; } }

        .monogram {
          font-family: "Cinzel", serif;
          font-size: 1.2rem;
          color: #AA771C;
          margin-bottom: 25px;
          letter-spacing: 2px;
        }
        .monogram-amp { font-family: "Pinyon Script", cursive; font-size: 1.8rem; margin: 0 8px; }

        .save-date {
          font-family: "Pinyon Script", cursive;
          font-size: 5.5rem;
          font-weight: 400;
          margin-bottom: 15px;
          line-height: 0.9;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.02);
        }

        .pre-names {
          font-family: "Cormorant Garamond", serif;
          font-style: italic; font-weight: 300; font-size: 1.3rem;
          color: #555; margin-bottom: 15px;
        }

        .names {
          font-family: "Cinzel", serif;
          font-size: 1.8rem; font-weight: 500;
          letter-spacing: 6px; color: #151515;
          margin: 10px 0;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }

        .ampersand {
          font-family: "Pinyon Script", cursive;
          font-size: 3rem; color: #d4c4a8; font-weight: 400; line-height: 0.5;
        }

        .elegant-divider {
          width: 60px; height: 1.5px;
          background: linear-gradient(to right, transparent, #c5a880, transparent);
          margin: 30px auto; position: relative;
        }
        .elegant-divider::after {
          content: ""; position: absolute; top: -3px; left: calc(50% - 3px);
          width: 6px; height: 6px; background-color: #c5a880; transform: rotate(45deg);
        }

        .date {
          font-family: "Cinzel", serif; font-size: 1.3rem; font-weight: 600;
          letter-spacing: 5px; margin-top: 20px; color: #4a3619; 
        }

        .location-text {
          font-family: "Montserrat", sans-serif; font-size: 0.8rem; font-weight: 500;
          letter-spacing: 3px; text-transform: uppercase; margin-top: 25px;
          color: #1a1a1a;
        }

        .quote {
          font-family: "Cormorant Garamond", serif; font-size: 1.2rem; font-style: italic;
          margin-top: 25px; color: #555; border-top: 1px solid rgba(212, 196, 168, 0.4);
          padding-top: 20px;
        }
      `}</style>

      <div className="app-container">
        <audio ref={audioRef} src={weddingSong} loop />

        {!isOpen ? (
          <div className="page-1-container" onClick={handleOpenInvitation}>
            <div className="page-1-text-top">
              <h2 className="subtitle">We are getting married</h2>
              <h1 className="names-title">Elyes & Sarra</h1>
            </div>

            <div className="letter-content">
              <div className="letter-seal">
                E{" "}
                <span
                  style={{
                    fontFamily: "Cinzel",
                    fontSize: "1.3rem",
                    margin: "0 4px",
                    transform: "translateY(-3px)",
                  }}
                >
                  &
                </span>{" "}
                S
              </div>
            </div>

            <p className="click-to-open">Click to open</p>
          </div>
        ) : (
          <div className="page-2-container">
            <img
              src={weddingPhoto}
              alt="Elyes et Sarra"
              className="page-2-bg"
            />
            <div className="page-2-overlay"></div>

            <div className="content-wrapper fade-in">
              <div className="elegant-frame">
                <div className="paper-texture"></div>

                <BotanicalBranch className="botanical-branch top-left" />
                <BotanicalBranch className="botanical-branch bottom-right" />

                <div className="frame-inner-border">
                  <div className="monogram">
                    E<span className="monogram-amp">&</span>S
                  </div>

                  <h3 className="save-date gold-foil-text">Save Our Date</h3>

                  <p className="pre-names">to celebrate the wedding of</p>

                  <p className="names">
                    ELYES <span className="ampersand">&</span> SARRA
                  </p>

                  <div className="elegant-divider"></div>

                  <p className="date">22 MARS 2026</p>

                  <p className="location-text">
                    Hacienda Event - Bourj Touil | 16h
                  </p>

                  <p className="quote">
                    "Here's to love, joy and the beginning of our forever!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
