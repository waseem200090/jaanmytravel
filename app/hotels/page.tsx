export default function HotelsPage() {
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#92400e 0%,#d97706 50%,#f59e0b 100%)",padding:"40px 20px",color:"white"}}>
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <h1 style={{fontSize:"3.5rem",fontWeight:"bold",textAlign:"center",marginBottom:"20px"}}>🏨 Dubai Luxury Hotels</h1>
        <p style={{fontSize:"1.3rem",textAlign:"center",marginBottom:"50px"}}>Best Prices • Free Cancellation • DXB Location</p>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(450px,1fr))",gap:"30px"}}>
          
          {/* Burj Al Arab */}
          <div style={{background:"rgba(255,255,255,0.95)",borderRadius:"24px",padding:"40px",boxShadow:"0 25px 50px rgba(0,0,0,0.15)"}}>
            <img src="https://images.unsplash.com/photo-1571896349840-0d711bcbd46b?w=400&h=250&fit=crop" alt="Burj Al Arab" style={{width:"100%",height:"250px",objectFit:"cover",borderRadius:"16px",marginBottom:"20px"}}/>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"15px"}}>
              <div style={{width:"40px",height:"40px",background:"#f59e0b",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",fontWeight:"bold",color:"white"}}>
                5⭐
              </div>
              <h2 style={{fontSize:"26px",fontWeight:700,color:"#1e293b",margin:0}}>Burj Al Arab</h2>
            </div>
            <p style={{color:"#64748b",marginBottom:"25px"}}>Jumeirah Beach • Ocean View • 5 Nights</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
              <span style={{fontSize:"36px",fontWeight:"bold",color:"#059669"}}>AED 4,999</span>
              <span style={{color:"#94a3b8",textDecoration:"line-through",fontSize:"20px"}}>AED 7,500</span>
            </div>
            <a href="https://wa.me/971565669072?text=Burj Al Arab AED4999" style={{display:"block",background:"linear-gradient(135deg,#92400e,#d97706)",color:"white",padding:"20px",borderRadius:"16px",textAlign:"center",fontWeight:700,fontSize:"18px",textDecoration:"none"}}>
              Book Now → WhatsApp
            </a>
          </div>

          {/* Atlantis */}
          <div style={{background:"rgba(255,255,255,0.95)",borderRadius:"24px",padding:"40px",boxShadow:"0 25px 50px rgba(0,0,0,0.15)"}}>
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop" alt="Atlantis" style={{width:"100%",height:"250px",objectFit:"cover",borderRadius:"16px",marginBottom:"20px"}}/>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"15px"}}>
              <div style={{width:"40px",height:"40px",background:"#3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",fontWeight:"bold",color:"white"}}>
                5⭐
              </div>
              <h2 style={{fontSize:"26px",fontWeight:700,color:"#1e293b",margin:0}}>Atlantis The Palm</h2>
            </div>
            <p style={{color:"#64748b",marginBottom:"25px"}}>Palm Jumeirah • Aquaventure • 5 Nights</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
              <span style={{fontSize:"36px",fontWeight:"bold",color:"#059669"}}>AED 3,499</span>
              <span style={{color:"#94a3b8",textDecoration:"line-through",fontSize:"20px"}}>AED 5,200</span>
            </div>
            <a href="https://wa.me/971565669072?text=Atlantis AED3499" style={{display:"block",background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",color:"white",padding:"20px",borderRadius:"16px",textAlign:"center",fontWeight:700,fontSize:"18px",textDecoration:"none"}}>
              Book Now → WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
