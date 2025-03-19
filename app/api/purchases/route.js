import { NextResponse } from 'next/server';
import { getAllPurchases } from '../../../services/db-service';

export async function GET() {
  try {
    const purchases = await getAllPurchases();
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error fetching purchases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch purchases' },
      { status: 500 }
    );
  }
}