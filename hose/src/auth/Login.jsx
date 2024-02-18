import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 import 합니다.
import './Login.css'; // CSS 파일을 import 합니다.

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <h1>Welcome {username}!</h1>;
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Freesia Online</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="button">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* 회원가입 링크 추가 */}
      </div>
    </div>
  );
}

export default Login;
