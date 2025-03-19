import { NextResponse } from 'next/server';
import { getPurchasesByCustomerId } from '../../../../services/db-service';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const customerId = searchParams.get('customerId');
    
    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID parameter is required' },
        { status: 400 }
      );
    }
    
    const purchases = await getPurchasesByCustomerId(customerId);
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error fetching purchases by customer ID:', error);
    return NextResponse.json(
      { error: 'Failed to fetch purchases' },
      { status: 500 }
    );
  }
}