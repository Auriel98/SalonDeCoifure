import { useState } from "react";

export default function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const actus = [
    {
      img: "/images/real30.jpg",
      titre: "À l'Affût des Tendances",
      category: "Nouveauté",
      texte: "Notre équipe parcourt constamment les dernières collections et tendances mode pour vous proposer les pièces les plus actuelles. Nous sélectionnons régulièrement de nouveaux articles pour que votre garde-robe reste toujours au goût du jour."
    },
    {
      img: "/images/real31.jpg",
      titre: "Service de Livraison Rapide",
      category: "Boutique",
      texte: "Nous étendons nos services avec la livraison rapide à domicile. Pas besoin de vous déplacer, nous apportons vos produits directement chez vous."
    },
    {
      img: "/images/real32.png",
      titre: "Équipe à l'Écoute de Vos Besoins",
      category: "Équipe",
      texte: "Notre équipe prend le temps de vous écouter pour comprendre ce que vous recherchez vraiment. Nous posons les bonnes questions et analysons vos préférences pour vous proposer exactement ce qui vous correspond."
    },
    {
      img: "/images/real33.jpg",
      titre: "Styles Incontournables",
      category: "Tendance",
      texte: "Découvrez les couleurs et styles incontournables qui subliment chaque silhouette. Des tons modernes aux coupes flatteuses, trouvez les pièces qui révèlent votre personnalité."
    },
  ];

  const categories = ["Toutes", "Nouveauté", "Boutique", "Équipe", "Tendance"];

  const filteredActus = selectedCategory === "Toutes" 
    ? actus 
    : actus.filter(actu => actu.category === selectedCategory);

  return (
    <div style={{
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      padding: "60px 20px"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontFamily: "'Playfair Display', serif",
            color: "#000",
            marginBottom: "20px"
          }}>
            Actualités & Nouveautés
          </h1>
          <p style={{
            fontSize: "1.3rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Restez informé de toutes nos nouveautés, collections et événements spéciaux
          </p>
        </div>

        {/* Filtres */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "50px",
          flexWrap: "wrap"
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                backgroundColor: selectedCategory === category ? "#ff69b4" : "#fff",
                color: selectedCategory === category ? "#fff" : "#333",
                border: selectedCategory === category ? "2px solid #ff69b4" : "2px solid #ddd",
                fontWeight: selectedCategory === category ? "600" : "400",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
              onMouseOver={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.backgroundColor = "#f0f0f0";
                  e.target.style.borderColor = "#ff69b4";
                }
              }}
              onMouseOut={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.borderColor = "#ddd";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles en grille */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px"
        }}>
          {filteredActus.map((actu, i) => (
            <article
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                border: "2px solid transparent"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(255,105,180,0.2)";
                e.currentTarget.style.borderColor = "#ff69b4";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {/* Image avec overlay */}
              <div style={{ position: "relative", height: "220px" }}>
                <img 
                  src={actu.img} 
                  alt={actu.titre}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                
                {/* Badge catégorie */}
                <div style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  backgroundColor: "#ff69b4",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "25px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  boxShadow: "0 4px 15px rgba(255,105,180,0.4)"
                }}>
                  {actu.category}
                </div>

                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "60px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.3))"
                }} />
              </div>

              {/* Contenu */}
              <div style={{ padding: "25px" }}>
                <h2 style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "#000",
                  lineHeight: "1.3"
                }}>
                  {actu.titre}
                </h2>
                
                <p style={{
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "20px"
                }}>
                  {actu.texte}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}