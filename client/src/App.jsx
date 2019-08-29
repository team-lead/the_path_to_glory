// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount/MyProfile';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/myaccount/myprofile' component={MyAccount} />
      </Switch>
    </Fragment>
  );
};

export default App;
