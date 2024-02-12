import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <Router>
      <div>
        {/* 네비게이션 바 */}
        <header style={{ backgroundColor: 'orange', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>My Website</h1>
          <nav>
            <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
            <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
            <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
          </nav>
        </header>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* 헤더 섹션 */}
      <header style={{ backgroundColor: 'orange', color: 'white', padding: '20px' }}>
        <h1>Welcome to our website!</h1>
      </header>

      {/* 메인 배너 섹션 */}
      <section style={{ backgroundColor: 'darkorange', color: 'white', padding: '40px 0', textAlign: 'center' }}>
        <h2>Main Banner</h2>
        <p>This is the main message of your homepage</p>
      </section>

      {/* 서비스 섹션 */}
      <section style={{ padding: '20px' }}>
        <h2>Our Services</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h3>Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div>
            <h3>Service 2</h3>
            <p>Description of Service 2</p>
          </div>
          <div>
            <h3>Service 3</h3>
            <p>Description of Service 3</p>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h2>About Us</h2>
        <p>Some information about the company or website</p>
      </section>

      {/* 푸터 섹션 */}
      <footer style={{ backgroundColor: 'orange', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default App;
