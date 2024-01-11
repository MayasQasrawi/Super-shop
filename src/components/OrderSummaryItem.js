// src/components/OrderSummaryItem.js
import React from 'react';
// ... other imports if necessary

const OrderSummaryItem = ({ item }) => {
  return (
    <div className="order-summary-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">${item.price}</p>
        <p className="item-quantity">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
