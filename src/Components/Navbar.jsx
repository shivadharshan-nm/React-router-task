import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { IoCartOutline } from 'react-icons/io5';
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 bg-purple-600 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">
        <FaShopify /> Multi Store
        </Link>
        <Link
          to="/cart"
          className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm flex items-center"
        >
          <IoCartOutline className="text-lg mr-2" />
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
