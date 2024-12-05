import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const { state } = useLocation();
  const { formData, cartItems } = state;

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="order-summary-page">
      <h2>Order Summary</h2>

      <h3>Billing Information</h3>
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Postal Code:</strong> {formData.postalCode}</p>
        <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      </div>

      <h3>Order Items</h3>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <div>
                <span>Quantity: {item.quantity}</span>
              </div>
              <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))
      )}

      <h3>Total Price</h3>
      <p>${totalPrice.toFixed(2)}</p>

      <button>Confirm Payment</button>
    </div>
  );
};

export default OrderSummary;
