'use client';

import { useEffect, useState } from 'react';
import ProductTable from '../../components/ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Fetch all products initially
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, []);
  
  // Handle price filter
  const handleFilterByPrice = async () => {
    try {
      setLoading(true);
      const min = minPrice || 0;
      const max = maxPrice || 1000000;
      
      const res = await fetch(`/api/products/by-price?min=${min}&max=${max}`);
      if (!res.ok) throw new Error('Failed to fetch products');
      
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
        Product Catalog
      </h1>
      
      <div className="mb-6 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Filter by Price
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-end">
          <div className="w-full sm:w-auto">
            <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-1">
              Min Price $
            </label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full sm:w-32 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
            />
          </div>
          
          <div className="w-full sm:w-auto">
            <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-1">
              Max Price $
            </label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full sm:w-32 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="1000"
            />
          </div>
          
          <div className="w-full sm:w-auto">
            <button
              onClick={handleFilterByPrice}
              className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white rounded-md hover:from-[#1e40af] hover:to-[#3b82f6] transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-lg text-gray-600 animate-pulse">
            Loading products...
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <div className="min-w-full">
            <ProductTable products={products} />
          </div>
        </div>
      )}
    </div>
  );
}