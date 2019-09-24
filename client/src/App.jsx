// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import MyAccountPage from './pages/MyAccountPage';
import LoginPage from './pages/LoginPage';
import Checkout from './pages/Checkout';
import DetailPage from './pages/DetailPage/DetailPage';
import ProductsPage from './pages/ProductsPage';
import Login from './components/User/Login'

const App = () => {
  return (
    
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/myaccount/:id' component={MyAccountPage} />
        <Route exact path='/:id' component={LoginPage} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/cart/checkout' component={Checkout} />
        <Route exact path='/product-list/:category' component={ProductsPage} />
        <Route exact path='/detail/:id' component={DetailPage} />
      </Switch>
    
  );
};
export default App;
