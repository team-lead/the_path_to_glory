import React from 'react';
import { classes } from './style';
import productImg from './img/lady.jpg';

const CartProduct = () => {
  const { cartProduct, removeProduct, productPic } = classes;

  return (
    <div className={cartProduct}>
      <img className={productPic} src={productImg} alt='product name' />
      <a className={removeProduct}>Remove from basket</a>
    </div>
  );
};

export default CartProduct;
