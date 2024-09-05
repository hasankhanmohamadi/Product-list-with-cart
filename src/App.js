import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import OrderConfirmation from './Components/OrderConfirmtion.js'; // اصلاح نام فایل
import OrderModal from './Components/OrderModal.js'; // ایمپورت کامپوننت مودال

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // حالت برای کنترل نمایش مودال

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true); // باز کردن مودال
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // بستن مودال
  };

  return (
    <div className="App">
      <ProductList addToCart={addToCart} />
<Cart 
  cartItems={cartItems} 
  removeFromCart={removeFromCart} 
  onConfirmOrder={handleConfirmOrder} // اضافه کردن تابع به کامپوننت Cart
/>
      <OrderModal 
        isOpen={isModalOpen} 
        cartItems={cartItems} 
        total={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;
