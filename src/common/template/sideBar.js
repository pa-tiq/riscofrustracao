import Menu from './menu';
import MenuMobile from './menuMobile';

const SideBar = () => {
  return (
    <>
      <aside className='main-sidebar'>
        <section className='sidebar'>
          <Menu />
        </section>
      </aside>
      <MenuMobile />
    </>
  );
};

export default SideBar;
