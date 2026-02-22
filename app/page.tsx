export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* HERO SECTION */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          JAAN MY TRAVEL
        </h1>
        <p className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
          UAE Visa • Emirates Flights • Luxury Hotels • Dubai Expert
        </p>
        {/* SEARCH BAR */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
          <input 
            type="text" 
            placeholder="DXB → BOM / DEL / Visa" 
            className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 outline-none"
          />
          <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all">
            SEARCH NOW
          </button>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <a href="#visa" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              🛂
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">UAE VISA</h3>
            <p className="text-lg text-gray-600 mb-6">AED 99-149 • 3-5 Days</p>
            <span className="text-3xl font-bold text-green-600">WhatsApp Now →</span>
          </a>
          <a href="#flights" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              ✈️
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">EK FLIGHTS</h3>
            <p className="text-lg text-gray-600 mb-6">DXB→BOM AED 1,450</p>
            <span className="text-3xl font-bold text-blue-600">Book Now →</span>
          </a>
          <a href="#hotels" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              🏨
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">HOTELS</h3>
            <p className="text-lg text-gray-600 mb-6">Burj Al Arab AED 4,999</p>
            <span className="text-3xl font-bold text-purple-600">Book Now →</span>
          </a>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
            📍 OUR LOCATION
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">🕌 DEIRA, DUBAI</h3>
                <div className="space-y-4 text-lg">
                  <p><span className="font-semibold">📍 Address:</span> Al Rigga, Deira, Dubai, UAE</p>
                  <p><span className="font-semibold">📱 Phone:</span> +971 56 123 4567</p>
                  <p><span className="font-semibold">✉️ Email:</span> waseem@jaanmytravel.com</p>
                  <p><span className="font-semibold">🕒 Hours:</span> 9AM - 10PM (Daily)</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <a href="https://wa.me/971561234567" className="group bg-green-600 text-white p-6 rounded-2xl text-center hover:shadow-xl transition-all">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-lg">WhatsApp</div>
                </a>
                <a href="tel:+971561234567" className="group bg-blue-600 text-white p-6 rounded-2xl text-center hover:shadow-xl transition-all">
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-bold text-lg">Call</div>
                </a>
                <a href="mailto:waseem@jaanmytravel.com" className="group bg-purple-600 text-white p-6 rounded-2xl text-center hover:shadow-xl transition-all">
                  <div className="text-3xl mb-2">✉️</div>
                  <div className="font-bold text-lg">Email</div>
                </a>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-6xl animate-pulse">🕌</div>
              <p className="absolute bottom-6 text-xl font-semibold text-center w-full px-4">
                Deira - Heart of Dubai Indian Community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            💼 OUR SERVICES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group">
              <div className="text-5xl mb-6">🛂</div>
              <h3 className="text-2xl font-bold mb-4">UAE Visit Visa</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 30/60/90 Days</li>
                <li>• AED 99-149 Only</li>
                <li>• 3-5 Days Processing</li>
              </ul>
              <a href="https://wa.me/971561234567" className="w-full bg-green-600 text-white py-4 px-6 rounded-2xl font-bold text-center block hover:bg-green-700 transition">
                GET VISA NOW
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group">
              <div className="text-5xl mb-6">✈️</div>
              <h3 className="text-2xl font-bold mb-4">Emirates Flights</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• DXB-BOM/DEL Direct</li>
                <li>• AED 1,299-1,450</li>
                <li>• EK510/512 Daily</li>
              </ul>
              <a href="https://wa.me/971561234567" className="w-full bg-blue-600 text-white py-4 px-6 rounded-2xl font-bold text-center block hover:bg-blue-700 transition">
                BOOK FLIGHT
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group">
              <div className="text-5xl mb-6">🏨</div>
              <h3 className="text-2xl font-bold mb-4">Luxury Hotels</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Burj Al Arab AED 4,999</li>
                <li>• Atlantis AED 1,299</li>
                <li>• 5★ Dubai Hotels</li>
              </ul>
              <a href="https://wa.me/971561234567" className="w-full bg-purple-600 text-white py-4 px-6 rounded-2xl font-bold text-center block hover:bg-purple-700 transition">
                BOOK HOTEL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + FOOTER */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">👑 ABOUT JAAN WASIM KHAN</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            BCA Graduate → Dubai Travel King. Serving Indian/Pakistani community 
            with best UAE visa, Emirates flights, luxury hotels. WhatsApp instant support!
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <a href="https://wa.me/971561234567" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg">
              💬 START WHATSAPP
            </a>
            <a href="tel:+971561234567" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg">
              📞 CALL NOW
            </a>
          </div>
          <div className="text-lg opacity-90">
            © 2026 Jaan My Travel | Deira, Dubai | waseem@jaanmytravel.com
          </div>
        </div>
      </section>
    </main>
  );
}

