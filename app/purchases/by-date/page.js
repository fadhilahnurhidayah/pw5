'use client';

import { useState } from 'react';
import PurchaseTable from '../../../components/PurchaseTable';

export default function PurchasesByDatePage() {
  const [date, setDate] = useState('');
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleSearch = async () => {
    if (!date) {
      setMessage('Please select a date');
      return;
    }
    
    try {
      setLoading(true);
      setMessage('');
      
      const res = await fetch(`/api/purchases/by-date?date=${date}`);
      if (!res.ok) throw new Error('Failed to fetch purchases');
      
      const data = await res.json();
      setPurchases(data);
      
      if (data.length === 0) {
        setMessage('No purchases found for this date');
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
      <h1 className="text-2xl font-bold mb-6">Purchases by Date</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
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