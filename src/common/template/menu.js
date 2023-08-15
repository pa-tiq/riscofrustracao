import React from 'react';
import MenuItem from './menuItem';
import Logo from './logo';
import MenuTree from './menuTree';

// Constant to define the position of menu, in accord with id of table menu in database

const Menu = () => {
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
  return (
    <div>
      {<Logo logoName={cliente}></Logo>}

      <ul className='sidebar-menu'>
        <MenuItem path='#risco' label='Risco' icon='dashboard' />
        {/* <MenuItem path='#deducaorenda' label='Dedução de Imposto de Renda' icon='address-book' />  */}
        <MenuItem
          path='#tutorial'
          label='Tutorial'
          icon='caret-square-o-right'
        />
        <MenuItem path='#sobre' label='Sobre' icon='address-card' />
      </ul>

      <div className='logo'>
        <img src={require('../../imgs/wedan_vertical.png')} />
      </div>
    </div>
  );
};

export default Menu;
