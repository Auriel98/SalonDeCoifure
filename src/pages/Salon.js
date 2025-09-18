import React from "react";

export default function Salon() {
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
        Notre salon
      </h2>

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
            src="/images/salon.jpg" 
            alt="Salon" 
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
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            Votre salon de coiffure <strong>Coiff’Ella</strong> et son équipe de professionnels
            diplômés d’état situé à <strong>Chevry-Cossigny</strong> vous accueille dans un 
            <strong> cadre moderne</strong> et convivial propice à la détente et à l’évasion. 
            Nos <strong>7 espaces de coiffage</strong> disposent d’équipements complets et performants
            qui permettront à nos <strong>trois coiffeurs professionnels</strong> de réaliser des prouesses
            sur votre chevelure. Depuis <strong>13 ans</strong>, nos experts donnent le meilleur
            d’eux-mêmes pour sublimer votre chevelure. Plus qu’un simple salon de coiffure,
            nos stylistes vous orienteront vers des choix adaptés à votre morphologie et
            votre personnalité : <strong>coupe, balayage</strong> ou encore <strong>coloration</strong>.
          </p>
        </div>
      </div>

      {/* Bouton */}
      <button style={{
        marginTop: "30px",
        backgroundColor: "#4a4a4a",
        color: "#fff",
        padding: "15px 30px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s"
      }}
      onMouseOver={e => e.currentTarget.style.backgroundColor = "#3a3a3a"}
      onMouseOut={e => e.currentTarget.style.backgroundColor = "#4a4a4a"}
      >
        Découvrez nos réalisations
      </button>
    </div>
  );
}
