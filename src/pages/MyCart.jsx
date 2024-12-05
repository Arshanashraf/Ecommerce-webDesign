import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeFromCart } from '../store/cartSlice'; // Assuming you have these actions

const MyCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'Credit Card', // default
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle quantity change in cart
  const handleQuantityChange = (e, itemId) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  // Handle remove item from cart
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to order summary page with formData and cartItems
    navigate('/order-summary', { state: { formData, cartItems } });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="order-summary">
        <h3>Order Summary</h3>
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
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    min="1"
                  />
                </div>
                <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>

                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        ${totalPrice.toFixed(2)}
      </div>

      <div className="user-info">
        <h3>Billing Information</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default MyCart;








{/* <div className="total-price">
        <strong>Total Price: </strong>
        <span>${totalPrice.toFixed(2)}</span>
      </div> */}