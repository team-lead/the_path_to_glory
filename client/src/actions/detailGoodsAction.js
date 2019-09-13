export const GET_GOODS_DETAIL = "GET_GOODS_DETAIL";

export function getGoodsDetailID(id) {
  return async dispatch => {
    await dispatch({
      type: GET_GOODS_DETAIL,
      payload: id
    });
  };
}
