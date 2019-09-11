import React, { Fragment } from 'react';

import Header from '../Header';
import LoginMenu from "./LoginMenu";
import { classes } from "./style";

const backgroundLogin = { back: { backgroundColor: "black" } }

const Login = ({ children }) => (
  <Fragment >
    <div className = {classes.wrapper}>
      <Header />
      <LoginMenu />
      {children}
    </div>
  </Fragment>
);

export default Login;