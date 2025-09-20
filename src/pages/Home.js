export default function Home() {
  return (
    <div style={{ 
      backgroundColor: "#f8f8f8", 
      minHeight: "100vh", 
      fontFamily: "'Poppins', sans-serif", 
      color: "#333" 
    }}>
      
      {/* Hero Section avec design moderne */}
      <div
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #000 0%, #2c2c2c 50%, #000 100%)",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Motifs décoratifs */}
        <div style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,105,180,0.1) 0%, transparent 70%)",
          top: "10%",
          right: "15%",
          animation: "float 6s ease-in-out infinite"
        }} />
        
        <div style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,105,180,0.08) 0%, transparent 70%)",
          bottom: "20%",
          left: "10%",
          animation: "float 8s ease-in-out infinite reverse"
        }} />

        <div style={{
          textAlign: "center",
          zIndex: 2,
          maxWidth: "800px",
          padding: "0 20px"
        }}>
          <h1 style={{
            fontSize: "4rem",
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            marginBottom: "20px",
            textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
            lineHeight: "1.2"
          }}>
            Style & Élégance
          </h1>
          <h2 style={{
            fontSize: "2.2rem",
            color: "#ff69b4",
            fontWeight: "300",
            marginBottom: "30px",
            fontStyle: "italic"
          }}>
            Un peu de tout à petit prix
          </h2>
          <p style={{
            fontSize: "1.3rem",
            color: "#ccc",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6"
          }}>
            Découvrez notre collection exclusive de vêtements, accessoires, parfums et bien plus encore. 
            La mode accessible à tous, sans compromis sur la qualité.
          </p>
          <button style={{
            padding: "18px 40px",
            backgroundColor: "#ff69b4",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 8px 25px rgba(255,105,180,0.3)"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#ff1493";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 12px 35px rgba(255,105,180,0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#ff69b4";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,105,180,0.3)";
          }}
          >
            Découvrir nos collections
          </button>
        </div>
      </div>

      {/* Section Categories avec nouveau layout */}
      <div style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: "3rem",
            fontFamily: "'Playfair Display', serif",
            color: "#000",
            marginBottom: "20px"
          }}>
            Nos Univers
          </h2>
          <p style={{
            fontSize: "1.2rem",
            color: "#666",
            marginBottom: "60px",
            maxWidth: "600px",
            margin: "0 auto 60px"
          }}>
            Explorez nos différentes collections pensées pour sublimer votre style au quotidien
          </p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "40px"
          }}>
            {[
              { 
                titre: "Vêtements", 
                img: "/images/caco.jpg", 
                description: "Robes, tops, pantalons et plus encore pour un look parfait",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3 3h4v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5h4l3-3zm0 2.5L10.5 6H6v13h12V6h-4.5L12 4.5z"/>
                    <path d="M8 8v2h8V8H8zm0 4v2h8v-2H8z"/>
                  </svg>
                )
              },
              { 
                titre: "Accessoires", 
                img: "/images/sac.jpg", 
                description: "Sacs, bijoux, montres et accessoires tendance",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM12 4c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
                  </svg>
                )
              },
              { 
                titre: "Parfums & Beauté", 
                img: "/images/pif.jpg", 
                description: "Fragrances envoûtantes et produits de beauté",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    <circle cx="12" cy="9" r="1"/>
                  </svg>
                )
              },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: "#000",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                height: "450px", // Augmenté de 400px à 450px
                cursor: "pointer",
                transition: "all 0.4s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
              >
                <img 
                  src={item.img} 
                  alt={item.titre} 
                  style={{ 
                    width: "100%", 
                    height: "55%", // Réduit de 60% à 55%
                    objectFit: "cover",
                    filter: "brightness(0.8)"
                  }} 
                />
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  color: "#fff",
                  background: "rgba(255,105,180,0.9)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {item.icon}
                </div>
                <div style={{ 
                  padding: "30px 25px", // Augmenté le padding
                  color: "#fff",
                  height: "45%", // Augmenté de 40% à 45%
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <h3 style={{ 
                    fontSize: "1.6rem", 
                    fontWeight: "700", 
                    marginBottom: "12px",
                    color: "#ff69b4"
                  }}>
                    {item.titre}
                  </h3>
                  <p style={{ 
                    fontSize: "1rem", 
                    lineHeight: "1.5",
                    color: "#ccc"
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Produits Phares avec mise en page asymétrique */}
      <div style={{ 
        padding: "80px 20px", 
        background: "linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%)" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontFamily: "'Playfair Display', serif",
            color: "#000",
            marginBottom: "60px",
            textAlign: "center"
          }}>
            Coups de Cœur
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px"
          }}>
            {[
              "/images/real1.jpg",
              "/images/real7.jpg",
              "/images/real3.jpg",
              "/images/real4.jpg",
              "/images/real5.jpg",
              "/images/real6.jpg",
            ].map((img, i) => (
              <div key={i} style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: i % 3 === 0 ? "350px" : "280px", // Hauteurs variées
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
              }}
              >
                <img 
                  src={img} 
                  alt={`Produit ${i + 1}`} 
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
                  padding: "20px",
                  color: "#fff"
                }}>
                  <div style={{
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    display: "inline-block",
                    textTransform: "uppercase"
                  }}>
                    Nouveauté
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section CTA finale */}
      <div style={{ 
        padding: "80px 20px", 
        backgroundColor: "#000",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "2.8rem",
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            marginBottom: "25px"
          }}>
            Votre Style, Notre Passion
          </h2>
          <p style={{
            fontSize: "1.3rem",
            color: "#ccc",
            marginBottom: "40px",
            lineHeight: "1.6"
          }}>
            Visitez notre boutique et laissez-vous séduire par notre sélection unique. 
            Des pièces soigneusement choisies pour révéler votre personnalité.
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/images/bijoux.jpg') center/cover;
          opacity: 0.1;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}