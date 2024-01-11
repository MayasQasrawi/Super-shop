import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import CartButton from '../components/CartButton';
import { addToCart } from '../features/cart/cartSlice';



import dummyData from '../data/dummyData';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);
  const cartItems = useSelector(state => state.cart.items); // Access cart items from state

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const itemCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  
  return (
    <>
      <div className="section-buttons">
        {dummyData.map(section => (
          <button key={section.id} onClick={() => handleSectionClick(section)}>
            {section.title}
          </button>
        ))}
      </div>

      {selectedSection && (
        <>
          {/* <div className="subsection-buttons">
            {selectedSection.subsections.map(subsection => (
              <button key={subsection.id}>{subsection.title}</button>
            ))}
          </div> */}

          {selectedSection.subsections.map(subsection => (
            <Section 
              key={subsection.id} 
              title={subsection.title} 
              items={subsection.items} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </>
      )}

      <CartButton itemCount={itemCount} onCartClick={() => navigate('/checkout')} />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.items
// });

// const mapDispatchToProps = {
//   addToCart
// };

export default MainPage;