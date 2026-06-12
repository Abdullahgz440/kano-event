import React from 'react';
import { Search, Users, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Find the Perfect Venue in Kano</h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">The largest marketplace for event centres, halls, and gardens across Kano State.</p>
        <div className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-wrap md:flex-nowrap gap-4 items-end">
          <div className="w-full md:w-1/4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center gap-2"><Calendar size={16} /> Date</label>
            <input type="date" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          </div>
          <div className="w-full md:w-1/4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center gap-2"><Users size={16} /> Capacity</label>
            <input type="number" placeholder="Min. Guests" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          </div>
          <div className="w-full md:w-1/4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center gap-2"><span className="font-bold">N</span> Max Price</label>
            <input type="number" placeholder="Budget" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          </div>
          <button className="w-full md:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2">
            <Search size={20} /> Find Available
          </button>
        </div>
      </div>
    </section>
  );
}
