import React, { useState } from 'react';

export default function ShoppingCart({
  cartItems, removeFromCart, updateQuantity, applyCoupon, couponCode, Checkout
}) {
  const [couponInput, setCouponInput] = useState('');
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = couponCode === 'SAVE10' ? totalPrice * 0.1 : 0;
  const shippingFee = 100;
  const finalPrice = totalPrice - discount + shippingFee;

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      {cartItems.length === 0 && <p>ไม่มีสินค้าในตะกร้า</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <span>{item.name}</span>
          <div className="flex items-center">
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-12 text-center border rounded mr-2"
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              ลบ
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <input
          type="text"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          placeholder="รหัสคูปอง"
          className="border rounded px-2 py-1"
        />
        <button
          onClick={() => applyCoupon(couponInput)}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ใช้คูปอง
        </button>
      </div>
      {couponCode && <p className="mt-2">คูปองที่ใช้: {couponCode}</p>}
      <div className="mt-4">
        <p>ราคารวม: {totalPrice.toLocaleString()} บาท</p>
        <p>ส่วนลด: {discount.toLocaleString()} บาท</p>
        <p>ค่าขนส่ง: {shippingFee.toLocaleString()} บาท</p>
        <p className="font-bold">ราคาสุทธิ: {finalPrice.toLocaleString()} บาท</p>
      </div>

      <div onClick={() => {
        Checkout()
      }} className='w-[130px] h-[40px] bg-green-600 rounded-[8px] mt-[10px] flex justify-center items-center'>
        <p className='text-white'>สั่งซื้อ</p>
      </div>
    </div>
  );
}
