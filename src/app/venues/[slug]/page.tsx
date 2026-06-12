import React from 'react';

const venue = {
  name: 'Afficent Event Centre',
  lga: 'Nasarawa',
  address: '74 Maganda Road, Bompai, Kano',
  capacity: 2500,
  price: 300000,
  rating: 4.8,
  description: 'Premium multi-purpose facility in Nasarawa LGA for weddings, conferences, and corporate events.',
  amenities: ['Ample Parking', 'Standby Generator', 'Air Conditioned', 'Security', 'VIP Lounge', 'Stage & Sound'],
  packages: [
    { name: 'Wedding Package', price: '300,000', details: 'Full day access, changing rooms, and cleaning.' },
    { name: 'Conference Package', price: '200,000', details: 'Morning to evening, sound system included.' },
  ],
  images: [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
  ]
};

export default function VenueDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-black text-gray-900 mb-2">{venue.name}</h1>
          <p className="text-gray-500 text-sm">{venue.address} &bull; {venue.lga} LGA</p>
          <div className="grid grid-cols-2 gap-4 mt-6 h-64">
            <img src={venue.images[0]} alt="Main" className="w-full h-full object-cover rounded-2xl" />
            <img src={venue.images[1]} alt="Interior" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">About this Venue</h2>
            <p className="text-gray-600">{venue.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div><span className="text-gray-500 text-sm">Capacity:</span> <strong>{venue.capacity}</strong></div>
              <div><span className="text-gray-500 text-sm">Starting from:</span> <strong>N{venue.price.toLocaleString()}</strong></div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 gap-3">
              {venue.amenities.map(a => <li key={a} className="flex items-center gap-2 text-gray-700"><span className="text-green-500">&#10003;</span>{a}</li>)}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Packages</h2>
            {venue.packages.map(pkg => (
              <div key={pkg.name} className="border border-gray-100 p-4 rounded-xl mb-3">
                <div className="flex justify-between"><strong>{pkg.name}</strong><span className="font-black text-brand-700">N{pkg.price}</span></div>
                <p className="text-sm text-gray-500 mt-1">{pkg.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-xl sticky top-28">
            <div className="text-3xl font-black mb-6">N{venue.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">/ event</span></div>
            <div className="space-y-4">
              <input type="date" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
              <textarea rows={3} placeholder="Describe your event..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
              <button className="w-full py-4 bg-brand-600 text-white font-black rounded-xl">Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
