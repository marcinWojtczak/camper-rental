import React from 'react';
import About from './pages/About'
import Home from './pages/Home';
import CampersList from './pages/CampersList';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/campers' element={<CampersList />}/>
      </Routes>
    </>
  );
}



export default App;
