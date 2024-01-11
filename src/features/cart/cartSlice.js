import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../data/dummyData';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}, // array of cart items
  },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;

      const itemDetails = dummyData
        .flatMap(section => section.subsections.flatMap(subsection => subsection.items))
        .find(item => item.id === itemId);

      console.log('action:', action)
      console.log('state items:', state.items)
      if (state.items[itemId]) {
        // If the item already exists, increase its quantity
        state.items[itemId].quantity += 1;
      } else {
        // If the item doesn't exist, add it with quantity 1
        state.items[itemId] = { ...itemDetails, quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    quantityDownOne: (state, action) => {
      const { itemId } = action.payload; 
      if (state.items[itemId]) {
        state.items[itemId].quantity -= 1; 
      } else {
        console.error('Item does not even exist in the cart');
      }
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
