import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from 'react-router-dom';
import 'react-router-dom';

//Pages
import Risco from './pages/risco';
import Tutorial from './pages/tutorial';
import Sobre from './pages/sobre';

const Routes = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route path='/' element={<Risco />} />
      <Route path='/signup' element={<Tutorial />} />
      <Route path='/cards' element={<Sobre />} />
      <Route path='*' element={<Risco />} />
    </BrowserRoutes>
  </BrowserRouter>
);

export default Routes;
