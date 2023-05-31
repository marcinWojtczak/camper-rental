import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostCampers from './pages/Host/HostCampers';
import HostCamperDetail from './pages/Host/HostCamperDetail';
import HostCamperInfo from './pages/Host/HostCamperInfo';
import HostCamperPricing from './pages/Host/HostCamperPricing';
import HostCamperPhotos from './pages/Host/HostCamperPhotos';
import Campers from './pages/Campers';
import CamperDetail from './pages/CamperDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

import "./server"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='campers' element={<Campers />} />
        <Route path='campers/:id' element={<CamperDetail />} />
        <Route path='host' element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='campers' element={<HostCampers />} /> 
          <Route path='campers/:id' element={<HostCamperDetail />} >
            <Route index element={<HostCamperInfo />}/>
            <Route path='pricing' element={<HostCamperPricing />}/>
            <Route path='photos' element={<HostCamperPhotos />}/>
          </Route>
        </Route >
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  );
}



export default App;
