import Routes from './routes';

import Header from './common/template/header';
import SideBar from './common/template/sideBar';
import Footer from './common/template/footer';
//import Messages from './common/msg/messages';

import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const App = () => {
  const [cookie] = useCookies(['menuWideCookie']);
  const { menuWideCookie } = cookie;

  useEffect(()=>{
    document.getElementById('app_body').classList.toggle('sidebar-collapse');
    console.log(document.getElementById('app_body'));
  },[menuWideCookie]);

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
