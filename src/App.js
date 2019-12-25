import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './components/Login';

import Profile from './components/Profile';
import Content from './layout/Content';
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  const [user, setUser] = useState({})
  return (
    <>
      <Router>

        <Header user={user} logedIn={user} setUser={setUser} />
        <Content setUser={setUser} user={user} />
        <Footer />
      </Router>

    </>
  )
}

export default App;
