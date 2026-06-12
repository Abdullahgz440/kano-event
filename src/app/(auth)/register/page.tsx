import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-xl w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <div className="text-2xl font-black text-brand-700 tracking-tight mb-2">
            KANO<span className="text-gray-900">EVENT</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Create your account</h2>
          <p className="text-gray-500 text-sm">Join the leading event venue marketplace in Kano</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Full Name</label>
            <input type="text" placeholder="Your full name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Email Address</label>
            <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Phone Number</label>
            <input type="text" placeholder="+234..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-500 uppercase mb-2 tracking-widest">Password</label>
            <input type="password" placeholder="password" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <button className="w-full py-4 bg-brand-600 text-white font-black rounded-xl">Create Account</button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Already have an account? <a href="/login" className="font-bold text-brand-600">Sign in</a></p>
        </div>
      </div>
    </div>
  );
}
