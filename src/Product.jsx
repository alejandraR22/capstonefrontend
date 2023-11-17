import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
  const history = useHistory();

  const handleAddToCart = () => {
    history.push('/payment');
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
