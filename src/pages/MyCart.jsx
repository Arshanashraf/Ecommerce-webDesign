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
  const handleContinueShopping = () => {
    navigate("/products")
  }

  return (
    <div className='mx-20 2xs:mx-2 xs:mx-2 space-y-2 mt-3 mb-8'  id='/mycart'>
      <h2 className='text-xl font-semibold'>My Cart</h2>

      <div className="order-summary">
        <h3 className='font-semibold'>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p className='text-red-500'>No items in the cart</p>
        ) : (
          <div className='grid grid-cols-2 2xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 gap-2'>{
            cartItems.map((item) => (
              <div key={item.id} className="cart-item flex 2xs:flex-col gap-3 bg-white py-4 pl-4 pr-6  rounded-md shadow shadow-gray-300 border border-gray-300">
                <img src={item.image} alt={item.name} className="w-[150px] h-40" />
                <div>
                  <h1 className='font-bold text-xl'>{item.name}</h1>
                  <h1 className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste.  </h1>
                  <h2 className='text-red-500 font-bold text-xl'>${item.price}</h2>
                  <div className='flex justify-between flex-wrap'>
                  <div>
                    <label htmlFor={`quantity-${item.id}`}>Quantity: </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      className='w-16 bg-gray-100 border border-black rounded-md'
                      onChange={(e) => handleQuantityChange(e, item.id)}
                      min="1"
                    />
                  </div>
                  <h1>Total: ${(item.price * item.quantity).toFixed(2)}</h1>
                  </div>
  
                  <button
                  className='bg-red-500 text-white px-3 py-1 rounded-md font-semibold mt-2'
                  onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            ))
            }</div>
        )}
      </div>
      <div className='text-lg font-bold text-red-500 '>
        <span className='text-black'>Total Price:</span> ${totalPrice.toFixed(2)}
      </div>

      <div className=" bg-blue-500 rounded-md shadow-md shadow-blue-600  px-8 pt-4 pb-10 ">
        <h3 className='text-white font-bold text-xl'>Billing Information</h3>
        <form onSubmit={handleSubmit} >
          <div className='grid grid-cols-2 gap-5'>
          <div className=''>
            <label htmlFor="name" className='font-semibold text-white'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className='px-2 py-0.5 w-full rounded-sm'
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className='font-semibold text-white' htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className='px-2 py-0.5 w-full rounded-sm'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className='font-semibold text-white' htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className='px-2 py-0.5 w-full rounded-sm'
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className='font-semibold text-white' htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              className='px-2 py-0.5 w-full rounded-sm'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='space-y-2 mb-4'>
          <div>
            <label className='font-semibold text-white' htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className='px-2 py-0.5 ml-2 rounded-sm'
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div> 
            <label className='font-semibold text-white'>Payment Method</label>
            <select
              name="paymentMethod"
               className='px-2 py-0.5 ml-2 rounded-sm'
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
          </div>
          </div>
          <div className='flex flex-wrap '>
          <button type="submit" className='bg-green-600 hover:bg-green-700 hover:scale-105 shadow-sm shadow-green-700  text-lg text-white font-bold px-4 py-1.5 rounded-md mt-4'>Proceed to Payment</button>
          
          </div>

          
        </form>
        <button onClick={handleContinueShopping}  className='bg-blue-600 hover:bg-blue-800 hover:scale-105 shadow-sm shadow-green-700  text-lg text-white font-bold px-5 py-1.5 rounded-md mt-4'>Continue Shopping</button>
      </div>
    </div>
  );
};

export default MyCart;








{/* <div className="total-price">
        <strong>Total Price: </strong>
        <span>${totalPrice.toFixed(2)}</span>
      </div> */}