'use client';

import { useState, useEffect } from 'react';
import PurchaseTable from '../../../components/PurchaseTable';

export default function PurchasesByCustomerPage() {
  const [customerId, setCustomerId] = useState('');
  const [customers, setCustomers] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // Fetch customers for dropdown
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const res = await fetch('/api/customers');
        if (!res.ok) throw new Error('Failed to fetch customers');
        const data = await res.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error:', error);
        setMessage('Failed to load customers');
      }
    }
    
    fetchCustomers();
  }, []);
  
  const handleSearch = async () => {
    if (!customerId) {
      setMessage('Please select a customer');
      return;
    }
    
    try {
      setLoading(true);
      setMessage('');
      
      const res = await fetch(`/api/purchases/by-customer?customerId=${customerId}`);
      if (!res.ok) throw new Error('Failed to fetch purchases');
      
      const data = await res.json();
      setPurchases(data);
      
      if (data.length === 0) {
        setMessage('No purchases found for this customer');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Purchases by Customer</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Select Customer</label>
            <select
              id="customer"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a customer</option>
              {customers.map((customer) => (
                <option key={customer.customer_id} value={customer.customer_id}>
                  {customer.customer_name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </div>
      </div>
      
      {message && <p className="mb-4 text-red-600">{message}</p>}
      
      {purchases.length > 0 && <PurchaseTable purchases={purchases} />}
    </div>
  );
}