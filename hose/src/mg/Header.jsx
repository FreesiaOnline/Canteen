import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    // 페이지의 다른 부분을 클릭했을 때 드롭다운을 닫는 이벤트 리스너
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item')) {
        setActiveMenu('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu, event) => {
    event.preventDefault();
    event.stopPropagation(); // 이벤트 버블링 방지
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const isMenuActive = (menu) => activeMenu === menu;

  return (
    <header style={headerStyle}>
      <Link to="/" style={freesiaStyle} onClick={(e) => e.preventDefault()}>Freesia</Link>
      <nav style={navStyle}>
        <div className="nav-item" style={navItemStyle} onClick={(e) => toggleMenu('wiki', e)}>
          <span style={linkStyle}>Wiki</span>
          {isMenuActive('wiki') && (
            <div style={dropdownStyle}>
              <Link to="/wiki/tutorials" style={dropdownItemStyle}>Tutorials</Link>
              <Link to="/wiki/guides" style={dropdownItemStyle}>Guides</Link>
              <Link to="/wiki/faq" style={dropdownItemStyle}>FAQ</Link>
            </div>
          )}
        </div>
        <div className="nav-item" style={navItemStyle} onClick={(e) => toggleMenu('community', e)}>
          <span style={linkStyle}>Community</span>
          {isMenuActive('community') && (
            <div style={dropdownStyle}>
              <Link to="/community/discord" style={dropdownItemStyle}>Discord</Link>
              <Link to="/community/forum" style={dropdownItemStyle}>Free Board</Link>
            </div>
          )}
        </div>
        <div className="nav-item" style={navItemStyle} onClick={(e) => toggleMenu('dashboard', e)}>
          <span style={linkStyle}>Dashboard</span>
          {isMenuActive('dashboard') && (
            <div style={dropdownStyle}>
              <Link to="/dashboard/server" style={dropdownItemStyle}>Server Dashboard</Link>
              <Link to="/dashboard/user" style={dropdownItemStyle}>User Dashboard</Link>
            </div>
          )}
        </div>
        <Link to="/map" style={linkStyle}>Map</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/login" style={{ ...linkStyle, marginRight: 0 }}>Login</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'orange',
  color: 'white',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
};

const navItemStyle = {
  position: 'relative', // 드롭다운 메뉴를 위한 포지셔닝 기준
  cursor: 'pointer',
};

const linkStyle = {
  color: 'white',
  marginRight: '30px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
};

const freesiaStyle = {
  ...linkStyle,
  marginRight: 'auto',
  fontSize: '24px', // "Freesia" 텍스트의 크기를 늘림
};

const dropdownStyle = {
  position: 'absolute',
  backgroundColor: '#f9f9f9',
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  marginTop: '5px', // 네비게이션 바와의 간격
};

const dropdownItemStyle = {
  color: 'black',
  padding: '12px 16px',
  textDecoration: 'none',
  display: 'block',
  whiteSpace: 'nowrap', // 드롭다운 항목의 텍스트가 한 줄로 표시되도록 설정
};

export default Header;
