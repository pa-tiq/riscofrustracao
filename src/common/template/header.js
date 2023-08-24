import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, wideMenu, narrowMenu } from '../../redux/menuWideSlice';
import './header.css'

const Header = () => {

  const menuWide = useSelector((state) => state.menu.menuWide);
  const dispatch = useDispatch();

  return (
    <header className='main-header'>
      <a href='/#/' className='logo'>
        <span className='logo-mini'>
          <b>S</b>R
        </span>
        <span className='logo-lg'>
          <b> S</b>imulador
        </span>
      </a>

      <nav className='navbar navbar-static-top'>
        <div>
          <button
            id='headerSidebarToggle'
            className={
              menuWide ? 'buttonHeaderSidebarCollapse show' : 'buttonHeaderSidebarCollapse'
            }
            type='button'
            onClick={() => {
              dispatch(toggleMenu());
            }}
          ></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
