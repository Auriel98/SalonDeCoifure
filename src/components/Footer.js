import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1e1e1e",
      color: "#fff",
      padding: "30px 20px",
      fontSize: "0.9rem"
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        maxWidth: "1100px",
        margin: "0 auto",
        gap: "30px",
        alignItems: "flex-start"
      }}>
        {/* Logo + réseaux sociaux */}
        <div style={{ flex: "1 1 220px" }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.7rem",
            marginBottom: "15px",
            color: "#ff7e5f"
          }}>Coiff’Ella</h2>
          <div style={{ display: "flex", gap: "12px", marginTop: "5px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaInstagram /></a>
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaWhatsapp /></a>
          </div>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 220px", lineHeight: "1.6" }}>
          <p>📍 12 Rue du Salon, momo</p>
          <p>✉ contact@coiffella.fr</p>
          <p>📞 +216 55 781 043</p>
        </div>

        {/* Liens légaux */}
        <div style={{ flex: "1 1 220px", lineHeight: "1.6" }}>
          <a href="/mentions-legales" style={linkStyle}>Mentions légales</a><br />
          <a href="/cgu" style={linkStyle}>CGU</a><br />
          <a href="/politique-confidentialite" style={linkStyle}>Politique de confidentialité</a>
        </div>
      </div>

      {/* Séparateur */}
      <hr style={{ borderColor: "#333", margin: "20px 0" }} />

      {/* Bas de page */}
      <p style={{ textAlign: "center", color: "#aaa", margin: 0 }}>
        © 2025 Coiff’Ella - Tous droits réservés
      </p>
    </footer>
  );
}

// Style pour les icônes
const iconStyle = {
  color: "#fff",
  fontSize: "1.3rem",
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  backgroundColor: "#333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer"
};

// Style pour les liens
const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  transition: "color 0.3s",
  cursor: "pointer"
};
