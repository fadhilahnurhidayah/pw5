export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Tugas 5 Fadhilah Nurhidayah</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Customer Data</h2>
            <p className="mb-4">Access and manage customer information.</p>
            <a href="/customers" className="text-blue-600 hover:underline">View All Customers →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
            <p className="mb-4">Browse and filter available products.</p>
            <a href="/products" className="text-blue-600 hover:underline">View All Products →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Purchase Records</h2>
            <p className="mb-4">Analyze transaction data with various filters.</p>
            <a href="/purchases" className="text-blue-600 hover:underline">View All Purchases →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Data Reports</h2>
            <p className="mb-4">View specialized reports and analytics.</p>
            <div className="flex flex-col space-y-2">
              <a href="/purchases/by-date" className="text-blue-600 hover:underline">Purchases by Date →</a>
              <a href="/purchases/by-customer" className="text-blue-600 hover:underline">Purchases by Customer →</a>
              <a href="/purchases/by-date" className="text-blue-600 hover:underline">Purchases by Date →</a>
              <a href="/purchases/by-date-customer" className="text-blue-600 hover:underline">Purchases by Date & Customer →</a>
            </div>
          </div>
        </div>
      </div>
    );
  }