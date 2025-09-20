import React, { useState } from "react";

const Collections = () => {
  const vetements = [
    { nom: "Robe Élégante", description: "Robe noire classique pour toutes occasions", image: "/images/real10.jpg" },
    { nom: "Top Tendance", description: "Haut moderne aux couleurs vives", image: "/images/real9.jpg" },
    { nom: "Pantalon Chic", description: "Pantalon taille haute confortable et stylé", image: "/images/real2.jpg" },
  ];

  const accessoires = [
    { nom: "Sac à Main Luxe", description: "Sac en cuir , parfait pour le quotidien", image: "/images/real8.jpg" },
    { nom: "Montre Élégante", description: "Montre dorée avec bracelet en métal", image: "/images/real12.jpg" },
    { nom: "Collier Statement", description: "Bijou imposant pour un look sophistiqué", image: "/images/real14.jpg" },
    { nom: "Lunettes Soleil", description: "Protection UV avec style vintage", image: "/images/real15.jpg" },
    { nom: "Écharpe Soie", description: "Accessoire délicat aux motifs floraux", image: "/images/real16.jpg" },
  ];

  const beaute = [
    { nom: "Parfum Oriental", description: "Fragrance envoûtante aux notes boisées", image: "/images/real17.jpg" },
    { nom: "Rouge à Lèvres Mat", description: "Couleur intense longue tenue", image: "/images/real18.jpg" },
    { nom: "Palette Ombres", description: "Jusqu'à 10 teintes pour un maquillage parfait", image: "/images/real19.jpg" },
    { nom: "Vernis Tendance", description: "Collection de couleurs saisonnières", image: "/images/real20.jpg" },
  ];

  const [activeTab, setActiveTab] = useState("Vêtements");
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItems = (items) => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      padding: "30px 0"
    }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedItem(item)}
          style={{
            backgroundColor: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            border: "2px solid transparent"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-8px)";
            e.target.style.boxShadow = "0 15px 40px rgba(255,105,180,0.2)";
            e.target.style.borderColor = "#ff69b4";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
            e.target.style.borderColor = "transparent";
          }}
        >
          <div style={{ position: "relative", height: "200px" }}>
            <img 
              src={item.image} 
              alt={item.nom}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#ff69b4",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "600",
              textTransform: "uppercase"
            }}>
              Nouveau
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <h3 style={{
              fontSize: "1.3rem",
              fontWeight: "700",
              marginBottom: "8px",
              color: "#000"
            }}>
              {item.nom}
            </h3>
            <p style={{
              fontSize: "0.95rem",
              color: "#666",
              lineHeight: "1.5"
            }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{
      minHeight: "calc(100vh - 120px)",
      padding: "60px 20px",
      background: "linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%)",
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontFamily: "'Playfair Display', serif",
            color: "#000",
            marginBottom: "20px"
          }}>
            Nos Collections
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Découvrez notre sélection soigneusement choisie de vêtements, accessoires et produits de beauté
          </p>
        </div>

        {/* Navigation par onglets */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}>
          {["Vêtements", "Accessoires", "Beauté"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "15px 30px",
                borderRadius: "50px",
                backgroundColor: activeTab === tab ? "#ff69b4" : "#fff",
                color: activeTab === tab ? "#fff" : "#000",
                border: activeTab === tab ? "2px solid #ff69b4" : "2px solid #ddd",
                fontWeight: activeTab === tab ? "700" : "500",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                boxShadow: activeTab === tab ? "0 8px 25px rgba(255,105,180,0.3)" : "0 4px 15px rgba(0,0,0,0.1)"
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = "#f0f0f0";
                  e.target.style.borderColor = "#ff69b4";
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.borderColor = "#ddd";
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Contenu des collections */}
        <div>
          {activeTab === "Vêtements" && renderItems(vetements)}
          {activeTab === "Accessoires" && renderItems(accessoires)}
          {activeTab === "Beauté" && renderItems(beaute)}
        </div>
      </div>

      {/* Modal de détails */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              maxWidth: "500px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative", height: "300px" }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.nom}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                ×
               </button>
            </div>
            <div style={{ padding: "30px" }}>
              <h2 style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#000"
              }}>
                {selectedItem.nom}
              </h2>
              <p style={{
                fontSize: "1.1rem",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "25px"
              }}>
                {selectedItem.description}
              </p>
              <div style={{
                display: "flex",
                justifyContent: "center"
              }}>
                <button 
                  onClick={() => setSelectedItem(null)}
                  style={{
                    padding: "12px 30px",
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    border: "none",
                    borderRadius: "25px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontSize: "1rem"
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#ff1493"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#ff69b4"}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;