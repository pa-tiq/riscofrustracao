const Logo = ({ logoName }) => {
  return (
    <div className='logo'>
      {
        {
          regius: <img src={require('../../assets/imgs/logo_regius.png')} />, //regius
          wedan: <img src={require('../../assets/imgs/wedan.jpg')} />, //wti
          prevsan: <img src={require('../../assets/imgs/logo_prevsan.png')} />, //previsan
          risco: <img src={require('../../assets/imgs/eletronico.png')} alt="AI Icon by Darius Dan" />, //risco
        }[logoName]
      }
    </div>
  );
};

export default Logo;
