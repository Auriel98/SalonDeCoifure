import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/salon", label: "Notre Salon" },
    { to: "/prestations", label: "Nos Prestations" },
    { to: "/realisations", label: "Nos Réalisations" },
    { to: "/actualites", label: "Actualités" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LOGO animé */}
          <div className="logo animated">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
            <span>Coiff’Ella</span>
          </div>

          {/* Liens */}
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={toggleMenu}
                className={location.pathname === link.to ? "active-link" : ""}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </nav>

      <style>{`
        .navbar {
          background: linear-gradient(90deg, #2f2e2e, #1f1e1e);
          padding: 20px 40px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* Logo blanc + animation */
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 26px;
          font-weight: bold;
          color: white;
        }

        .logo.animated {
          animation: logoFadeIn 1s ease-in-out forwards;
        }

        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-20deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .menu {
          display: flex;
          gap: 25px;
        }

        .menu a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 18px;
          position: relative;
          transition: color 0.3s;
        }

        /* Effet underline au hover */
        .menu a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: #fff;
          left: 0;
          bottom: -6px;
          transition: width 0.3s;
        }

        .menu a:hover {
          color: #fffde7;
        }

        .menu a:hover::after,
        .menu a.active-link::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          color: #fff;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu {
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: linear-gradient(180deg, #ff7e5f, #feb47b);
            padding: 20px 0;
            display: none;
          }

          .menu.active {
            display: flex;
          }

          .menu a {
            margin: 12px 0;
            text-align: center;
            font-size: 20px;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
