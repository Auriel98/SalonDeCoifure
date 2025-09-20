import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/salon", label: "Notre Boutique" },
    { to: "/prestations", label: "Collections" },
    { to: "/realisations", label: "Galerie" },
    { to: "/actualites", label: "Actualités" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Nouveau logo plus sophistiqué */}
          <Link to="/" className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="70"
              viewBox="0 0 320 70"
            >
              <defs>
                <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff69b4" />
                  <stop offset="100%" stopColor="#ff1493" />
                </linearGradient>
              </defs>
              
              {/* Sac à main */}
              <g transform="translate(5, 15)">
                <path d="M5 12 L25 12 L23 32 L7 32 Z" 
                      fill="none" 
                      stroke="url(#mainGrad)" 
                      strokeWidth="2"/>
                <path d="M9 12 C9 8, 12 6, 15 6 C18 6, 21 8, 21 12" 
                      fill="none" 
                      stroke="url(#mainGrad)" 
                      strokeWidth="2"/>
                <circle cx="12" cy="20" r="1.5" fill="url(#mainGrad)"/>
              </g>
              
              {/* Robe */}
              <g transform="translate(35, 10)">
                {/* Haut de la robe */}
                <path d="M8 5 L12 5 L14 8 L6 8 Z" 
                      fill="url(#mainGrad)" 
                      stroke="#000" 
                      strokeWidth="1"/>
                {/* Jupe évasée */}
                <path d="M6 8 L14 8 L18 25 L2 25 Z" 
                      fill="none" 
                      stroke="url(#mainGrad)" 
                      strokeWidth="2"/>
                {/* Bretelles */}
                <line x1="8" y1="5" x2="8" y2="2" stroke="url(#mainGrad)" strokeWidth="1.5"/>
                <line x1="12" y1="5" x2="12" y2="2" stroke="url(#mainGrad)" strokeWidth="1.5"/>
                {/* Détail ceinture */}
                <line x1="6" y1="14" x2="14" y2="14" stroke="url(#mainGrad)" strokeWidth="1.5"/>
              </g>
              
              {/* Flacon de parfum */}
              <g transform="translate(65, 12)">
                {/* Corps du flacon */}
                <rect x="4" y="8" width="8" height="15" 
                      fill="rgba(255,105,180,0.2)" 
                      stroke="url(#mainGrad)" 
                      strokeWidth="2" 
                      rx="2"/>
                {/* Goulot */}
                <rect x="6" y="5" width="4" height="5" 
                      fill="none" 
                      stroke="url(#mainGrad)" 
                      strokeWidth="1.5"/>
                {/* Bouchon */}
                <ellipse cx="8" cy="4" rx="3" ry="2" 
                         fill="url(#mainGrad)"/>
                {/* Reflet sur le flacon */}
                <line x1="6" y1="10" x2="6" y2="20" stroke="#fff" strokeWidth="1" opacity="0.7"/>
              </g>
              
              {/* Ligne décorative connectant les éléments */}
              <path d="M30 35 Q50 25, 70 35" 
                    stroke="url(#mainGrad)" 
                    strokeWidth="1" 
                    fill="none" 
                    opacity="0.5"/>
              
              {/* Texte principal */}
              <text x="105" y="28" 
                    fill="#f9f5f5ff" 
                    fontFamily="'Poppins', sans-serif" 
                    fontSize="18" 
                    fontWeight="700" 
                    letterSpacing="1px">
                Un peu de tout
              </text>
              
              <text x="105" y="45" 
                    fill="url(#mainGrad)" 
                    fontFamily="'Poppins', sans-serif" 
                    fontSize="13" 
                    fontWeight="500" 
                    letterSpacing="2px">
                à petit prix
              </text>
              
              {/* Petites étoiles décoratives */}
              <circle cx="95" cy="25" r="1" fill="url(#mainGrad)" opacity="0.6"/>
              <circle cx="280" cy="30" r="1.5" fill="url(#mainGrad)" opacity="0.8"/>
              <circle cx="290" cy="40" r="1" fill="url(#mainGrad)" opacity="0.6"/>
            </svg>
          </Link>

          {/* Menu de navigation */}
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={location.pathname === link.to ? "active-link" : ""}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger menu */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.88a.996.996 0 001.41-1.41L13.41 12l4.88-4.89c.39-.38.39-1.02.01-1.4z"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .navbar {
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
          padding: 15px 40px;
          box-shadow: 0 4px 20px rgba(255, 105, 180, 0.2);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 2px solid #ff69b4;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          text-decoration: none;
          filter: drop-shadow(0 2px 4px rgba(246, 238, 242, 0.2));
        }

        .logo:hover {
          transform: scale(1.03);
          filter: drop-shadow(0 4px 8px rgba(255,105,180,0.3));
        }

        .menu {
          display: flex;
          gap: 35px;
        }

        .menu a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: 'Poppins', sans-serif;
        }

        .menu a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff69b4, #ff1493);
          left: 0;
          bottom: -2px;
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .menu a::before {
          content: "";
          position: absolute;
          width: 0;
          height: 100%;
          background: rgba(255,105,180,0.1);
          left: -10px;
          top: 0;
          transition: width 0.3s ease;
          border-radius: 4px;
          z-index: -1;
        }

        .menu a:hover,
        .menu a.active-link {
          color: #ff69b4;
          text-shadow: 0 0 8px rgba(255, 105, 180, 0.3);
        }

        .menu a:hover::after,
        .menu a.active-link::after {
          width: 100%;
        }

        .menu a:hover::before,
        .menu a.active-link::before {
          width: calc(100% + 20px);
        }

        .hamburger {
          display: none;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 5px;
          border-radius: 4px;
        }

        .hamburger:hover {
          color: #ff69b4;
          background: rgba(255,105,180,0.1);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
          }

          .menu {
            position: absolute;
            top: 85px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
            padding: 25px 0;
            display: none;
            border-top: 2px solid #ff69b4;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          }

          .menu.active {
            display: flex;
          }

          .menu a {
            margin: 8px 0;
            text-align: center;
            font-size: 18px;
            padding: 12px 0;
          }

          .hamburger {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .logo svg {
            width: 280px;
            height: 70px;
          }
        }
      `}</style>
    </>
  );
}