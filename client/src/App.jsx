// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import DetailPage from "./pages/DetailPage/DetailPage"
import ProductListPage from "./pages/GoodsPage/GoodsPage"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path = "/product-list" component = {ProductListPage}/>
        <Route path = "/detail/:id" component = {DetailPage}/>
      </Switch>
    )
  }
}

export default App;
