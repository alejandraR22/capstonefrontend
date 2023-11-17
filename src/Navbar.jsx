import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#333',
      padding: '10px',
    },
    ul: {
      padding: 0,
      margin: 0,
    },
    li: {
      display: 'inline-block',
      marginRight: '15px',
      listStyle: 'none', 
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.li}><Link to="/recipes" style={styles.link}>Recipes</Link></li>
        <li style={styles.li}><Link to="/shop" style={styles.link}>Shop</Link></li>
       <li style={styles.li}><Link to="/cart" style={styles.link}>Cart</Link></li>
        <li style={styles.li}><Link to="/login" style={styles.link}>Login</Link></li>
        <li style={styles.li}><Link to="/register" style={styles.link}>Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

