import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../../components/Login';
import LoginUser from '../../components/Login/LoginUser'
import RegisterUser from '../../components/Login/RegisterUser'

const LoginPage = () => {
    return (
        <BrowserRouter>
            <Login >
                <Switch>
                    <Route exact path='/login' component={LoginUser} />
                    <Route exact path='/register' component={RegisterUser} />                    
                </Switch>
            </Login>
        </BrowserRouter>
    )
};

export default LoginPage;
