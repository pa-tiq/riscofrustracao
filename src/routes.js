import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from 'react-router-dom';
import 'react-router-dom';

// import { useEffect, useLayoutEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectMenuState, toggleMenu } from './redux/menuOpenSlice';
import { useCookies } from 'react-cookie';

//Pages
//import Risco from './pages/risco';
import Tutorial from './pages/tutorial';
import Sobre from './pages/sobre';
import SideBar from './common/template/sideBar';

const Page = ({children}) => {

  const [cookie] = useCookies(['menuWide']);
  const { menuWide } = cookie;

  return (
    <div
      className={
        menuWide === 'false'
          ? 'fixed sidebar-mini sidebar-collapse'
          : 'fixed sidebar-mini'
      }
    >
      <div className='wrapper'>
        <SideBar />
        {children}
      </div>
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
            <Sobre />
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
