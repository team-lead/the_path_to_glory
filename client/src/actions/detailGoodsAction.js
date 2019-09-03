export const GET_GOODS_DETAIL = "GET_GOODS_DETAIL";

export  function getGoodsDetailID(id) {
    console.log();
    
    return async (dispatch) => {
            await dispatch({
                    type: GET_GOODS_DETAIL,
                    payload: id
                })
              
    }
}