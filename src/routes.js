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
import SideBar from './common/template/sideBar';

const Page = ({ children }) => {
  return (
    <div className='wrapper'>
      <SideBar />
      {children}
    </div>
  );
};

const Routes = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route
        path='/'
        element={
          <Page>
            <Risco />
          </Page>
        }
      />
      <Route
        path='/tutorial'
        element={
          <Page>
            <Tutorial />
          </Page>
        }
      />
      <Route
        path='/sobre'
        element={
          <Page>
            <Sobre />
          </Page>
        }
      />      
      <Route
        path='/risco'
        element={
          <Page>
            <Risco />
          </Page>
        }
      />
      <Route
        path='*'
        element={
          <Page>
            <Sobre />
          </Page>
        }
      />
    </BrowserRoutes>
  </BrowserRouter>
);

export default Routes;
