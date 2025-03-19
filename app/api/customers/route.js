import { NextResponse } from 'next/server';
import { getAllCustomers } from '../../../services/db-service';

export async function GET() {
  try {
    const customers = await getAllCustomers();
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}