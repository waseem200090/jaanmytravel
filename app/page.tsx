'use client'
import { useState } from 'react';

const travelData = [
  { id: 1, type: 'visa', name: 'UAE Visit Visa 30 Days', price: 99, days: '3-5', route: 'DXB', icon: '🛂' },
  { id: 2, type: 'visa', name: 'UAE Visit Visa 60 Days', price: 129, days: '4-7', route: 'DXB', icon: '🛂' },
  { id: 3, type: 'visa', name: 'UAE Visit Visa 90 Days', price: 149, days: '5-10', route: 'DXB', icon: '🛂' },
  { id: 4, type: 'flight', name: 'DXB → BOM EK510', price: 1450, days: 'Direct', route: 'DXB-BOM', icon: '✈️' },
  { id: 5, type: 'flight', name: 'DXB → DEL EK512', price: 1650, days: 'Direct', route: 'DXB-DEL', icon: '✈️' },
  { id: 6, type: 'flight', name: 'DXB → HYD EK538', price: 1550, days: 'Direct', route: 'DXB-HYD', icon: '✈️' },
  { id: 7, type: 'hotel', name: 'Burj Al Arab 1N', price: 4999, days: '5★', route: 'Downtown', icon: '🏨' },
  { id: 8, type: 'hotel', name: 'Atlantis 1N', price: 1299, days: '5★', route: 'Palm Jumeirah', icon: '🏨' },
  { id: 9, type: 'hotel', name: 'Rove Downtown', price: 399, days: '4★', route: 'Downtown', icon: '🏨' },
  { id: 10, type: 'package', name: 'Dubai 3D/2N + Visa', price: 1899, days: 'Complete', route: 'All Areas', icon: '✈️🛂🏨' }
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('visa');

  const filteredData = travelData.filter(item => 
    (priceFilter === 'all' || 
     (priceFilter === '<500' && item.price < 500) ||
     (priceFilter === '500-2000' && item.price >= 500 && item.price <= 2000) ||
     (priceFilter === '>2000' && item.price > 2000)) &&
    (searchTerm === '' || 
     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.route.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* MOBILE RESPONSIVE NAV */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ✈️ JAAN MY TRAVEL
            </h1>
            
            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-2">
              <a href="#home" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">🏠 Home</a>
              <a href="#visa" className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium">🛂 Visa</a>
              <a href="#flights" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">✈️ Flights</a>
              <a href="#hotels" className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium">🏨 Hotels</a>
              <a href="#location" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium">📍 Location</a>
              <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium">📞 Contact</a>
            </div>

            {/* MOBILE HAMBURGER */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-2xl p-2"
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="md:hidden bg-white/95 py-4 border-t border-gray-200 space-y-2">
              <a href="#home" className="block px-4 py-2 hover:bg-blue-50 rounded-lg">🏠 Home</a>
              <a href="#visa" className="block px-4 py-2 hover:bg-green-50 rounded-lg">🛂 Visa</a>
              <a href="#flights" className="block px-4 py-2 hover:bg-blue-50 rounded-lg">✈️ Flights</a>
              <a href="#hotels" className="block px-4 py-2 hover:bg-purple-50 rounded-lg">🏨 Hotels</a>
              <a href="#location" className="block px-4 py-2 hover:bg-indigo-50 rounded-lg">📍 Location</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-emerald-50 rounded-lg">📞 Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION WITH WORKING SEARCH */}
      <section id="home" className="py-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          JAAN MY TRAVEL
        </h1>
        <p className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
          UAE Visa • Emirates Flights • Luxury Hotels • Dubai Expert
        </p>
        
        {/* FULL SEARCH BAR */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <input 
              type="text" 
              placeholder="DXB → BOM / DEL / Visa" 
              className="p-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 outline-none col-span-2 md:col-span-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="p-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 outline-none">
              <option>DXB → BOM</option>
              <option>DXB → DEL</option>
              <option>DXB → HYD</option>
            </select>
            <select className="p-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 outline-none">
              <option>Any Date</option>
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
          </div>
          <button 
            onClick={() => alert('Searching WhatsApp: ' + searchTerm || 'DXB-BOM')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl text-xl font-bold hover:shadow-xl transition-all"
          >
            🔍 SEARCH NOW
          </button>
        </div>
      </section>

      {/* PRICE FILTERS + TABS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            💰 BEST DEALS - FILTER PRICES
          </h2>
          
          {/* FILTER CONTROLS */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
            <select 
              value={priceFilter} 
              onChange={(e) => setPriceFilter(e.target.value)}
              className="p-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 outline-none md:w-48"
            >
              <option value="all">All Prices</option>
              <option value="<500">🟢 Under AED 500</option>
              <option value="500-2000">🟡 AED 500-2000</option>
              <option value=">2000">🔴 Over AED 2000</option>
            </select>
            
            <div className="flex gap-2 bg-gray-100 p-2 rounded-xl">
              <button onClick={() => setActiveTab('visa')} className={`px-6 py-3 rounded-lg font-bold ${activeTab === 'visa' ? 'bg-green-600 text-white' : 'text-gray-700'}`}>🛂 Visa</button>
              <button onClick={() => setActiveTab('flight')} className={`px-6 py-3 rounded-lg font-bold ${activeTab === 'flight' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>✈️ Flights</button>
              <button onClick={() => setActiveTab('hotel')} className={`px-6 py-3 rounded-lg font-bold ${activeTab === 'hotel' ? 'bg-purple-600 text-white' : 'text-gray-700'}`}>🏨 Hotels</button>
            </div>
          </div>

          {/* FILTERED RESULTS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map(item => (
              <a key={item.id} href={`https://wa.me/971561234567?text=I want ${item.name}`} 
                 className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-green-300">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-xl text-gray-600 mb-4">{item.days} • {item.route}</p>
                <div className="text-3xl font-bold text-green-600 mb-6">AED {item.price.toLocaleString()}</div>
                <span className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-2xl font-bold text-center hover:bg-green-700 transition">
                  💬 WhatsApp Now →
                </span>
              </a>
            ))}
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No results found. Try different filters! 🔍</p>
            </div>
          )}
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
            📍 DEIRA, DUBAI LOCATION
          </h2>
          {/* Keep your existing location section */}
        </div>
      </section>

      {/* COMPLETE FOOTER */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-t from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">👑 JAAN WASIM KHAN</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            BCA Graduate → Dubai Travel King. Serving Indian/Pakistani community 
            with best UAE visa, Emirates flights, luxury hotels. WhatsApp 24/7!
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <a href="https://wa.me/971561234567" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg">
              💬 START WHATSAPP
            </a>
            <a href="tel:+971561234567" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg">
              📞 CALL NOW +971 56 123 4567
            </a>
          </div>
          <div className="text-lg opacity-90 border-t border-gray-700 pt-8">
            FULL COMPLETE MMT WEBSITE + PRICE FILTERS
            © 2026 Jaan My Travel | Deira, Dubai | <a href="mailto:waseem@jaanmytravel.com" className="hover:text-blue-400">waseem@jaanmytravel.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
