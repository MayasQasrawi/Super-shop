// const initialState = {
//     items: {} // array of cart items
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const { itemId, quantity } = action.payload;
//         console.log('action.payload:', action.payload);
//         const existingItem = state.items[itemId];
        
//         return {
//           ...state,
//           items: {
//             ...state.items,
//             [itemId]: existingItem 
//               ? { ...existingItem, quantity: existingItem.quantity + quantity }
//               : { ...action.payload, quantity: 1 } // Assuming payload contains item details
//           }
//         };
  
//       // Add other case statements as needed (REMOVE_FROM_CART)
  
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  