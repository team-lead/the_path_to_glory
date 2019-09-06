import React from 'react';
import { classes } from './style';
import productImg from './img/lady.jpg';

const CartProduct = () => {
  const {
    cartProduct,
    removeProduct,
    productDetails,
    productName,
    ref,
    pruductColor,
    productSize,
    detailName,
    productQuant,
    productQuantSelectWrapper,
    productQuantSelectBtn,
    productPrice,
    TotalProductPrice
  } = classes;

  return (
    <div className={cartProduct}>
      <img src={productImg} alt='product name' />
      <div className={productDetails}>
        <h3 className={productName}>Gold Dress</h3>
        <p className={ref}>REF: 3294786 - 01</p>
        <p className={pruductColor}>
          <span className={detailName}>Color:</span>
          <span>gold</span>
        </p>
        <p className={productSize}>
          <span className={detailName}>Size:</span>
          <span>8</span>
        </p>
        <p className={productQuant}>
          <span className={detailName}>Quantity:</span>
          <span className={productQuantSelectWrapper}>
            <button className={productQuantSelectBtn}>+</button> 1
            <button className={productQuantSelectBtn}>-</button>
          </span>
        </p>
        <p className={productPrice}>
          <span className={detailName}>Price:</span>
          <span>420 $</span>
        </p>
        <p className={TotalProductPrice}>
          <span className={detailName}>Total:</span>
          <span>420 $</span>
        </p>
      </div>
      <a className={removeProduct}>Remove from basket</a>
    </div>
  );
};

export default CartProduct;
