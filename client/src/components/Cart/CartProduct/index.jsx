import React from 'react';
import { classes } from './style';
import image from './img/lady.jpg';
import { connect } from 'react-redux';
import {
  removeProductFromCart,
  decCartProductQuantity,
  incCartProductQuantity
} from '../../../actions/detailGoodsAction';

const CartProduct = ({
  id,
  images,
  name,
  reference,
  price,
  quantity,
  color,
  size,
  removeProductFromCart,
  incCartProductQuantity,
  decCartProductQuantity
}) => {
  const totalPrice = price * quantity;

  return (
    <div className={classes.cartProduct}>
      <img src={image} alt='product name' className={classes.productImg} />
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
            <button
              className={classes.productQuantSelectBtn}
              onClick={() => decCartProductQuantity(id)}>
              -
            </button>
            {quantity}
            <button
              className={classes.productQuantSelectBtn}
              onClick={() => incCartProductQuantity(id)}>
              +
            </button>
          </span>
        </p>
        <p className={classes.productPrice}>
          <span className={classes.detailName}>Price:</span>
          <span>{price} $</span>
        </p>
        <p className={classes.TotalProductPrice}>
          <span className={classes.detailName}>Total:</span>
          <span>{totalPrice} $</span>
        </p>
      </div>
      <a
        className={classes.removeProductBig}
        onClick={() => removeProductFromCart(id)}>
        Remove from basket
      </a>
      <a
        className={classes.removeProductSmall}
        onClick={() => removeProductFromCart(id)}>
        <i class='fas fa-times'></i>
      </a>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: productId =>
      dispatch(removeProductFromCart(productId)),
    decCartProductQuantity: productId =>
      dispatch(decCartProductQuantity(productId)),
    incCartProductQuantity: productId =>
      dispatch(incCartProductQuantity(productId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);
