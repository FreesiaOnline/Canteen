import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Header from './mg/Header';
import Footer from './mg/Footer'

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* 헤더 컴포넌트 사용 */}

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

      <Footer />
    </div>
  );
}

export default App;
