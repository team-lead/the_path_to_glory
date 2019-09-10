import React, { Fragment } from 'react';
import CartSummary from '../../components/Cart/CartSummary';
import Header from '../../components/Header';
import { classes } from './style';
import CartProduct from '../../components/Cart/CartProduct';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { connect } from 'react-redux';

const Cart = ({ productsInCart }) => {
  const {
    products,
    mainContent,
    mainContentWrapper,
    summarySettings
  } = classes;
  const cartProducts = productsInCart.map(product => (
    <CartProduct key={product.id} {...product} />
  ));

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

const mapStateToProps = state => {
  return {
    productsInCart: state.active.cart
  };
};

export default connect(mapStateToProps)(Cart);
