import React from 'react';
import './CartStyle.css'; 

function Cart({ cartItems, removeFromCart, onConfirmOrder }) { 
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image.thumbnail} alt={item.name} />
                <div className="cart-item-info">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <span className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={onConfirmOrder}>Confirm Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;
