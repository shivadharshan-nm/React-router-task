import React from 'react';
import { useCart } from '../Context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-sm font-bold mb-2">{product.title}</h3>
      <p className="text-gray-700 text-sm mb-4">${product.price.toFixed(2)}</p>
      {cartItem ? (
        <div className="flex items-center">
          <button
            onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
            className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-l"
          >
            −
          </button>
          <span className="px-4">{cartItem.quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
            className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-r"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
