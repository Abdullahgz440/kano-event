import Hero from '@/components/Hero';
import { MapPin, Star, ShieldCheck } from 'lucide-react';

const FEATURED_VENUES = [
  { id: '1', name: 'Afficent Event Centre', lga: 'Nasarawa', capacity: 2500, price: '300,000', rating: 4.8, image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80', verified: true },
  { id: '2', name: 'Meena Event Centre', lga: 'Kano Municipal', capacity: 1500, price: '250,000', rating: 4.7, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80', verified: true },
  { id: '3', name: 'Bristol Palace Hall', lga: 'Tarauni', capacity: 800, price: '400,000', rating: 4.9, image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80', verified: true }
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Venues</h2>
            <p className="text-gray-500">The most trusted and premium event spaces in Kano.</p>
          </div>
          <button className="text-brand-600 font-bold hover:underline">View All Venues</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_VENUES.map((venue) => (
            <div key={venue.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {venue.verified && (
                  <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <ShieldCheck size={14} /> Verified
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-900">
                  {venue.price} / Day
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{venue.name}</h3>
                  <div className="flex items-center gap-1 text-orange-500 font-bold">
                    <Star size={16} fill="currentColor" /> {venue.rating}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {venue.lga}</span>
                  <span>Capacity: {venue.capacity}</span>
                </div>
                <button className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-xl hover:bg-brand-600 hover:text-white transition-colors">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-black text-brand-700 mb-2">150+</div><div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Total Venues</div></div>
            <div><div className="text-4xl font-black text-brand-700 mb-2">2,500+</div><div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Happy Customers</div></div>
            <div><div className="text-4xl font-black text-brand-700 mb-2">44</div><div className="text-gray-500 text-sm font-bold uppercase tracking-wider">LGAs Covered</div></div>
            <div><div className="text-4xl font-black text-brand-700 mb-2">100%</div><div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Verified Reviews</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
