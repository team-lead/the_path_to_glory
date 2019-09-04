// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyAccountPage from './pages/MyAccountPage'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/myaccount/:id' component={MyAccountPage} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/' component={MainPage} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
