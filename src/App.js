import React from 'react';
import About from './pages/About'
import Home from './pages/Home';
import Campers from './pages/Campers';
import CamperDetail from './pages/CamperDetail';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import "./server"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/campers' element={<Campers />}/>
        <Route path='/campers/:id' element={<CamperDetail />}/>
      </Routes>
    </>
  );
}



export default App;
