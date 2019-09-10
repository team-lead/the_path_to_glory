import React from 'react';
import { classes } from './style';
import productImg from './img/lady.jpg';

const CartProduct = ({
  id,
  images,
  name,
  reference,
  price,
  quantity,
  color,
  size
}) => {
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
        <h3 className={productName}>{name}</h3>
        <p className={ref}>REF: {reference}</p>
        <p className={pruductColor}>
          <span className={detailName}>Color:</span>
          <span>{color}</span>
        </p>
        <p className={productSize}>
          <span className={detailName}>Size:</span>
          <span>{size}</span>
        </p>
        <p className={productQuant}>
          <span className={detailName}>Quantity:</span>
          <span className={productQuantSelectWrapper}>
            <button className={productQuantSelectBtn}>+</button>
            {quantity}
            <button className={productQuantSelectBtn}>-</button>
          </span>
        </p>
        <p className={productPrice}>
          <span className={detailName}>Price:</span>
          <span>{price} $</span>
        </p>
        <p className={TotalProductPrice}>
          <span className={detailName}>Total:</span>
          <span>{price} $</span>
        </p>
      </div>
      <a className={removeProduct}>Remove from basket</a>
    </div>
  );
};

export default CartProduct;
