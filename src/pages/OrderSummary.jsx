import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const { state } = useLocation();
  const { formData, cartItems } = state;
  const navigate = useNavigate()

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleContinueCart = () => {
    navigate("/mycart")
  }
  const handlePaymentConfirm = () => {
    alert("Congratulations! Your order has been placed successfully")
    navigate("/products")
  }

  return (
    <div className="mx-20 2xs:mx-2 xs:mx-2 space-y-2 mt-3 mb-8 bg-gray-50 px-4 py-4 rounded-md shadow-md shadow-gray-300">
      <h2 className='text-xl font-bold'>Order Summary</h2>

      <h3 className='text-lg font-bold text-blue-400'>Billing Information</h3>
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Postal Code:</strong> {formData.postalCode}</p>
        <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      </div>

      <h3 className='text-blue-400 font-bold text-lg'>Order Items</h3>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className='flex flex-wrap gap-2 justify-start'>{
          cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-md p-2 border border-gray-300 shadow-md shadow-gray-400">
              <img src={item.image} alt={item.name} className="w-[150px] h-40 rounded-md" />
              <div>
                <h1 className='font-bold'>{item.name}</h1>
                <h1 className='font-bold text-red-500'>${item.price}</h1>
                <div>
                  <h1>Quantity: {item.quantity}</h1>
                </div>
                <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))
          }</div>
      )}

      <h3 className=' font-semibold text-lg '>Total Price: <span className='text-red-500'>${totalPrice.toFixed(2)}</span></h3>
      <p></p>

      <div className='flex flex-wrap gap-2'>
      <button className='bg-green-500 shadow-sm shadow-green-800 px-[17px] py-2 text-white text-lg font-bold rounded-md hover:bg-green-700 hover:scale-105' onClick={handlePaymentConfirm}>Confirm Payment</button>
      <button className='bg-blue-500 shadow-sm shadow-blue-800 px-10 py-2 text-white text-lg font-bold rounded-md hover:bg-blue-700 hover:scale-105' onClick={handleContinueCart}>Back to cart</button>
      </div>
    </div>
  );
};

export default OrderSummary;
