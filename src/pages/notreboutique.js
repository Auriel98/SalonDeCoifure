import React from 'react';

const NotreBoutique = () => {
  return (
    <div style={{ 
      minHeight: "calc(100vh - 120px)", 
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%)"
    }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/real12.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff"
      }}>
        <div style={{ maxWidth: "800px", padding: "0 20px" }}>
          <h1 style={{
            fontSize: "4rem",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "20px",
            textShadow: "2px 2px 10px rgba(0,0,0,0.5)"
          }}>
            Notre Histoire
          </h1>
          <p style={{
            fontSize: "1.4rem",
            lineHeight: "1.6",
            textShadow: "1px 1px 5px rgba(137, 120, 120, 0.5)"
          }}>
            Une passion pour la mode accessible à tous
          </p>
        </div>
      </div>

      {/* Section principale */}
      <div style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Introduction */}
          <div style={{
            textAlign: "center",
            marginBottom: "60px",
            maxWidth: "800px",
            margin: "0 auto 60px"
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              color: "#000",
              marginBottom: "25px"
            }}>
              Bienvenue chez "Un peu de tout à petit prix"
            </h2>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "20px"
            }}>
              Depuis notre ouverture, nous nous sommes donné pour mission de démocratiser la mode en proposant 
              des vêtements et accessoires de qualité à des prix abordables. Notre boutique est née d'une passion : 
              celle de croire que chacun mérite de se sentir beau et confiant, peu importe son budget.
            </p>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#555"
            }}>
              Nous sélectionnons soigneusement chaque pièce pour vous offrir des collections variées qui s'adaptent 
              à tous les styles et toutes les occasions. Vêtements tendance, accessoires chic, parfums envoûtants, 
              chaussures confortables... vous trouverez vraiment "un peu de tout" chez nous !
            </p>
          </div>

          {/* Valeurs */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "80px"
          }}>
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                titre: "Bonne Qualité",
                description: "Nous sélectionnons nos articles avec soin pour vous offrir des pièces de bonne qualité à prix accessible."
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                ),
                titre: "Prix Justes",
                description: "Notre philosophie : proposer des produits de qualité à des prix accessibles. La mode ne doit pas être un luxe réservé à quelques-uns."
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                titre: "Style Unique",
                description: "Nos collections reflètent les dernières tendances tout en restant intemporelles. Exprimez votre personnalité avec nos pièces soigneusement choisies."
              }
            ].map((valeur, index) => (
              <div key={index} style={{
                backgroundColor: "#fff",
                padding: "40px 30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                border: "2px solid transparent"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "#ff69b4";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(255,105,180,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
              >
                <div style={{
                  color: "#ff69b4",
                  marginBottom: "20px"
                }}>
                  {valeur.icon}
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#000",
                  marginBottom: "15px"
                }}>
                  {valeur.titre}
                </h3>
                <p style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#666"
                }}>
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>

          {/* Section images avec nouveau layout */}
          <div style={{ marginBottom: "80px" }}>
            <h2 style={{
              fontSize: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              color: "#000",
              textAlign: "center",
              marginBottom: "50px"
            }}>
              Notre Espace
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "300px 200px",
              gap: "20px",
              maxWidth: "900px",
              margin: "0 auto"
            }}>
              {/* Image principale */}
              <div style={{
                gridColumn: "1 / 2",
                gridRow: "1 / 3",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img 
                  src="/images/real0.jpg" 
                  alt="Notre boutique principale" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover"
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  padding: "30px 20px 20px",
                  color: "#fff"
                }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "5px" }}>
                    Espace principal
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                    Notre boutique accueillante et moderne
                  </p>
                </div>
              </div>

              {/* Petites images */}
              <div style={{
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img 
                  src="/images/real11.jpg" 
                  alt="Coin accessoires" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover"
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  padding: "15px",
                  color: "#fff"
                }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "600" }}>Coin accessoires</h4>
                </div>
              </div>

              <div style={{
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img 
                  src="/images/real13.jpg" 
                  alt="Espace beauté" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover"
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  padding: "15px",
                  color: "#fff"
                }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "600" }}>Espace beauté</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Notre équipe */}
          <div style={{
            backgroundColor: "#fff",
            padding: "60px 40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              color: "#000",
              marginBottom: "30px"
            }}>
              Notre Équipe Passionnée
            </h2>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto 40px"
            }}>
              Derrière chaque conseil, chaque sourire, il y a une équipe de passionnés de mode qui connaît 
              parfaitement ses produits. Nous sommes là pour vous accompagner dans vos choix et vous aider 
              à révéler votre style unique.
            </p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
              marginTop: "40px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "25px"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff69b4">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H2zm7 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <span style={{ fontWeight: "600", color: "#333" }}>Équipe</span>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "25px"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff69b4">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                <span style={{ fontWeight: "600", color: "#333" }}>Conseils</span>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "25px"
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff69b4">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span style={{ fontWeight: "600", color: "#333" }}>Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreBoutique;