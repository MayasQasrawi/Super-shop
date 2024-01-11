import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './styles/ItemList.css';

const ItemList = ({ items, onAddToCart }) => {

  if (!Array.isArray(items) || items.length === 0) {
    return <div className="item-list">No items available.</div>;
  }

  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} {...item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemList;
