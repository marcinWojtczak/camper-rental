import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Campers from './pages/Campers';
import CamperDetail from './pages/CamperDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import { Routes, Route } from 'react-router-dom';

import "./server"

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/campers' element={<Campers />} />
        <Route path='/campers/:id' element={<CamperDetail />} />
        <Route path='/host' element={<HostLayout />} >
          <Route path='/host' element={<Dashboard />} />
          <Route path='/host/income' element={<Income />} />
          <Route path='/host/reviews' element={<Reviews />} />
        </Route >
      </Route>
    </Routes>
  );
}



export default App;
