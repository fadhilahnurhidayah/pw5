import { getAllCustomers } from '../../services/db-service';
import CustomerTable from '../../components/CustomerTable';

export default async function CustomersPage() {
  const customers = await getAllCustomers();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Customer List</h1>
      <CustomerTable customers={customers} />
    </div>
  );
}