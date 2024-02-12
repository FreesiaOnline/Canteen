import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      {/* "Freesia" 클릭 시 메인 페이지로 이동, 별도의 스타일 적용 */}
      <Link to="/" style={freesiaStyle}>Freesia</Link>

      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/wiki" style={linkStyle}>Wiki</Link>
        <Link to="/community" style={linkStyle}>Community</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
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

const linkStyle = {
  color: 'white',
  marginRight: '30px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
};

// `freesiaStyle`을 `linkStyle` 정의 뒤에 위치시키기
const freesiaStyle = {
  ...linkStyle,
  marginRight: 'auto',
  textDecoration: 'none',
  fontSize: '24px', // "Freesia" 텍스트의 크기를 늘림
};

export default Header;
