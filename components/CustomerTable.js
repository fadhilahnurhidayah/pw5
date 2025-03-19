export default function CustomerTable({ customers }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.customer_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.customer_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }