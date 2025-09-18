import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default function Contact() {
  const inputStyle = {
    padding: "12px 15px 12px 45px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box" // Empêche le dépassement
  };

  return (
    <div style={{
      backgroundColor: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px"
    }}>
      {/* Titre */}
      <h2 style={{
        fontSize: "2.5rem",
        fontFamily: "'Dancing Script', cursive",
        color: "#333",
        marginBottom: "40px",
        paddingBottom: "10px",
        borderBottom: "3px solid #555",
        textAlign: "center"
      }}>
        Contactez-nous
      </h2>

      {/* Formulaire */}
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#f5f5f5",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
      }}>
        {/* Nom */}
        <div style={{ position: "relative" }}>
          <FaUser style={{
            position: "absolute",
            top: "50%",
            left: "15px",
            transform: "translateY(-50%)",
            color: "#888"
          }} />
          <input type="text" placeholder="Nom" style={inputStyle} />
        </div>

        {/* Email */}
        <div style={{ position: "relative" }}>
          <FaEnvelope style={{
            position: "absolute",
            top: "50%",
            left: "15px",
            transform: "translateY(-50%)",
            color: "#888"
          }} />
          <input type="email" placeholder="Email" style={inputStyle} />
        </div>

        {/* Message */}
        <div style={{ position: "relative" }}>
          <FaComment style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            color: "#888"
          }} />
          <textarea 
            placeholder="Votre message" 
            rows="5"
            style={{ ...inputStyle, paddingTop: "15px", paddingBottom: "15px", resize: "vertical" }}
          />
        </div>

        {/* Bouton */}
        <button 
          type="submit"
          style={{
            padding: "15px 30px",
            backgroundColor: "#4a4a4a",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#3a3a3a"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#4a4a4a"}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
