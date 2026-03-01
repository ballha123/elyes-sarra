import React, { useState, useRef } from "react"; // NOUVEAU : on ajoute useRef
import "./App.css";
import weddingPhoto from "./wedding-photo.jpg";
import bgPage1 from "./bg-page1.jpg";
import weddingSong from "./wedding-song.mp3"; // NOUVEAU : Importation de la musique

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // NOUVEAU : On crée une référence pour contrôler le lecteur audio
  const audioRef = useRef(null);

  // NOUVEAU : La fonction magique qui ouvre l'enveloppe ET lance la musique
  const handleOpenInvitation = (e) => {
    if (e) e.stopPropagation(); // Empêche les bugs si on clique vite
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play(); // Joue la musique !
    }
  };

  return (
    <div className="app-container">
      {/* NOUVEAU : Le lecteur audio caché (loop permet de tourner en boucle) */}
      <audio ref={audioRef} src={weddingSong} loop />

      {/* ÉTAPE 1 : La lettre d'accueil avec fond photo */}
      {!isOpen ? (
        <div className="page-1-container" onClick={handleOpenInvitation}>
          {/* L'image de fond de la page 1 */}
          <img src={bgPage1} alt="Background" className="page-1-bg" />

          <div className="letter-content">
            {/* Le texte sur l'enveloppe est géré dans le CSS avec ::before */}
            <h1 className="names-title">Elyes & Sarra</h1>
            <h2 className="subtitle">We are getting married</h2>
            <button className="open-button" onClick={handleOpenInvitation}>
              Click to open
            </button>
          </div>
        </div>
      ) : (
        /* ÉTAPE 2 : L'annonce avec la photo principale */
        <div className="page-2-container">
          {/* L'image de fond qui s'adapte à l'écran sans trop zoomer */}
          <img src={weddingPhoto} alt="Elyes et Sarra" className="page-2-bg" />

          {/* Le contenu (texte et cadre) qui se met par-dessus l'image */}
          <div className="content-wrapper fade-in">
            <p className="location-text">Hacienda Event - Bourj Touil | 16h</p>

            <div className="elegant-frame">
              <h3 className="save-date">Save Our Day</h3>
              <p className="date">22 Mars 2026</p>
            </div>

            <h1 className="initials">E & S</h1>
            <p className="quote">
              Here's to love, joy and the beginning of our forever!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
