import { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

//import CollapseNavLink from './CollapseNavLink';
import { selectMenuState, toggleMenu } from '../../redux/menuOpenSlice';


const Sidebar = () => {

  const [cookie, setCookie] = useCookies(['menuWide']);
  const { menuWide } = cookie;
  //const { menuOpen:toggled } = useSelector(state => state.menu);
  const toggled = useSelector(selectMenuState);

  const dispatch = useDispatch();

  useEffect(()=>{
    setCookie('menuWide', toggled, { path: '/' , sameSite:'lax'});
  },[toggled]);

  useLayoutEffect(() => {
    if(toggled !== undefined && `${toggled}` !== menuWide){
      dispatch(toggleMenu());
    }
  }, [menuWide]);


  return (
    <ul
      className={
        menuWide === 'false'
          ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
          : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      }
      id='accordionSidebar'
    >

      {/* <!-- Divider --> */}
      <hr className='sidebar-divider my-0' />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className='nav-item'>
        <Link className='nav-link' to='/risco'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Risco</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/tutorial'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Tutorial</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/sobre'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Sobre</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className='sidebar-divider' />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className='text-center d-none d-md-inline'>
        <button
          onClick={() => {
            dispatch(toggleMenu());
          }}
          className='rounded-circle border-0'
          id='sidebarToggle'
        ></button>
      </div>
    </ul>
  );
}

export default Sidebar;