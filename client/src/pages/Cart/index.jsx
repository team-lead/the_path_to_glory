import React, { Fragment, Component } from 'react';
import CartSummary from '../../components/Cart/CartSummary';
import Header from '../../components/Header';

const Cart = () => {
  return (
    <Fragment>
      <Header />
      <CartSummary />
    </Fragment>
  );
};

export default Cart;
