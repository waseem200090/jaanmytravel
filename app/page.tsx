export default function Home() {
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)",padding:"20px",color:"white"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",textAlign:"center"}}>
        <h1 style={{fontSize:"3rem",fontWeight:"bold",marginBottom:"20px"}}>✈️ Find Your Perfect Flight & Hotel</h1>
        <p style={{fontSize:"1.3rem",marginBottom:"40px"}}>Best prices from Dubai to everywhere 🏨</p>
        <div style={{display:"flex",justifyContent:"center",gap:"15px",marginBottom:"40px",flexWrap:"wrap"}}>
          <a href="/" style={{padding:"12px 24px",background:"rgba(255,255,255,0.3)",borderRadius:"12px",color:"white",textDecoration:"none",fontWeight:"500"}}>🏠 Home</a>
          <a href="/flights" style={{padding:"12px 24px",background:"rgba(255,255,255,0.3)",borderRadius:"12px",color:"white",textDecoration:"none",fontWeight:"500"}}>✈️ Flights</a>
          <a href="/hotels" style={{padding:"12px 24px",background:"rgba(255,255,255,0.3)",borderRadius:"12px",color:"white",textDecoration:"none",fontWeight:"500"}}>🏨 Hotels</a>
          <a href="/about" style={{padding:"12px 24px",background:"rgba(255,255,255,0.3)",borderRadius:"12px",color:"white",textDecoration:"none",fontWeight:"500"}}>ℹ️ About</a>
          <a href="/contact" style={{padding:"12px 24px",background:"rgba(255,255,255,0.3)",borderRadius:"12px",color:"white",textDecoration:"none",fontWeight:"500"}}>📞 Contact</a>
          <a href="/search?from=DXB&to=BOM" style={{padding:"12px 24px",background:"#10b981",borderRadius:"12px",color:"white",textDecoration:"none",fontWeight:"600"}}>🔍 Search</a>
        </div>
        <div style={{background:"rgba(255,255,255,0.95)",borderRadius:"24px",padding:"40px",maxWidth:"800px",margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr auto",gap:"20px",alignItems:"end"}}>
            <div><label style={{display:"block",fontWeight:"600",marginBottom:"8px"}}>From</label><input defaultValue="DXB" style={{width:"100%",padding:"16px",borderRadius:"12px",border:"2px solid #e5e7eb"}}/></div>
            <div><label style={{display:"block",fontWeight:"600",marginBottom:"8px"}}>To</label><input defaultValue="BOM" style={{width:"100%",padding:"16px",borderRadius:"12px",border:"2px solid #e5e7eb"}}/></div>
            <div><label style={{display:"block",fontWeight:"600",marginBottom:"8px"}}>Date</label><input type="date" style={{width:"100%",padding:"16px",borderRadius:"12px",border:"2px solid #e5e7eb"}}/></div>
            <a href="/search?from=DXB&to=BOM" style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"white",padding:"20px 40px",borderRadius:"16px",fontSize:"18px",fontWeight:"bold",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(16,185,129,0.4)"}}>🔍 Search Flights & Hotels</a>
          </div>
        </div>
      </div>
    </div>
  );
}
