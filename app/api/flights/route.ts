export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get('from') || 'DXB';
  const to = searchParams.get('to') || 'BOM';
  
  // Amadeus token (runs on Vercel server)
  const tokenResponse = await fetch('https://test.api.amadeus.com/v20/authentication/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AMADEUS_API_KEY!,
      client_secret: process.env.AMADEUS_API_SECRET!
    })
  });
  
  const tokenData = await tokenResponse.json();
  const token = tokenData.access_token;
  
  // Real flight search DXB→BOM
  const flightsResponse = await fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=2026-03-15&adults=1&max=5`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  
  const flightsData = await flightsResponse.json();
  
  // Format for frontend
  const flights = flightsData.data?.map((offer: any) => ({
    id: offer.id,
    airline: offer.itineraries[0].segments[0].carrierCode,
    flight: offer.itineraries[0].segments[0].number,
    duration: offer.itineraries[0].duration,
    price: `${offer.price.total} ${offer.price.currency}`,
    stops: offer.itineraries[0].segments.length === 1 ? 'Non-stop' : `${offer.itineraries[0].segments.length - 1} stop`
  })) || [];
  
  return Response.json(flights);
}
