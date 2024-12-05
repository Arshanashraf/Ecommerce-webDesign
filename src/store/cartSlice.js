import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],  // Load cart items from localStorage
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProductIndex = state.cartItems.findIndex(item => item.id === product.id);

      if (existingProductIndex >= 0) {
        state.cartItems[existingProductIndex].quantity += product.quantity;
      } else {
        state.cartItems.push(product);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const productIndex = state.cartItems.findIndex(item => item.id === id);
      if (productIndex >= 0) {
        state.cartItems[productIndex].quantity = quantity;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },clearCart(state) {
      state.cartItems = []; // This clears the cart
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
