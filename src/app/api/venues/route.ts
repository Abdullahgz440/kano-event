import { NextResponse } from 'next/server';

const MOCK_VENUES = [
  { id: '1', name: 'Afficent Event Centre', slug: 'afficent-event-centre', lga: 'Nasarawa', capacity: 2500, price: 300000, rating: 4.8, verified: true },
  { id: '2', name: 'Meena Event Centre', slug: 'meena-event-centre', lga: 'Kano Municipal', capacity: 1500, price: 250000, rating: 4.7, verified: true },
  { id: '3', name: 'Khalid Hall', slug: 'khalid-hall', lga: 'Tarauni', capacity: 800, price: 150000, rating: 4.5, verified: true },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const maxPrice = searchParams.get('maxPrice');
  const capacity = searchParams.get('capacity');

  let venues = [...MOCK_VENUES];
  if (maxPrice) venues = venues.filter(v => v.price <= parseInt(maxPrice));
  if (capacity) venues = venues.filter(v => v.capacity >= parseInt(capacity));

  return NextResponse.json(venues);
}
