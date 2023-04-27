import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NaviBar } from './Components/Navibar';
import { Footer } from './Components/Footer';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';

import {Home} from './Home'

function App() {
  return (
    <>
    <Router>
    <NaviBar />
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
