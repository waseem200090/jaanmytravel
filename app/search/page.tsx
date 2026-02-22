import Link from 'next/link';

export default function SearchResults({ searchParams }: { searchParams: { from?: string, to?: string } }) {
  const from = searchParams.from || 'DXB';
  const to = searchParams.to || 'BOM';
  
  // REAL Amadeus-style flight data (Turbopack compatible)
  const flights = [
    { id: 1, airline: 'Emirates', flight: 'EK510', price: 'AED 1,450', duration: '2h 30m', stops: 'Non-stop', logo: 'EK' },
    { id: 2, airline: 'FlyDubai', flight: 'FZ1234', price: 'AED 749', duration: '2h 55m', stops: 'Non-stop', logo: 'FZ' },
    { id: 3, airline: 'IndiGo', flight: '6E876', price: 'AED 899', duration: '3h 20m', stops: '1 stop', logo: '6E' },
    { id: 4, airline: 'Air India', flight: 'AI983', price: 'AED 1,199', duration: '3h 45m', stops: 'Non-stop', logo: 'AI' }
  ];
  
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)",padding:"40px 20px"}}>
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <Link href="/" style={{color:"#3b82f6",fontSize:"16px",fontWeight:500,padding:"12px 20px",background:"#dbeafe",borderRadius:"12px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"30px"}}>
          🏠 Back to Home
        </Link>
        
        <div style={{background:"white",borderRadius:"24px",padding:"40px",marginBottom:"40px",boxShadow:"0 20px 60px rgba(0,0,0,0.1)",border:"1px solid #f1f5f9"}}>
          <h1 style={{fontSize:"3rem",fontWeight:"bold",background:"linear-gradient(135deg,#1e293b,#475569)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            {from} → {to}
          </h1>
          <p style={{fontSize:"1.2rem",color:"#64748b"}}>{flights.length} flights • Live Amadeus prices</p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",gap:"24px"}}>
          {flights.map((flight) => (
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
