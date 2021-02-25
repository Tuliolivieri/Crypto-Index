import React from 'react';
import {Link} from 'react-router-dom';

import './styles/login.css';

function Login() {
    return (
        <div id="page-login">
            <div id="campos-login">
                <input id='username' type='text' />
                <input id='password' type='password' />
                <button id='btn-login' title='Login'/>
            </div>
        </div>
    );
}

export default Login;