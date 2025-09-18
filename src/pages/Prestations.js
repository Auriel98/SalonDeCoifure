import { useState } from "react";

export default function Prestations() {
  const [choix, setChoix] = useState("Homme");

  const data = {
    Homme: {
      img: "/images/homme.png",
      desc: "Coupe classique, dégradé américain, barbe...",
      details: "Nos prestations pour hommes allient modernité et élégance."
    },
    Femme: {
      img: "/images/femme.jpg",
      desc: "Coupe, brushing, coloration, lissage...",
      details: "Nous sublimons vos cheveux pour toutes les occasions."
    },
    Evenement: {
      img: "/images/enfant.jpg",
      desc: "Coiffure mariage, soirée, shooting...",
      details: "Des coiffures personnalisées pour vos grands événements."
    }
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  };

  const buttonHoverStyle = {
    backgroundColor: "#bbb"
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
        Nos Prestations
      </h2>

      {/* Boutons */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        {["Homme", "Femme", "Evenement"].map(item => (
          <button
            key={item}
            onClick={() => setChoix(item)}
            style={{
              ...buttonStyle,
              backgroundColor: choix === item ? "#4a4a4a" : "#ccc",
              color: choix === item ? "#fff" : "#000"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = choix === item ? "#3a3a3a" : "#bbb"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = choix === item ? "#4a4a4a" : "#ccc"}
          >
            {item === "Evenement" ? "Évènements" : item}
          </button>
        ))}
      </div>

      {/* Contenu image + texte */}
      <div style={{
        display: "flex",
        maxWidth: "1200px",
        width: "100%",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        borderRadius: "15px",
        overflow: "hidden",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        {/* Image */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <img 
            src={data[choix].img} 
            alt={choix} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Texte */}
        <div style={{
          flex: 1,
          backgroundColor: "#4a4a4a",
          color: "#fff",
          padding: "30px",
          minWidth: "300px"
        }}>
          <p style={{ textAlign: "justify", lineHeight: "1.6", marginBottom: "20px" }}>
            {data[choix].desc}
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            {data[choix].details}
          </p>
        </div>
      </div>
    </div>
  );
}
