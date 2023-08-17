import Routes from './routes';

import Header from './common/template/header';
import SideBar from './common/template/sideBar';
import Footer from './common/template/footer';
//import Messages from './common/msg/messages';

import { useCookies } from 'react-cookie';

const App = () => {
  const [cookie] = useCookies(['menuWideCookie']);
  const { menuWideCookie } = cookie;

  return (
    <div
      className={
        menuWideCookie === 'false'
          ? 'fixed sidebar-mini sidebar-collapse'
          : 'fixed sidebar-mini'
      }
    >
      <div className='wrapper' data-cliente={'risco'}>
        <Header />
        <div className='content-wrapper'>
          <Routes />
        </div>
        <Footer />
        {/* <Messages /> */}
      </div>
    </div>
  );
};

export default App;
