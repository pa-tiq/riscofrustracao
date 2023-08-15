import Routes from './routes';

import Header from './common/template/header';
import SideBar from './common/template/sideBar';
import Footer from './common/template/footer';
import Messages from './common/msg/messages';

const App = () => (
  <div className='wrapper' data-cliente={"cliente-teste"}>
    <Header />
    <SideBar user={"usuario-teste"} />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
    {/* <Messages /> */}
  </div>
);

export default App;
