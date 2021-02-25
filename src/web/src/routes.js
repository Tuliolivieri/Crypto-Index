import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Atualizar from './pages/Atualizar';

function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/atualizar' component={Atualizar} />
        </BrowserRouter>
    );
}

export default Routes;