import MenuItem from './menuItem';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from '../../redux/menuWideSlice';
import './menuMobile.css';

// Constant to define the position of menu, in accord with id of table menu in database

const MenuMobile = () => {
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

  const showMobileMenu = useSelector((state) => state.menu.showMobileMenu);
  const dispatch = useDispatch();

  return (
    <aside
      className={
        showMobileMenu
          ? 'mobileSidebarContainer transformMobileSidebar'
          : 'mobileSidebarContainer transformMobileSidebar hideMobileSidebar'
      }
    >
      <section className='sidebar'>
        <div>
          {/* {<Logo logoName={cliente}></Logo>} */}
          <ul className='sidebar-menu'>
            <MenuItem
              path='/risco'
              label='Risco'
              icon='dashboard'
              onClick={() => {
                dispatch(toggleMobileMenu());
              }}
            />
            {/* <MenuItem path='#deducaorenda' label='Dedução de Imposto de Renda' icon='address-book' />  */}
            <MenuItem
              path='/tutorial'
              label='Tutorial'
              icon='caret-square-o-right'
              onClick={() => {
                dispatch(toggleMobileMenu());
              }}
            />
            <MenuItem
              path='/sobre'
              label='Sobre'
              icon='address-card'
              onClick={() => {
                dispatch(toggleMobileMenu());
              }}
            />
          </ul>
          <div className='logoMobile'>
            <img src={require('../../assets/imgs/wedan_vertical.png')} />
          </div>
        </div>
      </section>
    </aside>
  );
};

export default MenuMobile;
