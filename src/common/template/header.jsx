import React from 'react'
// import NavBar from './navbar'

export default props => (
    <header className='main-header'> 
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>S</b>R</span> 
            <span className='logo-lg'> <b> S</b>imulador</span> 
        </a> 
        <nav className='navbar navbar-static-top'> 
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a> 
        </nav> 
    </header>
)