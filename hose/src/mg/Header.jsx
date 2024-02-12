// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'orange', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>My Website</h1>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
        <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
        <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
