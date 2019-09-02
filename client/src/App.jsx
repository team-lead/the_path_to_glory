// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';

import Checkout from './pages/Checkout';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/products' component={ProductsPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
