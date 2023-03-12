import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NaviBar, NaviBar2 } from './Components/Navibar';
import { Footer } from './Components/Footer';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';

import {Home} from './Home'
import {Users} from './Users'
import {About} from './About'

function App() {
  return (
    <>
    <Router>
    <NaviBar2 />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
