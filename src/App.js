import Routes from './routes';

import Header from './common/template/header';
import SideBar from './common/template/sideBar';
import Footer from './common/template/footer';
//import Messages from './common/msg/messages';

import { useCookies } from 'react-cookie';
import { useLayoutEffect } from 'react';

const App = () => {
  const [cookie] = useCookies(['menuWideCookie']);
  const { menuWideCookie } = cookie;

  useLayoutEffect(() => {
    if (menuWideCookie === 'false')
      document.getElementById('app_body').classList.add('sidebar-collapse');
    else
      document.getElementById('app_body').classList.remove('sidebar-collapse');
  }, [menuWideCookie]);

  return (
    <div className='wrapper' data-cliente={'risco'}>
      <Header />
      <div className='content-wrapper'>
        <Routes />
      </div>
      <Footer />
      {/* <Messages /> */}
    </div>
  );
};

export default App;
