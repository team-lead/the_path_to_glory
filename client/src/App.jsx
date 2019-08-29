// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import Product from './pages/ProductPage'

import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/product' component={Product} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/checkout' component={Checkout} />

      </Switch>
    </Fragment>
  );
};

export default App;
