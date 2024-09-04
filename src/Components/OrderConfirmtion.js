import React from 'react';
import './OrderConfirmationStyle.css';

function OrderConfirmation({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="order-confirmation">
      <h1>Order Confirmed</h1> {/* اصلاح تگ عنوان به h1 مطابق CSS */}
      <p>We hope you enjoy your food!</p>
      
      <div className="order-summary"> {/* اضافه کردن کلاس CSS برای خلاصه سفارش */}
        {cartItems.map((item) => (
          <div key={item.id} className="order-summary-item"> {/* اضافه کردن کلاس برای هر آیتم */}
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-summary-total"> {/* اضافه کردن کلاس برای نمایش مجموع کل */}
          Order Total: ${total.toFixed(2)}
        </div>
      </div>

      <button>Start New Order</button>
    </div>
  );
}

export default OrderConfirmation;
