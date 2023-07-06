import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Login from './components/Login';
import Signup from './components/Signup';
import Upload from './components/Upload';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
    <>
    <h1>Hello World</h1>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
