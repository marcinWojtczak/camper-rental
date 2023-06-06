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
import Campers, { loader as campersLoader } from './pages/Campers';
import CamperDetail from './pages/CamperDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import NotFound from './components/NotFound';
import Error from './components/Error';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout /> } errorElement={<Error />}>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route 
      path='campers' 
      element={<Campers />}
      loader={campersLoader}
    />
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
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
