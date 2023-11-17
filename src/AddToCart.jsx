import React from 'react';
import { useCart } from './CartContext';

const AddToCart = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log('Adding to cart:', product);
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  
  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCart;
