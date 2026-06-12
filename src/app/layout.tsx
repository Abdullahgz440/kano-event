import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kano Event | Venue Discovery & Booking Marketplace',
  description: 'The leading digital marketplace for discovering and booking event venues in Kano State.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-black text-brand-700 tracking-tight">
              KANO<span className="text-gray-900">EVENT</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
              <a href="#" className="hover:text-brand-600">Browse Venues</a>
              <a href="#" className="hover:text-brand-600">List Your Venue</a>
              <a href="#" className="hover:text-brand-600">How it Works</a>
            </div>
            <div className="flex gap-4">
              <button className="text-sm font-bold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-lg">Sign In</button>
              <button className="text-sm font-bold bg-brand-600 text-white px-5 py-2 rounded-lg hover:bg-brand-700 shadow-lg shadow-brand-500/20">Sign Up</button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <div className="text-2xl font-black text-brand-500 mb-4">KANOEVENT</div>
              <p className="text-gray-400 text-sm">Empowering Kano's event industry through digital transformation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Popular LGAs</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Nasarawa</li>
                <li>Kano Municipal</li>
                <li>Tarauni</li>
                <li>Fagge</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Booking Guarantee</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>WhatsApp Support</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            2026 Kano Event. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
