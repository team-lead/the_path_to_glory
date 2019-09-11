export const GET_GOODS_DETAIL = 'GET_GOODS_DETAIL';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const SET_CHECKOUT_TOTAL = 'SET_CHECKOUT_TOTAL';

export function getGoodsDetailID(id) {
  return async dispatch => {
    await dispatch({
      type: GET_GOODS_DETAIL,
      payload: id
    });
  };
}
