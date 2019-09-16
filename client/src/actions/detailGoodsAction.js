export const GET_GOODS_DETAIL = 'GET_GOODS_DETAIL';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const SET_CHECKOUT_TOTAL = 'SET_CHECKOUT_TOTAL';
export const DEC_CART_PRODUCT_QUANTITY = 'INC_CART_PRODUCT_QUANTITY';
export const INC_CART_PRODUCT_QUANTITY = 'DEC_CART_PRODUCT_QUANTITY';

export function getGoodsDetailID(id) {
  return async dispatch => {
    await dispatch({
      type: GET_GOODS_DETAIL,
      payload: id
    });
  };
}

export function removeProductFromCart(productId) {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: productId };
}

export function setCheckoutTotal(totalValue) {
  return { type: SET_CHECKOUT_TOTAL, payload: totalValue };
}

export function incCartProductQuantity(productId) {
  return { type: INC_CART_PRODUCT_QUANTITY, payload: productId };
}

export function decCartProductQuantity(productId) {
  return { type: DEC_CART_PRODUCT_QUANTITY, payload: productId };
}
