import React from 'react';

const stats = [
  { label: 'Total Views', value: '12,842' },
  { label: 'Inquiries', value: '48' },
  { label: 'Booked Days', value: '14' },
  { label: 'Conv. Rate', value: '3.2%' },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, Operator.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-700">
          Add New Venue
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-black text-gray-900 mb-4">My Venues</h2>
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
          <div className="flex-1">
            <div className="font-bold text-gray-900">Afficent Event Centre</div>
            <div className="text-xs text-gray-500">Nasarawa LGA &bull; 2,500 Guests</div>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Verified</span>
        </div>
      </div>
    </div>
  );
}
