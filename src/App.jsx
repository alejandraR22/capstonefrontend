import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import RecipePage from './RecipePage';
import Shop from './Shop';
import Login from './Login';
import Register from './Register';
import { CartProvider } from './CartContext'; 
import Cart from './Cart';

function App() {
  const recipesData = [
  ];

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipePage recipesData={recipesData} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

