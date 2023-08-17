import { useEffect, useLayoutEffect, useState } from 'react';
import MenuItem from './menuItem';
import Logo from './logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/menuWideSlice';
import { useCookies } from 'react-cookie';

// Constant to define the position of menu, in accord with id of table menu in database

const Menu = () => {
  let cliente =
    window.location.pathname.split('/')[
      window.location.pathname.split('/').length - 2
    ];

  if (cliente.length < 1) {
    //cliente = 1 - regius / wti
    //cliente = 3 - equatorial
    //cliente = 4 - sarah
    //cliente = 5 - saneago
    cliente = 'risco';
  }

  const [cookie, setCookie] = useCookies(['menuWideCookie']);
  const { menuWideCookie } = cookie;
  const menuWide = useSelector((state) => state.menu.menuWide);
  const dispatch = useDispatch();

  useEffect(() => {
    setCookie('menuWideCookie', menuWide, { path: '/', sameSite: 'lax' });
  }, [menuWide]);

  let firstTime = true;
  useLayoutEffect(() => {
    if (
      menuWide &&
      `${menuWide}` !== menuWideCookie &&
      firstTime
    ) {
      dispatch(toggleMenu());
    }
    firstTime = false;
  }, [menuWideCookie]);

  return (
    <div>
      {<Logo logoName={cliente}></Logo>}

      <ul className='sidebar-menu'>
        <MenuItem path='/risco' label='Risco' icon='dashboard' />
        {/* <MenuItem path='#deducaorenda' label='Dedução de Imposto de Renda' icon='address-book' />  */}
        <MenuItem
          path='/tutorial'
          label='Tutorial'
          icon='caret-square-o-right'
        />
        <MenuItem path='/sobre' label='Sobre' icon='address-card' />
      </ul>

      <ul className='sidebar-menu'>
        <li
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          <a className='navbar navbar-static-top'>
            <i className={`fa fa-caret-square-o-right`}></i>
          </a>
        </li>
      </ul>

      <div className='logo'>
        <img src={require('../../assets/imgs/wedan_vertical.png')} />
      </div>
    </div>
  );
};

export default Menu;
