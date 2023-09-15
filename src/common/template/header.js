import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from '../../redux/menuWideSlice';
import './header.css'

const Header = () => {

  const showMobileMenu = useSelector((state) => state.menu.showMobileMenu);
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
        <div className='buttonMobileSidebarContainer'>
          <button
            className={
              showMobileMenu
                ? 'buttonMobileSidebar show'
                : 'buttonMobileSidebar'
            }
            type='button'
            onClick={() => {
              dispatch(toggleMobileMenu());
            }}
          ></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
