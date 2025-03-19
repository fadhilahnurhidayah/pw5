import { getAllPurchases } from '../../services/db-service';
import PurchaseTable from '../../components/PurchaseTable';
import Link from 'next/link';

export default async function PurchasesPage() {
  const purchases = await getAllPurchases();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">All Purchases</h1>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <Link href="/purchases/by-date" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Filter by Date
        </Link>
        <Link href="/purchases/by-customer" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Filter by Customer
        </Link>
        <Link href="/purchases/by-date-customer" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Filter by Date & Customer
        </Link>
      </div>
      
      <PurchaseTable purchases={purchases} />
    </div>
  );
}