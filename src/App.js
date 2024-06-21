// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path = "/" element = {<Home /> } />
      </Routes>
    </Router>
  );
};

export default App;