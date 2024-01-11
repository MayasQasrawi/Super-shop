// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import OrderSummaryItem from '../components/OrderSummaryItem';
import { useNavigate } from 'react-router-dom';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Initialize Firestore
// const db = getFirestore();

// Function to save the order to Firebase
// const saveOrder = async (orderDetails, cartItems) => {
//   try {
//     const docRef = await addDoc(collection(db, "orders"), {
//       ...orderDetails,
//       items: cartItems,
//       orderDate: new Date().toISOString() // Optionally add the order date
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return docRef.id; // Return the document ID for further use
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     throw e; // Throw the error to be handled in the calling function
//   }
// };

const CheckoutPage = ({ cart }) => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Save the order details to Firebase along with cart items
    //   const orderId = await saveOrder(orderDetails, cart);
    //   console.log("Order submitted with ID:", orderId);
      console.log("Order submitted with ID:");

      // Redirect or show success message
      navigate('/'); // Or to a 'Thank You' page
    } catch (error) {
      // Handle any errors here, such as displaying an alert to the user
      console.error("Failed to submit order:", error);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleBackClick}>Back to Shopping</button>

      <div>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <OrderSummaryItem key={item.id} item={item} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={orderDetails.name} onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="Phone" value={orderDetails.phone} onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Address" value={orderDetails.address} onChange={handleInputChange} />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: Object.values(state.cart.items)
});

export default connect(mapStateToProps)(CheckoutPage);
