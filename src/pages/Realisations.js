import { useState } from "react";

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/real25.jpg", category: "Vêtements", title: "Collection Saisonnière", description: "Pièces tendance pour la saison" },
    { src: "/images/real24.jpg", category: "Accessoires", title: "Sacs à Main", description: "Élégance et praticité" },
    { src: "/images/real28.jpg", category: "Beauté", title: "Parfums", description: "Fragrances envoûtantes" },
    { src: "/images/real22.png", category: "Vêtements", title: "Robes Africaine", description: "Pour vos événements spéciaux" },
    { src: "/images/real26.jpg", category: "Chaussures", title: "Escarpins Chic", description: "Confort et style réunis" },
    { src: "/images/real23.jpg", category: "Accessoires", title: "Bijoux Fantaisie", description: "Brillez de mille feux" },
    { src: "/images/real21.jpg", category: "Vêtements", title: "Tenues Décontractées", description: "Style décontracté quotidien" },
    { src: "/images/real27.jpg", category: "Beauté", title: "Maquillage Pro", description: "Révélez votre beauté" },
    { src: "/images/real29.jpg", category: "Chaussures", title: "Babouches Tendance", description: "Sport et mode" },
  ];

  const categories = ["Tout", "Vêtements", "Accessoires", "Beauté", "Chaussures"];

  const filteredImages = selectedCategory === "Tout" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div style={{
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      padding: "60px 20px"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontFamily: "'Playfair Display', serif",
            color: "#000",
            marginBottom: "20px"
          }}>
            Notre Galerie
          </h1>
          <p style={{
            fontSize: "1.3rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Découvrez notre sélection de produits à travers cette galerie photo. 
            Chaque image raconte une histoire de style et d'élégance.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "50px",
          flexWrap: "wrap"
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "12px 25px",
                borderRadius: "30px",
                backgroundColor: selectedCategory === category ? "#ff69b4" : "#fff",
                color: selectedCategory === category ? "#fff" : "#333",
                border: selectedCategory === category ? "2px solid #ff69b4" : "2px solid #ddd",
                fontWeight: selectedCategory === category ? "700" : "500",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                boxShadow: selectedCategory === category 
                  ? "0 6px 20px rgba(255,105,180,0.3)" 
                  : "0 4px 15px rgba(0,0,0,0.1)"
              }}
              onMouseOver={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.backgroundColor = "#f0f0f0";
                  e.target.style.borderColor = "#ff69b4";
                  e.target.style.transform = "translateY(-2px)";
                }
              }}
              onMouseOut={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.borderColor = "#ddd";
                  e.target.style.transform = "translateY(0)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille d'images avec layout masonry */}
        <div style={{
          columns: "4",
          columnGap: "20px",
          marginBottom: "40px"
        }}>
          {filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                marginBottom: "20px",
                breakInside: "avoid",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                position: "relative",
                group: "gallery-item"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{ position: "relative", height: `${200 + (index % 3) * 50}px` }}>
                <img 
                  src={img.src} 
                  alt={img.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    filter: "brightness(0.9)"
                  }} 
                />
                
                {/* Badge catégorie */}
                <div style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  backgroundColor: "#ff69b4",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {img.category}
                </div>

                {/* Overlay avec titre */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  padding: "30px 20px 20px",
                  color: "#fff"
                }}>
                  <h3 style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "5px"
                  }}>
                    {img.title}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    opacity: "0.9",
                    margin: "0"
                  }}>
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour affichage en grand */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "20px"
            }}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                backgroundColor: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1001,
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ff69b4";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "rgba(0,0,0,0.7)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                ×
              </button>

              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  style={{
                    width: "100%",
                    height: "70vh",
                    objectFit: "cover"
                  }}
                />
                
                <div style={{
                  padding: "30px",
                  textAlign: "center"
                }}>
                  <div style={{
                    display: "inline-block",
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    padding: "6px 15px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    marginBottom: "15px"
                  }}>
                    {selectedImage.category}
                  </div>
                  
                  <h2 style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#000"
                  }}>
                    {selectedImage.title}
                  </h2>
                  
                  <p style={{
                    fontSize: "1.1rem",
                    color: "#666",
                    lineHeight: "1.6"
                  }}>
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1200px) {
          [style*="columns: 4"] {
            columns: 3 !important;
          }
        }
        
        @media (max-width: 900px) {
          [style*="columns: 3"], [style*="columns: 4"] {
            columns: 2 !important;
          }
        }
        
        @media (max-width: 600px) {
          [style*="columns"] {
            columns: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}