export const GET_GOODS_DETAIL = "GET_GOODS_DETAIL";

<<<<<<< HEAD
export  function getGoodsDetailID(id) {
    console.log();
    
=======
export  function getGoodsDetailID(id) {    
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
    return async (dispatch) => {
            await dispatch({
                    type: GET_GOODS_DETAIL,
                    payload: id
                })
              
    }
}