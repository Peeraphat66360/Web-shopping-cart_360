import React from 'react';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
          <h3 className="text-xl font-bold mt-4">{product.name}</h3>
          <p className="text-gray-700">{product.price} บาท</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            เพิ่มไปยังตะกร้า
          </button>
        </div>
      ))}
    </div>
  );
}
