import React from 'react';

import { classes } from './style';

const CartSummary = () => {
  const {
    summaryContainer,
    cartSummary,
    header,
    headerHeading,
    discountText,
    discountField,
    checkoutBtn,
    orderDetails,
    orderDetailsItem
  } = classes;

  return (
    <div className={summaryContainer}>
      <form className={cartSummary}>
        <header className={header}>
          <h2 className={headerHeading}>SHOPPING BAG TOTAL</h2>
          <p className={discountText}>ADD DISCOUNT CODE</p>
          <input className={discountField} type='text' />
        </header>
        <section className={orderDetails}>
          <span className={orderDetailsItem}>
            <span>ORDER VALUE</span>
            <span>$ 1260</span>
          </span>
          <span className={orderDetailsItem}>
            <span>DELIVERY</span>
            <span>FREE</span>
          </span>
          <span className={`${orderDetailsItem} bold`}>
            <span>TOTAL</span>
            <span>$ 420</span>
          </span>
        </section>
        <button className={checkoutBtn}>CHECKOUT</button>
      </form>
    </div>
  );
};

export default CartSummary;
