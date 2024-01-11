import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({ itemCount, onCartClick }) => {
  return (
    <button className="cart-button" onClick={onCartClick}>
      <FaShoppingCart />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </button>
  );
};

export default CartButton;
