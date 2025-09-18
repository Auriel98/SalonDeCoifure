export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
      }}
    >
      {/* Hero Section avec zoom arrière */}
      <div
        className="hero-section"
        style={{
          backgroundImage: "url('/images/salon.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "'Dancing Script', cursive",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            marginBottom: "20px",
          }}
        >
          Bienvenue chez Coiff’Ella
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
          }}
        >
          Un lieu moderne et élégant pour sublimer vos coiffures et soins
          capillaires à Chevry-Cossigny.
        </p>
      </div>

      {/* Prestations Section */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "'Dancing Script', cursive",
            color: "#333",
            marginBottom: "40px",
            paddingBottom: "10px",
            borderBottom: "3px solid #555",
            display: "inline-block",
          }}
        >
          Nos Prestations
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              titre: "Homme",
              img: "/images/homme.png",
              texte: "Coupe classique, dégradé américain, barbe...",
            },
            {
              titre: "Femme",
              img: "/images/femme.jpg",
              texte: "Coupe, brushing, coloration, lissage...",
            },
            {
              titre: "Évènements",
              img: "/images/enfant.jpg",
              texte: "Coiffure mariage, soirée, shooting...",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "transform 0.3s",
                backgroundColor: "#f5f5f5",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item.img}
                alt={item.titre}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {item.titre}
                </h3>
                <p>{item.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Réalisations Section */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "'Dancing Script', cursive",
            color: "#333",
            marginBottom: "40px",
            paddingBottom: "10px",
            borderBottom: "3px solid #555",
            display: "inline-block",
          }}
        >
          Nos Réalisations
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "/images/real1.jpg",
            "/images/real2.jpg",
            "/images/real3.jpg",
            "/images/real4.jpg",
            "/images/real5.jpg",
            "/images/real6.jpg",
          ].map((img, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={img}
                alt={`Réalisation ${i + 1}`}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Actualités Section */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "'Dancing Script', cursive",
            color: "#333",
            marginBottom: "40px",
            paddingBottom: "10px",
            borderBottom: "3px solid #555",
            display: "inline-block",
          }}
        >
          Actualités
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              img: "/images/actu1.jpg",
              titre: "Nouveau service coloration",
              date: "12/09/2025",
              texte:
                "Découvrez notre nouveau service de coloration végétale.",
            },
            {
              img: "/images/actu2.jpg",
              titre: "Promo rentrée",
              date: "01/09/2025",
              texte:
                "Profitez de -20% sur toutes les prestations étudiants.",
            },
            {
              img: "/images/actu3.jpg",
              titre: "Extension du salon",
              date: "05/09/2025",
              texte:
                "Nous avons ouvert un nouvel espace pour vos rendez-vous.",
            },
            {
              img: "/images/actu4.jpg",
              titre: "Nouvelle équipe",
              date: "20/08/2025",
              texte:
                "Découvrez nos nouveaux coiffeurs experts qui rejoignent l’équipe.",
            },
          ].map((a, i) => (
            <div
              key={i}
              style={{
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
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={a.img}
                alt={a.titre}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div style={{ textAlign: "left" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {a.titre}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#888",
                    marginBottom: "10px",
                  }}
                >
                  {a.date}
                </p>
                <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{a.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "'Dancing Script', cursive",
            color: "#333",
            marginBottom: "40px",
            paddingBottom: "10px",
            borderBottom: "3px solid #555",
            display: "inline-block",
          }}
        >
          Contactez-nous
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 20px" }}>
          Prenez rendez-vous ou envoyez-nous un message, notre équipe se fera un
          plaisir de vous répondre.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "15px 30px",
            backgroundColor: "#4a4a4a",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#3a3a3a")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4a4a4a")
          }
        >
          Envoyer un message
        </a>
      </div>

      {/* Effet zoom arrière */}
      <style>{`
        .hero-section {
          background-size: 120%; /* zoom initial */
          animation: zoomOutBg 2s ease-out forwards;
        }

        @keyframes zoomOutBg {
          0% {
            background-size: 120%;
          }
          100% {
            background-size: 100%;
          }
        }
      `}</style>
    </div>
  );
}
