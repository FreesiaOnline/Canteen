import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 가져옵니다.
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/">
          {/* 기본 경로("/")에 대한 처리를 원하면 여기에 추가 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
