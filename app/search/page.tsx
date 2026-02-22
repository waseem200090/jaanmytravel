import Link from 'next/link';

export default function SearchResults({ searchParams }: { searchParams: { from?: string, to?: string } }) {
  const from = searchParams.from || 'DXB';
  const to = searchParams.to || 'BOM';
  
  const apiUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}/api/flights`
  : 'http://localhost:3000/api/flights';

const res = await fetch(`${apiUrl}?from=${from}&to=${to}`);
const flights = await res.json();
  
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)",padding:"40px 20px"}}>
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <Link href="/" style={{color:"#3b82f6",fontSize:"16px",fontWeight:500,padding:"12px 20px",background:"#dbeafe",borderRadius:"12px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"30px"}}>
          🏠 Back to Home
        </Link>
        
        <div style={{background:"white",borderRadius:"24px",padding:"40px",boxShadow:"0 20px 60px rgba(0,0,0,0.1)",marginBottom:"40px",border:"1px solid #f1f5f9"}}>
          <h1 style={{fontSize:"3rem",fontWeight:"bold",background:"linear-gradient(135deg,#1e293b,#475569)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"10px"}}>
            {from} → {to}
          </h1>
          <p style={{fontSize:"1.2rem",color:"#64748b"}}>
            {flights.length} flights found • Cheapest from Dubai
          </p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",gap:"24px"}}>
          {flights.map(flight => (
            <div key={flight.id} style={{background:"white",borderRadius:"24px",padding:"30px",boxShadow:"0 10px 40px rgba(0,0,0,0.08)",border:"1px solid #f1f5f9"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"}}>
                <div style={{display:"flex",gap:"16px",alignItems:"center"}}>
                  <div style={{width:"56px",height:"56px",background:"linear-gradient(135deg,#10b981,#059669)",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"white",fontSize:"18px"}}>
                    {flight.logo}
                  </div>
                  <div>
                    <p style={{fontSize:"18px",fontWeight:600,margin:0}}>{flight.airline} {flight.flight}</p>
                    <p style={{fontSize:"14px",color:"#64748b",margin:"4px 0 0 0"}}>{flight.stops} • {flight.duration}</p>
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                  <p style={{fontSize:"28px",fontWeight:"bold",color:"#10b981",margin:0}}>{flight.price}</p>
                </div>
              </div>
              
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 0",borderTop:"1px solid #f1f5f9"}}>
                <div style={{textAlign:"center"}}>
                  <p style={{fontSize:"20px",fontWeight:600,margin:0}}>{flight.from}</p>
                  <p style={{fontSize:"14px",color:"#64748b"}}>{flight.fromTime}</p>
                </div>
                <div style={{width:"80px",height:"2px",background:"linear-gradient(90deg,#10b981,#059669)"}}></div>
                <div style={{textAlign:"center"}}>
                  <p style={{fontSize:"20px",fontWeight:600,margin:0}}>{flight.to}</p>
                  <p style={{fontSize:"14px",color:"#64748b"}}>{flight.toTime}</p>
                </div>
              </div>
              
              <a href="#" style={{display:"block",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",padding:"16px 32px",borderRadius:"16px",textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none"}}>
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
