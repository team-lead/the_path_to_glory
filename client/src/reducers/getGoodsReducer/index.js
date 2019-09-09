import { GET_MENS_GOODS_SUCCESS } from "../../actions/getGoodsAction"
import { GET_WOMENS_GOODS_SUCCESS } from "../../actions/getGoodsAction"
import { GET_ACCESSORIES_GOODS_SUCCESS } from "../../actions/getGoodsAction"



const initialState = {
    mensGoodsList: [],
    womensGoodsList: [],
    acsGoodsList: []
}

export function allGoods(state = initialState, action) {
    switch (action.type) {
        case GET_MENS_GOODS_SUCCESS:
            return {
                mensGoodsList: action.payload
            }
        case GET_WOMENS_GOODS_SUCCESS:
            return {
                womensGoodsList: action.payload
            }
        case GET_ACCESSORIES_GOODS_SUCCESS:
            return {
                acsGoodsList: action.payload
            }
        default:
            return state
    }
}