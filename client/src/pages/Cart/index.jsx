import React, { Fragment, Component } from 'react';
import CartSummary from '../../components/Cart/CartSummary';
import Header from '../../components/Header';
import { classes } from './style';
import CartProduct from '../../components/Cart/CartProduct';

const Cart = () => {
  const { products } = classes;
  const cartProducts = [<CartProduct />, <CartProduct />, <CartProduct />];

  return (
    <Fragment>
      <Header />
      <div>
        <section className={products}>{cartProducts}</section>
        <CartSummary />
      </div>
    </Fragment>
  );
};

export default Cart;
