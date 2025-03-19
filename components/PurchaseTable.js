export default function PurchaseTable({ purchases }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {purchases.map((purchase) => (
              <tr key={purchase.transaction_id}>
                <td className="px-6 py-4 whitespace-nowrap">{purchase.transaction_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{purchase.customer_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{purchase.product_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${Number(purchase.price).toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(purchase.purchase_date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }