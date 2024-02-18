import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './resource/Header.css'; // CSS 파일 경로 확인 필요

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item')) {
        setActiveMenu('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (menu, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const isMenuActive = (menu) => activeMenu === menu;

  return (
    <header className="header">
      <Link to="/" className="link freesia">Freesia</Link>
      <nav className="nav">
        <div className="nav-item" onClick={(e) => toggleMenu('wiki', e)}>
          <span className="link">Wiki</span>
          {isMenuActive('wiki') && (
            <div className="dropdown">
              <Link to="/wiki/tutorials" className="dropdown-item">Tutorials</Link>
              <Link to="/wiki/guides" className="dropdown-item">Guides</Link>
              <Link to="/wiki/faq" className="dropdown-item">FAQ</Link>
            </div>
          )}
        </div>
        <div className="nav-item" onClick={(e) => toggleMenu('community', e)}>
          <span className="link">Community</span>
          {isMenuActive('community') && (
            <div className="dropdown">
              <Link to="/community/discord" className="dropdown-item">Discord</Link>
              <Link to="/community/forum" className="dropdown-item">Free Board</Link>
            </div>
          )}
        </div>
        <div className="nav-item" onClick={(e) => toggleMenu('dashboard', e)}>
          <span className="link">Dashboard</span>
          {isMenuActive('dashboard') && (
            <div className="dropdown">
              <Link to="/dashboard/server" className="dropdown-item">Server Dashboard</Link>
              <Link to="/dashboard/user" className="dropdown-item">User Dashboard</Link>
            </div>
          )}
        </div>
        <Link to="/map" className="link">Map</Link>
        <Link to="/profile" className="link">Profile</Link>
        <Link to="/login" className="link" style={{ marginRight: 0 }}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
