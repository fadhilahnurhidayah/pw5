import { NextResponse } from 'next/server';
import { getPurchasesByDateAndCustomerId } from '../../../../services/db-service';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const customerId = searchParams.get('customerId');
    
    if (!date || !customerId) {
      return NextResponse.json(
        { error: 'Date and customer ID parameters are required' },
        { status: 400 }
      );
    }
    
    const purchases = await getPurchasesByDateAndCustomerId(date, customerId);
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error fetching purchases by date and customer ID:', error);
    return NextResponse.json(
      { error: 'Failed to fetch purchases' },
      { status: 500 }
    );
  }
}