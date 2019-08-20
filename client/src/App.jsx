// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/index";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Fragment>
  );
};


export default App;
