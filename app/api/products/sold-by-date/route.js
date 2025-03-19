import { NextResponse } from 'next/server';
import { getProductsSoldByDate } from '../../../../services/db-service';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    
    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }
    
    const productsSold = await getProductsSoldByDate(date);
    return NextResponse.json(productsSold);
  } catch (error) {
    console.error('Error fetching products sold by date:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products sold' },
      { status: 500 }
    );
  }
}