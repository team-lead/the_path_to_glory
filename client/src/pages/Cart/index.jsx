<<<<<<< HEAD
<<<<<<< HEAD
import React, { Fragment, Component } from "react";
=======
import React, { Fragment } from "react";
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
import CartSummary from "../../components/Cart/CartSummary";
import Header from "../../components/Header";
=======
import React, { Fragment } from 'react';
import CartSummary from '../../components/Cart/CartSummary';
import Header from '../../components/Header';
import { classes } from './style';
import CartProduct from '../../components/Cart/CartProduct';
import Container from '../../components/Container';
import Button from '../../components/Button';
>>>>>>> fa6bd6ea5b036070e468544f875fa889a8957ede

const Cart = () => {
  const {
    products,
    mainContent,
    mainContentWrapper,
    summarySettings
  } = classes;
  const cartProducts = [<CartProduct />, <CartProduct />];

  return (
    <Fragment>
      <Header />
      <main className={mainContent}>
        <Container>
          <Button name='KEEP SHOPING' href='/product-list' black />
          <div className={mainContentWrapper}>
            <section className={products}>{cartProducts}</section>
            <CartSummary settings={summarySettings} />
          </div>
        </Container>
      </main>
    </Fragment>
  );
};

export default Cart;
