export default function VisaPage() {
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)",padding:"40px 20px"}}>
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <h1 style={{fontSize:"3.5rem",fontWeight:"bold",background:"linear-gradient(135deg,#1e293b,#475569)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"30px",textAlign:"center"}}>
          🛂 Instant Visa Services
        </h1>
        <p style={{fontSize:"1.3rem",color:"#64748b",textAlign:"center",marginBottom:"50px"}}>
          Dubai Processing • 24-72 Hours • Starting AED 99
        </p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",gap:"30px"}}>
          <div style={{background:"white",borderRadius:"24px",padding:"40px",boxShadow:"0 20px 60px rgba(0,0,0,0.1)"}}>
            <div style={{width:"80px",height:"80px",background:"linear-gradient(135deg,#059669,#10b981)",borderRadius:"20px",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",color:"white",fontWeight:"bold"}}>
              UAE
            </div>
            <h2 style={{fontSize:"28px",fontWeight:700,textAlign:"center",marginBottom:"16px"}}>UAE Visa</h2>
            <p style={{color:"#64748b",textAlign:"center",marginBottom:"30px"}}>30/60/90 days • Tourist/Business</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
              <span style={{fontSize:"32px",fontWeight:"bold",color:"#10b981"}}>AED 99</span>
              <span style={{color:"#94a3b8",textDecoration:"line-through"}}>AED 199</span>
            </div>
            <a href="https://wa.me/971501234567?text=I want UAE Visa AED 99" style={{display:"block",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",padding:"20px",borderRadius:"16px",textAlign:"center",fontWeight:600,fontSize:"18px",textDecoration:"none"}}>
              Apply Now → WhatsApp
            </a>
          </div>
          <div style={{background:"white",borderRadius:"24px",padding:"40px",boxShadow:"0 20px 60px rgba(0,0,0,0.1)"}}>
            <div style={{width:"80px",height:"80px",background:"linear-gradient(135deg,#ef4444,#dc2626)",borderRadius:"20px",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",color:"white",fontWeight:"bold"}}>
              IND
            </div>
            <h2 style={{fontSize:"28px",fontWeight:700,textAlign:"center",marginBottom:"16px"}}>India e-Visa</h2>
            <p style={{color:"#64748b",textAlign:"center",marginBottom:"30px"}}>30 days • Instant approval</p>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"30px"}}>
              <span style={{fontSize:"32px",fontWeight:"bold",color:"#10b981"}}>AED 149</span>
            </div>
            <a href="https://wa.me/971501234567?text=India eVisa AED 149" style={{display:"block",background:"linear-gradient(135deg,#ef4444,#dc2626)",color:"white",padding:"20px",borderRadius:"16px",textAlign:"center",fontWeight:600,fontSize:"18px",textDecoration:"none"}}>
              Apply Now → WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
