import React from 'react' 
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import Risco from '../risco/risco'
import Tutorial from '../tutorial/tutorial'
import Sobre from '../sobre/sobre'


export default props => ( 
    <Router history={hashHistory}> 
        <Route path='/' component={Risco} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/sobre' component={Sobre} /> 
        <Redirect from='*' to='/' /> 
    </Router> 
)