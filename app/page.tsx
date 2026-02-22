"use client";  // ← ADD THIS FIRST LINE!

import React, { useState } from 'react';

export default function Home() {
  const [priceFilter, setPriceFilter] = useState('');

  const flights = [
    {id:1, name:'EK510 DXB→BOM', price:1299, airline:'Emirates'},
    {id:2, name:'EK512 DXB→BOM', price:1450, airline:'Emirates'},
    {id:3, name:'AI981 DXB→DEL', price:1399, airline:'Air India'},
    {id:4, name:'6E37 DXB→BLR', price:1199, airline:'IndiGo'},
    {id:5, name:'6E12 DXB→HYD', price:1249, airline:'IndiGo'},
    {id:6, name:'EK522 DXB→DEL', price:1520, airline:'Emirates'},
    {id:7, name:'IX414 DXB→COK', price:1099, airline:'Air India Express'},
    {id:8, name:'6E75 DXB→AMD', price:1320, airline:'IndiGo'},
    {id:9, name:'UK834 DXB→BLR', price:1410, airline:'Vistara'},
    {id:10, name:'AI913 DXB→HYD', price:1365, airline:'Air India'},
    {id:11, name:'EK586 DXB→COK', price:1480, airline:'Emirates'},
    {id:12, name:'6E26 DXB→DEL', price:1375, airline:'IndiGo'}
  ];

  // PRICE FILTER
  const filteredFlights = priceFilter 
    ? flights.filter(f => f.price <= parseInt(priceFilter))
    : flights;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        ✈️ JAAN MY TRAVEL
      </h1>

      {/* PRICE FILTER */}
      <div className="max-w-md mx-auto mb-12 bg-white p-6 rounded-2xl shadow-xl">
        <label className="block text-lg font-bold mb-4 text-gray-800">💰 Max Price:</label>
        <select 
          value={priceFilter} 
          onChange={(e) => setPriceFilter(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-xl text-xl font-bold focus:border-orange-500 focus:outline-none"
        >
          <option value="">All Prices ({flights.length} flights)</option>
          <option value="1200">Under AED 1,200 (1 flight) 💸</option>
          <option value="1300">Under AED 1,300 (4 flights) 💰</option>
          <option value="1400">Under AED 1,400 (7 flights) ⚖️</option>
        </select>
        <p className="mt-4 text-center text-green-600 font-bold text-lg">
          Showing <span className="text-2xl">{filteredFlights.length}</span> flights
        </p>
      </div>

      {/* FLIGHTS GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFlights.map((flight) => (
          <div key={flight.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100">
            <h3 className="font-bold text-xl mb-4 text-gray-900">{flight.name}</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">
              AED {flight.price}
            </div>
            <div className="text-sm text-gray-600 mb-6 px-3 py-2 bg-gray-50 rounded-xl">
              {flight.airline} ✈️ Direct Flight
            </div>
            <a 
              href={`https://wa.me/971561234567?text=Hi!%20Book%20${flight.name}%20AED${flight.price}`}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-center block hover:shadow-xl hover:from-green-600 transition-all"
              target="_blank"
            >
              💬 BOOK VIA WHATSAPP
            </a>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-center py-12 bg-gray-900 text-white rounded-t-3xl shadow-2xl">
        <h3 className="text-3xl font-bold mb-6">👑 JAAN WASIM KHAN</h3>
        <p className="text-xl mb-8">Al Rigga, Deira, Dubai | +971 56 123 4567 | waseem@jaanmytravel.com</p>
        <a href="https://wa.me/971561234567" className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-2xl font-bold text-xl inline-block shadow-xl transition-all">
          🚀 CONTACT NOW
        </a>
      </footer>
    </div>
  );
}
