import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';

const App = () => {
  return (
    <Switch>
      <Route path='/cart' component={Cart} />
    </Switch>
  );
};

export default App;
