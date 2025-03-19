import { NextResponse } from 'next/server';
import { getPurchasesByDate } from '../../../../services/db-service';

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
    
    const purchases = await getPurchasesByDate(date);
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error fetching purchases by date:', error);
    return NextResponse.json(
      { error: 'Failed to fetch purchases' },
      { status: 500 }
    );
  }
}