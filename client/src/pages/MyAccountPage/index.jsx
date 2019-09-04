import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import WelcomePage from '../../components/MyAccount/Main'
import Profile from '../../components/MyAccount/Profile'

const MyAccountPage=()=>{
    return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ='/myaccount/main' component={WelcomePage}/>
                    <Route exact path ='/myaccount/profile' component={Profile}/>
                </Switch>
            </BrowserRouter>
    )
};

export default MyAccountPage;
