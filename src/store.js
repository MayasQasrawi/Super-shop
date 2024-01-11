import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';


// import { createStore, combineReducers } from 'redux';
// import cartReducer from './reducers/cartReducer';


export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
});
