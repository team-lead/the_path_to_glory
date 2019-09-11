import React from 'react';
import { classes } from './style';
import productImg from './img/lady.jpg';
import { connect } from 'react-redux';
import { REMOVE_PRODUCT_FROM_CART } from '../../../actions/detailGoodsAction';

const CartProduct = ({
  id,
  images,
  name,
  reference,
  price,
  quantity,
  color,
  size,
  removeProductFromCart
}) => {
  console.log(id);
  return (
    <div className={classes.cartProduct}>
      <img src={productImg} alt='product name' />
      <div className={classes.productDetails}>
        <h3 className={classes.productName}>{name}</h3>
        <p className={classes.ref}>REF: {reference}</p>
        <p className={classes.pruductColor}>
          <span className={classes.detailName}>Color:</span>
          <span>{color}</span>
        </p>
        <p className={classes.productSize}>
          <span className={classes.detailName}>Size:</span>
          <span>{size}</span>
        </p>
        <p className={classes.productQuant}>
          <span className={classes.detailName}>Quantity:</span>
          <span className={classes.productQuantSelectWrapper}>
            <button className={classes.productQuantSelectBtn}>+</button>
            {quantity}
            <button className={classes.productQuantSelectBtn}>-</button>
          </span>
        </p>
        <p className={classes.productPrice}>
          <span className={classes.detailName}>Price:</span>
          <span>{price} $</span>
        </p>
        <p className={classes.TotalProductPrice}>
          <span className={classes.detailName}>Total:</span>
          <span>{price} $</span>
        </p>
      </div>
      <a
        className={classes.removeProduct}
        onClick={() => removeProductFromCart(id)}>
        Remove from basket
      </a>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: payload => {
      dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);
