import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import { CartProvider } from './Context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
