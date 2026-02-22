export default function FlightsPage() {
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%)",padding:"40px 20px",color:"white"}}>
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <h1 style={{fontSize:"3.5rem",fontWeight:"bold",textAlign:"center",marginBottom:"20px"}}>✈️ Emirates Flights</h1>
        <p style={{fontSize:"1.3rem",textAlign:"center",marginBottom:"50px"}}>DXB Departures • Best Prices • Instant Booking</p>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:"30px"}}>
          
          {/* EK510 DXB-BOM */}
          <div style={{background:"rgba(255,255,255,0.95)",borderRadius:"24px",padding:"40px",boxShadow:"0 25px 50px rgba(0,0,0,0.15)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px"}}>
              <div style={{width:"60px",height:"60px",background:"#d97706",borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"20px",color:"white"}}>
                EK510
              </div>
              <div>
                <h2 style={{fontSize:"24px",fontWeight:700,color:"#1e293b"}}>Dubai (DXB) → Mumbai (BOM)</h2>
                <p style={{color:"#64748b",margin:0}}>04h 30m • Direct • Daily 08:30</p>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
              <span style={{fontSize:"36px",fontWeight:"bold",color:"#059669"}}>AED 1,450</span>
              <span style={{color:"#94a3b8",textDecoration:"line-through",fontSize:"20px"}}>AED 2,100</span>
            </div>
            <a href="https://wa.me/971501234567?text=EK510 DXB-BOM AED1450" style={{display:"block",background:"linear-gradient(135deg,#059669,#10b981)",color:"white",padding:"20px",borderRadius:"16px",textAlign:"center",fontWeight:700,fontSize:"18px",textDecoration:"none"}}>
              Book Now → WhatsApp
            </a>
          </div>

          {/* EK512 DXB-DEL */}
          <div style={{background:"rgba(255,255,255,0.95)",borderRadius:"24px",padding:"40px",boxShadow:"0 25px 50px rgba(0,0,0,0.15)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"15px",marginBottom:"20px"}}>
              <div style={{width:"60px",height:"60px",background:"#dc2626",borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"20px",color:"white"}}>
                EK512
              </div>
              <div>
                <h2 style={{fontSize:"24px",fontWeight:700,color:"#1e293b"}}>Dubai (DXB) → Delhi (DEL)</h2>
                <p style={{color:"#64748b",margin:0}}>04h 10m • Direct • Daily 14:45</p>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
              <span style={{fontSize:"36px",fontWeight:"bold",color:"#059669"}}>AED 1,299</span>
              <span style={{color:"#94a3b8",textDecoration:"line-through",fontSize:"20px"}}>AED 1,850</span>
            </div>
            <a href="https://wa.me/971501234567?text=EK512 DXB-DEL AED1299" style={{display:"block",background:"linear-gradient(135deg,#dc2626,#ef4444)",color:"white",padding:"20px",borderRadius:"16px",textAlign:"center",fontWeight:700,fontSize:"18px",textDecoration:"none"}}>
              Book Now → WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
