import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { RiFileList3Fill } from 'react-icons/ri';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      {/* Page Header */}
      <div className="flex justify-center items-center py-4 bg-gray-100 shadow-md">
        <h1 className="text-2xl font-bold flex items-center">
          <RiFileList3Fill className="text-3xl mr-2 text-purple-600" />
          Products
        </h1>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
