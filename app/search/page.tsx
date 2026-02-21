export default function SearchResults() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </nav>
        
        {/* Results Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent mb-2">
                1,247 Flights Found
              </h1>
              <p className="text-gray-600">DXB to BOM • One way • 2 Adults</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700">Cheapest First</button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200">Fastest</button>
            </div>
          </div>
        </div>

        {/* Flight Cards - SHORT VERSION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">EK</div>
                <div>
                  <p className="font-semibold">Emirates</p>
                  <p className="text-xs text-gray-500">EK 510</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-emerald-600">AED 1,299</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
              <div className="text-center">
                <p className="font-semibold text-lg mb-1">DXB</p>
                <p className="text-xs">22:30</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm">2h 30m</p>
                <p className="text-xs text-blue-600 font-medium">Non-stop</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg mb-1">BOM</p>
                <p className="text-xs">03:30</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold hover:from-emerald-600">
              Select Flight
            </button>
          </div>
          
          {/* Add 2 more similar cards for demo */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">6E</div>
                <div>
                  <p className="font-semibold">IndiGo</p>
                  <p className="text-xs text-gray-500">6E 876</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">AED 899</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-600">
              Select Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
