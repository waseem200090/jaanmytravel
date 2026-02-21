export default function HotelsPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      padding: "40px 20px"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: "bold", 
            background: "linear-gradient(135deg, #1e293b, #475569)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            🏨 Luxury Hotels in Dubai
          </h1>
          <p style={{ fontSize: "1.3rem", color: "#64748b", marginTop: "10px" }}>
            5-Star stays from AED 299/night
          </p>
        </div>

        {/* Hotel Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px" }}>
          
          {/* Hotel 1 */}
          <div style={{ 
            background: "white", 
            borderRadius: "24px", 
            overflow: "hidden", 
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            border: "1px solid #f1f5f9"
          }}>
            <div style={{ height: "200px", background: "linear-gradient(45deg, #667eea, #764ba2)", position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                top: "20px", 
                right: "20px", 
                background: "#10b981", 
                color: "white", 
                padding: "8px 16px", 
                borderRadius: "20px", 
                fontSize: "14px", 
                fontWeight: 600 
              }}>
                4.9 ⭐
              </div>
            </div>
            <div style={{ padding: "30px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
                Burj Al Arab
              </h2>
              <p style={{ color: "#64748b", marginBottom: "20px" }}>
                Jumeirah Beach • 5 Star • Pool + Spa
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "28px", fontWeight: "bold", color: "#10b981" }}>
                  AED 1,299
                </span>
                <span style={{ color: "#94a3b8", textDecoration: "line-through", fontSize: "18px" }}>
                  AED 1,899
                </span>
              </div>
              <a href="#" style={{
                display: "block",
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                padding: "16px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: 600,
                textDecoration: "none"
              }}>
                Book Now →
              </a>
            </div>
          </div>

          {/* Hotel 2 */}
          <div style={{ 
            background: "white", 
            borderRadius: "24px", 
            overflow: "hidden", 
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            border: "1px solid #f1f5f9"
          }}>
            <div style={{ height: "200px", background: "linear-gradient(45deg, #f59e0b, #d97706)" }}></div>
            <div style={{ padding: "30px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
                Atlantis The Palm
              </h2>
              <p style={{ color: "#64748b", marginBottom: "20px" }}>
                Palm Jumeirah • Aquaventure Waterpark
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "28px", fontWeight: "bold", color: "#10b981" }}>
                  AED 899
                </span>
              </div>
              <a href="#" style={{
                display: "block",
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                padding: "16px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: 600,
                textDecoration: "none"
              }}>
                Book Now →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
