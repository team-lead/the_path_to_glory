import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import DetailPage from './pages/DetailPage/DetailPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/cart/checkout' component={Checkout} />
      <Route exact path='/product-list' component={ProductsPage} />
      <Route exact path='/detail/:id' component={DetailPage} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/' component={MainPage} />
    </Switch>
  );
};
export default App;
