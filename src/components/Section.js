import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import './styles/Section.css';

const Section = ({ title, items, onAddToCart }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <ItemList items={items} onAddToCart={onAddToCart} />
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // Ensure this matches the structure of your data
  onAddToCart: PropTypes.func.isRequired,
};

export default Section;
