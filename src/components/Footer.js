export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)",
      color: "#fff",
      padding: "60px 20px 30px",
      fontSize: "0.95rem",
      borderTop: "3px solid #ff69b4"
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "40px",
        alignItems: "flex-start"
      }}>
        {/* Logo et description */}
        <div style={{ flex: "1 1 300px", maxWidth: "350px" }}>
          <div style={{ marginBottom: "25px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="280"
              height="60"
              viewBox="0 0 320 70"
            >
              <defs>
                <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff69b4" />
                  <stop offset="100%" stopColor="#ff1493" />
                </linearGradient>
              </defs>
              
              {/* Sac à main */}
              <g transform="translate(5, 15)">
                <path d="M5 12 L25 12 L23 32 L7 32 Z" 
                      fill="none" 
                      stroke="url(#footerGrad)" 
                      strokeWidth="2"/>
                <path d="M9 12 C9 8, 12 6, 15 6 C18 6, 21 8, 21 12" 
                      fill="none" 
                      stroke="url(#footerGrad)" 
                      strokeWidth="2"/>
                <circle cx="12" cy="20" r="1.5" fill="url(#footerGrad)"/>
              </g>
              
              {/* Robe */}
              <g transform="translate(35, 10)">
                <path d="M8 5 L12 5 L14 8 L6 8 Z" 
                      fill="url(#footerGrad)" 
                      stroke="#fff" 
                      strokeWidth="1"/>
                <path d="M6 8 L14 8 L18 25 L2 25 Z" 
                      fill="none" 
                      stroke="url(#footerGrad)" 
                      strokeWidth="2"/>
                <line x1="8" y1="5" x2="8" y2="2" stroke="url(#footerGrad)" strokeWidth="1.5"/>
                <line x1="12" y1="5" x2="12" y2="2" stroke="url(#footerGrad)" strokeWidth="1.5"/>
                <line x1="6" y1="14" x2="14" y2="14" stroke="url(#footerGrad)" strokeWidth="1.5"/>
              </g>
              
              {/* Flacon de parfum */}
              <g transform="translate(65, 12)">
                <rect x="4" y="8" width="8" height="15" 
                      fill="rgba(255,105,180,0.2)" 
                      stroke="url(#footerGrad)" 
                      strokeWidth="2" 
                      rx="2"/>
                <rect x="6" y="5" width="4" height="5" 
                      fill="none" 
                      stroke="url(#footerGrad)" 
                      strokeWidth="1.5"/>
                <ellipse cx="8" cy="4" rx="3" ry="2" 
                         fill="url(#footerGrad)"/>
                <line x1="6" y1="10" x2="6" y2="20" stroke="#fff" strokeWidth="1" opacity="0.7"/>
              </g>
              
              {/* Ligne décorative */}
              <path d="M30 35 Q50 25, 70 35" 
                    stroke="url(#footerGrad)" 
                    strokeWidth="1" 
                    fill="none" 
                    opacity="0.5"/>
              
              {/* Texte */}
              <text x="95" y="28" 
                    fill="#fff" 
                    fontFamily="'Poppins', sans-serif" 
                    fontSize="16" 
                    fontWeight="700" 
                    letterSpacing="1px">
                Un peu de tout
              </text>
              
              <text x="95" y="43" 
                    fill="url(#footerGrad)" 
                    fontFamily="'Poppins', sans-serif" 
                    fontSize="12" 
                    fontWeight="500" 
                    letterSpacing="2px">
                à petit prix
              </text>
              
              {/* Étoiles décoratives */}
              <circle cx="85" cy="25" r="1" fill="url(#footerGrad)" opacity="0.6"/>
              <circle cx="250" cy="30" r="1.5" fill="url(#footerGrad)" opacity="0.8"/>
            </svg>
          </div>
          <p style={{ 
            lineHeight: "1.6", 
            color: "#ccc",
            marginBottom: "25px"
          }}>
            Votre boutique de mode et d'accessoires où style rime avec accessibilité. 
            Découvrez des pièces uniques pour exprimer votre personnalité.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/21655781043" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Informations de contact */}
        <div style={{ flex: "1 1 250px", lineHeight: "1.8" }}>
          <h3 style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#ff69b4",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            Nous Trouver
          </h3>
          <div style={{ color: "#ccc" }}>
            <p style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ff69b4", fontSize: "1.1rem" }}>📍</span>
              Grand Libreville
            </p>
            <p style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ff69b4", fontSize: "1.1rem" }}>✉️</span>
              pauleverlaine@gmail.com
            </p>
            <p style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ff69b4", fontSize: "1.1rem" }}>📞</span>
              +241 074 912 636
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ff69b4", fontSize: "1.1rem" }}>🕒</span>
              Lun-Sam : 9h-19h
            </p>
          </div>
        </div>

        {/* Liens rapides */}
        <div style={{ flex: "1 1 200px", lineHeight: "1.8" }}>
          <h3 style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#ff69b4",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            Liens Rapides
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a href="/collections" style={linkStyle}>Nos Collections</a>
            <a href="/galerie" style={linkStyle}>Galerie Photos</a>
            <a href="/contact" style={linkStyle}>Nous Contacter</a>
            <a href="/actualites" style={linkStyle}>Actualités</a>
          </div>
        </div>

        {/* Informations légales */}
        <div style={{ flex: "1 1 200px", lineHeight: "1.8" }}>
          <h3 style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#ff69b4",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            Informations
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a href="/mentions-legales" style={linkStyle}>Mentions légales</a>
            <a href="/cgu" style={linkStyle}>Conditions générales</a>
            <a href="/confidentialite" style={linkStyle}>Confidentialité</a>
            <a href="/retours" style={linkStyle}>Retours & Échanges</a>
          </div>
        </div>
      </div>

      {/* Séparateur décoratif */}
      <div style={{
        margin: "40px 0 25px",
        height: "1px",
        background: "linear-gradient(90deg, transparent, #ff69b4, transparent)"
      }} />

      {/* Bas de page */}
      <div style={{
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        <p style={{ 
          color: "#aaa", 
          margin: 0,
          fontSize: "0.9rem"
        }}>
          © 2025 Un peu de tout à petit prix - Tous droits réservés
        </p>
        <p style={{
          color: "#ff69b4",
          margin: 0,
          fontSize: "0.9rem",
          fontStyle: "italic"
        }}>
          Sélectionner avec le ❤️ pour votre style
        </p>
      </div>
    </footer>
  );
}

const socialIconStyle = {
  color: "#fff",
  fontSize: "1.2rem",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff69b4, #ff1493)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  boxShadow: "0 4px 15px rgba(255,105,180,0.3)"
};

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  padding: "5px 0",
  borderLeft: "3px solid transparent",
  paddingLeft: "10px"
};