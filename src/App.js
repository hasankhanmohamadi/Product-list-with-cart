// App.js
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import OrderConfirmation from './Components/OrderConfirmtion.js';

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="App">
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {/* 
        برای نمایش OrderConfirmation
        می‌توانید از یک حالت (state) اضافه برای نمایش دادن یا ندادن این بخش استفاده کنید
      */}
    </div>
  );
}

export default App;
