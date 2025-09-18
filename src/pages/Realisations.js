export default function Realisations() {
  const images = [
    "/images/real1.jpg",
    "/images/real2.jpg",
    "/images/real3.jpg",
    "/images/real4.jpg", // nouvelle image
    "/images/real5.jpg", // nouvelle image
    "/images/real6.jpg"  // nouvelle image
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
        Nos Réalisations
      </h2>

      {/* Galerie */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        maxWidth: "1200px",
        width: "100%"
      }}>
        {images.map((img, index) => (
          <div key={index} style={{
            flex: "1 1 300px",
            maxWidth: "350px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            cursor: "pointer",
            transition: "transform 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img 
              src={img} 
              alt={`Réa ${index + 1}`} 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
