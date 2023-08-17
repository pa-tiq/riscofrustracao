import { useEffect, useLayoutEffect } from 'react';
import MenuItem from './menuItem';
import Logo from './logo';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuState, toggleMenu } from '../../redux/menuOpenSlice';
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

  const [cookie, setCookie] = useCookies(['menuWide']);
  const { menuWide } = cookie;
  const toggled = useSelector(selectMenuState);

  const dispatch = useDispatch();

  useEffect(() => {
    setCookie('menuWide', toggled, { path: '/', sameSite: 'lax' });
  }, [toggled]);

  useLayoutEffect(() => {
    if (toggled !== undefined && `${toggled}` !== menuWide) {
      dispatch(toggleMenu());
    }
  }, [menuWide]);

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

      <div className='text-center d-none d-md-inline'>
        <button
          onClick={() => {
            dispatch(toggleMenu());
          }}
          className='sidebar-toggle rounded-circle border-0'
          data-toggle='offcanvas'
          id='sidebarToggle'
        ></button>
      </div>

      <div className='logo'>
        <img src={require('../../assets/imgs/wedan_vertical.png')} />
      </div>
    </div>
  );
};

export default Menu;
