import { NextResponse } from 'next/server';
import { getProductsByPriceRange } from '../../../../services/db-service';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const minPrice = parseFloat(searchParams.get('min') || 0);
    const maxPrice = parseFloat(searchParams.get('max') || 1000000);
    
    const products = await getProductsByPriceRange(minPrice, maxPrice);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products by price:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}