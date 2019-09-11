import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MyAccountApp from '../../components/MyAccount'
import WelcomePage from '../../components/MyAccount/Main'
import MyProfile from '../../components/MyAccount/MyProfile'
import MyWishlist from '../../components/MyAccount/MyWishlist'
import PurchaseHistory from '../../components/MyAccount/PurchaseHistory'
import AddressBook from '../../components/MyAccount/AddressBook'
import MyAccountError from '../../components/MyAccount/Error'

const MyAccountPage = () => {
    return (
        <BrowserRouter>
            <MyAccountApp >
                <Switch>
                    <Route exact path='/myaccount/main' component={WelcomePage} />
                    <Route exact path='/myaccount/myprofile' component={MyProfile} />
                    <Route exact path='/myaccount/wishlist' component={MyWishlist} />
                    <Route exact path='/myaccount/history' component={PurchaseHistory} /> 
                    <Route exact path='/myaccount/addressbook' component={AddressBook} />
                    <Route exact path='/myaccount/*' component={MyAccountError} />
                    
                </Switch>
            </MyAccountApp>
        </BrowserRouter>
    )
};

export default MyAccountPage;
