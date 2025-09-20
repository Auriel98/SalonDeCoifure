export default function Contact() {
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
            Contactez-nous
          </h1>
          <p style={{
            fontSize: "1.3rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Une question, un conseil personnalisé ou envie de découvrir nos nouveautés ? 
            Notre équipe est là pour vous accompagner.
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start"
        }}>
          {/* Informations de contact centrées */}
          <div style={{ maxWidth: "600px", width: "100%" }}>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "30px",
              color: "#000",
              textAlign: "center"
            }}>
              Nos Coordonnées
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginBottom: "40px" }}>
              {[
                {
                  icon: "📍",
                  title: "Adresse",
                  content: "Grand Libreville"
                },
                {
                  icon: "📞",
                  title: "Téléphone",
                  content: "+241 074 912 636"
                },
                {
                  icon: "🕒",
                  title: "Horaires",
                  content: "Lun - Sam : 9h00 - 19h00"
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  padding: "25px",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "translateX(10px)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
                >
                  <div style={{
                    fontSize: "2rem",
                    minWidth: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: "#000"
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: "1rem",
                      color: "#666",
                      lineHeight: "1.5"
                    }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton WhatsApp */}
            <div style={{ textAlign: "center" }}>
              <a 
                href="https://wa.me/241074912636"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "18px 40px",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  boxShadow: "0 8px 25px rgba(37,211,102,0.3)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#128C7E";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(37,211,102,0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#25D366";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(37,211,102,0.3)";
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}