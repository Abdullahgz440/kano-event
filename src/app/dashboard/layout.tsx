import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-50">
          <div className="text-xl font-black text-brand-700 tracking-tight">
            KANO<span className="text-gray-900">EVENT</span>
            <div className="text-[10px] font-bold text-gray-400 -mt-1 uppercase tracking-widest">Operator Panel</div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-brand-600 bg-brand-50 rounded-xl font-bold">Overview</a>
          <a href="/dashboard/venues" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-brand-600 hover:bg-gray-50 rounded-xl font-semibold">My Venues</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-brand-600 hover:bg-gray-50 rounded-xl font-semibold">Availability</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-brand-600 hover:bg-gray-50 rounded-xl font-semibold">Inquiries</a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-brand-600 hover:bg-gray-50 rounded-xl font-semibold">Analytics</a>
        </nav>
        <div className="p-4 border-t border-gray-50 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-semibold">Logout</button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
