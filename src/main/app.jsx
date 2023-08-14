import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
import Routes from '../main/routes'

function getCliente(){

    let cliente = window.location.pathname.split('/')[window.location.pathname.split('/').length-2]
    if (cliente.length < 1) {
        //cliente = 1 - regius / wti 
        //cliente = 5 - prevsan
        cliente = "risco"
    }
    return cliente
}

export default props => (
    <div className='wrapper' data-cliente={getCliente()}>
        <Header />
        <SideBar user={props.user} />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        {/* <Messages /> */}
    </div>
)
