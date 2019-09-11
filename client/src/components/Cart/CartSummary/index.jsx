import React from 'react';
import { classes } from './style';
import Button from '../../Button';
import { connect } from 'react-redux';
import { SET_CHECKOUT_TOTAL } from '../../../actions/detailGoodsAction';

const CartSummary = ({ settings, productsInCart, setCheckoutTotal }) => {
  const {
    summaryContainer,
    cartSummary,
    header,
    headerHeading,
    discountText,
    discountField,
    orderDetails,
    checkoutBtn,
    orderDetailsItem
  } = classes;

  const summaryContainerClasses = settings
    ? `${summaryContainer} ${settings}`
    : summaryContainer;

  const orderValue = productsInCart.reduce(
    (value, product) => value + +product.price,
    0
  );

  const checkoutTotal = orderValue;

  return (
    <div className={summaryContainerClasses}>
      <form className={cartSummary}>
        <header className={header}>
          <h2 className={headerHeading}>SHOPPING BAG TOTAL</h2>
          <p className={discountText}>ADD DISCOUNT CODE</p>
          <input className={discountField} type='text' />
        </header>
        <section className={orderDetails}>
          <span className={orderDetailsItem}>
            <span>ORDER VALUE</span>
            <span>{orderValue} $</span>
          </span>
          <span className={orderDetailsItem}>
            <span>DELIVERY</span>
            <span>FREE</span>
          </span>
          <span className={`${orderDetailsItem} bold`}>
            <span>TOTAL</span>
            <span>{orderValue} $</span>
          </span>
        </section>
        <Button
          name='CHECKOUT'
          btnSettings={checkoutBtn}
          href='/cart/checkout'
          black
          onClick={() => setCheckoutTotal(checkoutTotal)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productsInCart: state.active.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCheckoutTotal: payload => dispatch({ type: SET_CHECKOUT_TOTAL, payload })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary);
