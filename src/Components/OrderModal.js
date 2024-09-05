import React from 'react';
import './OrderModalStyle.css';

function OrderModal({ isOpen, cartItems, total, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="check-icon">✔</span>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className="modal-body">
          {cartItems.map((item) => (
            <div key={item.id} className="modal-item">
              <img src={item.image.thumbnail} alt={item.name} />
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="modal-total">
            Order Total: ${total.toFixed(2)}
          </div>
        </div>
        <button className="modal-button" onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
}

export default OrderModal;
