<<<<<<< HEAD
import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProductsPage from "./pages/ProductsPage";
=======
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import DetailPage from './pages/DetailPage/DetailPage';
import ProductsPage from './pages/ProductsPage';

>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24

const App = () => {
  return (
    <Switch>
      <Route exact path="/cart/checkout" component={Checkout} />
<<<<<<< HEAD
      <Route exact path="/product-list" component={ProductsPage} />
=======
      <Route exact path = "/product-list/mens" component = {ProductsPage}/>
      <Route exact path = "/product-list/womens" component = {ProductsPage}/>
      <Route exact path = "/product-list/accessories" component = {ProductsPage}/>
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
      <Route exact path="/detail/:id" component={DetailPage} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
};
export default App;
