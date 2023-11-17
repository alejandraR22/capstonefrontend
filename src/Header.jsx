import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleExploreClick = () => {
    navigate('/recipes');
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/recipes?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="header" style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2em' }}>Welcome to Mexican Cuisine</h1>
      <p>Explore our delicious recipes</p>
      <button onClick={handleExploreClick} style={{ color: '#ffcc00', textDecoration: 'none' }}>
        Explore Recipes
      </button>

      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;

