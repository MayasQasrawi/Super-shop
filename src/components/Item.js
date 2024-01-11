import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.css';

const Item = ({ id, name, price, image, onAddToCart, updateQuantity }) => {
  return (
    <div className="item-card" key={id}>
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price.toFixed(2)}</p>
        <button className="item-add-button" onClick={() => onAddToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

export default Item;
