import React, { Fragment } from 'react';
import CartSummary from '../../components/Cart/CartSummary';
import Header from '../../components/Header';
import { classes } from './style';
import CartProduct from '../../components/Cart/CartProduct';
import Container from '../../components/Container';

const Cart = () => {
  const { products, keepShoppingBtn, cartContainer } = classes;
  const cartProducts = [<CartProduct />, <CartProduct />, <CartProduct />];

  return (
    <Fragment>
      <Header />
      <main>
        <Container containerClass={cartContainer}>
          <button className={keepShoppingBtn}>KEEP SHOPPING</button>
          <div>
            <section className={products}>{cartProducts}</section>
            <CartSummary />
          </div>
        </Container>
      </main>
    </Fragment>
  );
};

export default Cart;
