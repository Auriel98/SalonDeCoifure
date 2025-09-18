export default function Actualites() {
  const actus = [
    {
      img: "/images/real1.jpg",
      titre: "Nouveau service coloration",
      date: "12/09/2025",
      texte: "Découvrez notre nouveau service de coloration végétale."
    },
    {
      img: "/images/real2.jpg",
      titre: "Promo rentrée",
      date: "01/09/2025",
      texte: "Profitez de -20% sur toutes les prestations étudiants."
    },
    {
      img: "/images/real3.jpg",
      titre: "Extension du salon",
      date: "05/09/2025",
      texte: "Nous avons ouvert un nouvel espace pour vos rendez-vous."
    },
    {
      img: "/images/real5.jpg",
      titre: "Nouvelle équipe",
      date: "20/08/2025",
      texte: "Découvrez nos nouveaux coiffeurs experts qui rejoignent l’équipe."
    }
  ];

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
        Actualités
      </h2>

      {/* Cartes Actualités */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        maxWidth: "1200px",
        width: "100%"
      }}>
        {actus.map((a, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "flex-start",
            backgroundColor: "#f5f5f5",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            flex: "1 1 400px",
            maxWidth: "550px",
            padding: "15px",
            transition: "transform 0.3s",
            cursor: "pointer"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img 
              src={a.img} 
              alt={a.titre} 
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "5px" }}>{a.titre}</h3>
              <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "10px" }}>{a.date}</p>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{a.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
