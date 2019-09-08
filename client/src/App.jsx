import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DetailPage from "./pages/DetailPage/DetailPage"
import ProductListPage from "./pages/GoodsPage/GoodsPage"

const App = () => {
  return (
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path = {`/product-list/mens`} component = {ProductListPage}/>
        <Route exact path = {`/product-list/womens`} component = {ProductListPage}/>
        <Route exact path = {`/product-list/accessories`} component = {ProductListPage}/>
        <Route exact path = "/detail/:id" component = {DetailPage}/>
      </Switch>
  );
};
export default App;
