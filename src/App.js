/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import './App.css';

function App() {
  //Using this technique to load an extatic script after page loading
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.setAttribute('src', '/js/active.js');
    document.head.appendChild(script1);
  }, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
