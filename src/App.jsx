import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';


const products = [
  { id: 1, name: 'สมาร์ทโฟน', price: 15000, image: './products-images/iphone.jpg' },
  { id: 2, name: 'แล็ปท็อป', price: 30000, image: './products-images/macbook.jpg' },
  { id: 3, name: 'หูฟังไร้สาย', price: 4500, image: './products-images/airpods.jpg' },
  { id: 4, name: 'สมาร์ทวอทช์', price: 8000, image: '/products-images/applewatch.jpg' },
  { id: 5, name: 'แท็บเล็ต', price: 12000, image: '/products-images/tablet.jpg' },
  { id: 6, name: 'กล้องดิจิตอล', price: 20000, image: '/products-images/camera.jpg' },
  { id: 7, name: 'เครื่องเล่นเกม', price: 15000, image: '/products-images/game.jpg' },
  { id: 8, name: 'ลำโพงบลูทูธ', price: 3000, image: '/products-images/speaker.jpg' },
  { id: 9, name: 'พาวเวอร์แบงค์', price: 1500, image: '/products-images/powerbank.jpg' },
  { id: 10, name: 'เมาส์ไร้สาย', price: 1000, image: '/products-images/mouse.jpg' },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');

  const Checkout = () => {
    if (cartItems.length > 0) {
      alert("สั่งซื้อสินค้าสำเร็จ!")
      setCartItems([])
    }else{
      alert("ไม่พบสินค้าที่เลือก")
    }
  }

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const applyCoupon = (code) => {
    setCouponCode(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">ช็อปปู้กุ๊กกู๋ส่งทั่วไทย</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductList products={products} addToCart={addToCart} />
          <ShoppingCart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            applyCoupon={applyCoupon}
            couponCode={couponCode}
            Checkout={Checkout}
          />
        </div>
      </div>
    </div>
  );
}
