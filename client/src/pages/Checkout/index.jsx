import React, { Fragment } from 'react';
import CheckoutBox from '../../components/Checkout/index';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';

const Cart = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Checkout page!</title>
      </Helmet>
      <Fragment>
        <Header />

        <CheckoutBox />
      </Fragment>
    </Fragment>
  );
};

export default Cart;
